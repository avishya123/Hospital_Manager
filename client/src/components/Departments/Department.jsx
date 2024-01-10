

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Department() {
  const [name, setName] = useState('');
  const [year, setYear] = useState('');
  const [discription, setDiscription] = useState('');
  const [head, setHead] = useState('');
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const Submit = async (e) => {
    e.preventDefault();

    setLoading(true);

    const formData = new FormData();
    formData.append('file', file);
    formData.append('name', name);
    formData.append('year', year);
    formData.append('discription', discription);
    formData.append('head', head);

    try {
      const result = await axios.post("http://localhost:5000/createdept", formData);
      console.log(result);
      setLoading(false);
      navigate('/showdepartment');
    } catch (error) {
      console.error(error);
      // Handle error, display an error message, etc.
      setLoading(false);
    }
  }

  return (
    
   
   <div className='d-flex vh-100 bg-primary justify-content-center align-items-center vw-100 p-3'>
    <div className='w-50 bg-white rounded p-3'>
        <form onSubmit={Submit}>
          <h2>Add Departments</h2>
          <div className='mb-2'>
            <label>DepartmentName</label>
            <input
              type='text'
              placeholder='Enter Name'
              className='form-control'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {/* <select name="" id="" value={name} onChange={(e) => setName(e.target.value)}>
              <option value=""></option>
              <option value="">CARDIOLOGY</option>
              <option value="">ENT</option>
              <option value="">NEUROLOGY</option>
              <option value="">ICU</option>
              <option value="">INPATIENT</option>
              <option value="">OUTPATIENT</option>
            </select> */}
          </div>
                      <div className='mb-2'>
           <label>year founded</label>
            <input type='number'placeholder='Enter Year' className='form-control'
            onChange={(e) => setYear(e.target.value)}></input>
            </div>
            <div className='mb-2'>
            <label>Discription</label>
             <input type='text'placeholder='Enter Discription' className='form-control'
             onChange={(e) => setDiscription(e.target.value)}></input>
            </div>
            <div className='mb-2'>
            <label>Department Head </label>
             <input type='text'placeholder='Enter Head Name' className='form-control'
           onChange={(e) => setHead(e.target.value)}></input>
            </div>
          <div className='mb-2'>
            <label>Image</label>
            <input
              type='file'
              placeholder='upload'
              className='form-control'
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
          <div>
            <button className='btn btn-success' disabled={loading}>
              {loading ? 'Adding...' : 'ADD'}
            </button>
          </div>
        </form>
      </div>
    </div>
    
  );
}

export default Department;

