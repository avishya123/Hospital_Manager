import React,{useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
export default function Employee() {
    const [name,setName] = useState()
    const [empnumber,setEmpnumber] = useState()
    const [age,setAge] = useState()
    const [file,setFile] = useState()
    const [dept,setDept] = useState()
    const [discription,setDiscription] = useState()
  const [loading, setLoading] = useState(false);
    
    const navigate = useNavigate()
  
  
    const Submit = (e) => {
      e.preventDefault();
    setLoading(true);

      const formData = new FormData();
      formData.append('file',file) ;
      formData.append('name',name) ; 
      formData.append('empnumber',empnumber) ; 
      formData.append('age',age) ; 
      formData.append('dept',dept) ; 
      formData.append('discription',discription) ;
      axios.post("http://localhost:5000/createemp",formData)
      .then(result =>{
        console.log(result)
        setLoading(false);
        navigate('/showemp')
      }) 
      
      .catch(err => {
        console.log(err);
        setLoading(false);
      })
    }
  return (
    <div>
   <div className='d-flex vh-100 bg-primary justify-content-center align-items-center vw-100'>
      <div className='w-50 bg-white rounded p-3'>
        <form onSubmit={Submit}>
            <h2>Add Employees</h2>
            <div className='mb-2'>
            <label>Employee_Name</label>
            <input type='text'placeholder='Enter Name' className='form-control'
             onChange={(e) => setName(e.target.value)}>
             </input>
            </div>
            <div className='mb-2'>
            <label>Employee number</label>
            <input type='number'placeholder='Enter id' className='form-control'
            onChange={(e) => setEmpnumber(e.target.value)}></input>
            </div>
            <div className='mb-2'>
            <label>Age</label>
            <input type='number'placeholder='Enter age' className='form-control'
            onChange={(e) => setAge(e.target.value)}></input>
            </div>
            <div className='mb-2'>
            <label>Profile pic </label>
            <input type='file'placeholder='upload' className='form-control'
            onChange={(e) => setFile(e.target.files[0])}></input>
            </div>
            <div className='mb-2'>
            <label>Department</label>
            <input type='text'placeholder='department' className='form-control'
            onChange={(e) => setDept(e.target.value)}></input>
            </div>
            <div className='mb-2'>
            <label>Discription</label>
            <input type='text'placeholder='discription' className='form-control'
            onChange={(e) => setDiscription(e.target.value)}></input>
            </div>
            <div>
            <button className='btn btn-success' disabled={loading}>
              {loading ? 'Adding...' : 'Add'}
            </button>
            </div>
        </form>
      </div>
    </div>
    </div>
  )
}
