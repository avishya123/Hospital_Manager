import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { useNavigate,useParams } from 'react-router-dom'
export default function Updatehead() {
    const [name,setName] = useState()
    const [empnumber,setEmpnumber] = useState()
    const [age,setAge] = useState()
    // const [image,setImage] = useState()
  const [file,setFile] = useState()
    const [dept,setDept] = useState()
    const [discription,setDiscription] = useState()
    const { id } = useParams();
    const navigate = useNavigate()
    useEffect (()=>{
        axios.get("http://localhost:5000/showhead/"+id)
        .then(result =>{ console.log(result)
          setName(result.data.name);
               setEmpnumber(result.data.empnumber);
               setAge(result.data.age)
               setFile(result.data.files && result.data.files.length > 0 ? result.data.files[0] : '');
               setDept(result.data.dept);
                setDiscription(result.data.discription);
        })
      .catch(err => console.log(err))
          },[id])
  
    const Update = (e) => {
      e.preventDefault();
      const formData = new FormData();
    formData.append('file', file);
    formData.append('name', name);
    formData.append('empnumber', empnumber);
    formData.append('age', age);
    formData.append('dept', dept);
    formData.append('discription', discription);
    axios.put(`http://localhost:5000/updatehead/${id}`, formData)
  .then(result => {
    console.log(result);
    navigate('/showhead');
  })
  .catch(err => console.log(err));
    }
  return (
    <div>
   <div className='d-flex vh-100 bg-primary justify-content-center align-items-center vw-100'>
      <div className='w-50 bg-white rounded p-3'>
        <form onSubmit={Update}>
            <h2>Update Department Heads</h2>
            <div className='mb-2'>
            <label>Head_Name</label>
            <input type='text'placeholder='Enter Name' className='form-control'
            value={name}
             onChange={(e) => setName(e.target.value)}>
             </input>
            </div>
            <div className='mb-2'>
            <label>Employee number</label>
            <input type='number'placeholder='Enter id' className='form-control'
            value={empnumber}
            onChange={(e) => setEmpnumber(e.target.value)}></input>
            </div>
            <div className='mb-2'>
            <label>Age</label>
            <input type='number'placeholder='Enter age' className='form-control'
            value={age}
            onChange={(e) => setAge(e.target.value)}></input>
            </div>
            <div className='mb-2'>
            <label>Profile pic </label>
            <input type='file'placeholder='upload' className='form-control'
            onChange={(e) => setFile(e.target.files[0])}></input>
            </div>
            <div className='mb-2'>
            <label>Department</label>
            <input type='text'placeholder='discription' className='form-control'
            value={dept}
            onChange={(e) => setDept(e.target.value)}></input>
            </div>
            <div className='mb-2'>
            <label>Discription</label>
            <input type='text'placeholder='discription' className='form-control'
            value={discription}
            onChange={(e) => setDiscription(e.target.value)}></input>
            </div>
            <div>
                <button className='btn btn-success'>Update</button>
            </div>
        </form>
      </div>
    </div>
    </div>
  )
}
