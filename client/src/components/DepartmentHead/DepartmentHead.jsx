
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function DepartmentHead() {
  const [name, setName] = useState('');
  const [empnumber, setEmpnumber] = useState('');
  const [age, setAge] = useState('');
  const [file, setFile] = useState(null);
  const [dept, setDept] = useState('');
  const [discription, setDiscription] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const Submit = (e) => {
    e.preventDefault();

    if (!name || !empnumber || !age || !file || !dept || !discription) {
      setError('All fields are required');
      return;
    }

    setLoading(true);
    setError('');

    const formData = new FormData();
    formData.append('file', file);
    formData.append('name', name);
    formData.append('empnumber', empnumber);
    formData.append('age', age);
    formData.append('dept', dept);
    formData.append('discription', discription);

    axios.post("http://localhost:5000/createhead", formData)
      .then(result => {
        console.log(result);
        setLoading(false);
        navigate('/showhead');
      })
      .catch(err => {
        console.log(err);
        setError('Error adding department head');
        setLoading(false);
      });
  }

  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center vw-100'>
      <div className='w-50 bg-white rounded p-3'>
        <form onSubmit={Submit}>
          <h2>Add Department Heads</h2>
          <div className='mb-2'>
            <label>Head Name</label>
            <input type='text' placeholder='Enter Name' className='form-control' onChange={(e) => setName(e.target.value)} />
          </div>
          <div className='mb-2'>
            <label>Employee Number</label>
            <input type='number' placeholder='Enter ID' className='form-control' onChange={(e) => setEmpnumber(e.target.value)} />
          </div>
          <div className='mb-2'>
            <label>Age</label>
            <input type='number' placeholder='Enter Age' className='form-control' onChange={(e) => setAge(e.target.value)} />
          </div>
          <div className='mb-2'>
            <label>Profile Picture</label>
            <input type='file' placeholder='Upload' className='form-control' onChange={(e) => setFile(e.target.files[0])} />
          </div>
          <div className='mb-2'>
            <label>Department</label>
            <input type='text' placeholder='Department' className='form-control' onChange={(e) => setDept(e.target.value)} />
          </div>
          <div className='mb-2'>
            <label>Description</label>
            <input type='text' placeholder='Description' className='form-control' onChange={(e) => setDiscription(e.target.value)} />
          </div>
          <div>
            <button className='btn btn-success' disabled={loading}>
              {loading ? 'Adding...' : 'Add'}
            </button>
          </div>
          {error && <div className='text-danger mt-2'>{error}</div>}
        </form>
      </div>
    </div>
  );
}
