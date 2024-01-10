import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function Updatedept() {
  const [name, setName] = useState('');
  const [year, setYear] = useState('');
  const [discription, setDiscription] = useState('');
  const [head, setHead] = useState('');
  const [file, setFile] = useState(null); // Use null instead of an empty string
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:5000/showdept/${id}`)
      .then(result => {
        console.log(result);
        setName(result.data.name);
        setYear(result.data.year);
        setDiscription(result.data.discription);
        setHead(result.data.head);
        setFile(result.data.files && result.data.files.length > 0 ? result.data.files[0] : null);
      })
      .catch(err => console.log(err));
  }, [id]);

  const Update = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
    formData.append('name', name);
    formData.append('year', year);
    formData.append('discription', discription);
    formData.append('head', head);

    axios.put(`http://localhost:5000/updatedept/${id}`, formData)
      .then(result => {
        console.log(result);
        navigate('/showdepartment');
      })
      .catch(err => {
        console.error(err); // Log the full error details
      });
  }

  return (
    <div>
      <div className='d-flex vh-100 bg-primary justify-content-center align-items-center vw-100 p-3'>
        <div className='w-50 bg-white rounded p-3'>
          <form>
            <h2>Edit Departments</h2>
            <div className='mb-2'>
              <label>Department Name</label>
              <input
                type='text'
                placeholder='Enter Name'
                className='form-control'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className='mb-2'>
              <label>Year Founded</label>
              <input
                type='number'
                placeholder='Enter Year'
                className='form-control'
                value={year}
                onChange={(e) => setYear(e.target.value)}
              />
            </div>
            <div className='mb-2'>
              <label>Description</label>
              <input
                type='text'
                placeholder='Enter Description'
                className='form-control'
                value={discription}
                onChange={(e) => setDiscription(e.target.value)}
              />
            </div>
            <div className='mb-2'>
              <label>Department Head</label>
              <input
                type='text'
                placeholder='Enter Head Name'
                className='form-control'
                value={head}
                onChange={(e) => setHead(e.target.value)}
              />
            </div>
            <div className='mb-2'>
              <label>Image</label>
              <input
                type='file'
                placeholder='Upload'
                className='form-control'
                onChange={(e) => setFile(e.target.files[0])}
              />
              {file && (
                <div>
                  Selected File: {file.name}
                </div>
              )}
            </div>
            <div>
              <button className='btn btn-success' onClick={Update}>UPDATE</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Updatedept;
