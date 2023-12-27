


import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import CustomNavbar from '../Navbar';

function Showdepartment() {
  const [users, setUsers] = useState([]);
  const [image, setImage] = useState({});

  useEffect(() => {
    axios.get("http://localhost:5000/show")
      .then(result => {
        setUsers(result.data);
        const images = result.data.reduce((acc, department) => {
          acc[department._id] = department.image;
          return acc;
        }, {});
        setImage(images);
      })
      .catch(err => console.log(err));
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/deletedept/${id}`)
      .then(res => {
        console.log(res);
        window.location.reload();
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
    <div><CustomNavbar/></div>
    <div className='d-flex vh-90 bg-primary justify-content-center align-items-center vw-100 p-3'>
      <div className='w-100 bg-white rounded p-3 font-size-25 m-5 '>
        <Link to="/create" className='btn btn-success'>Add</Link>
        <table className='table p-3'>
          <thead>
            <th>Department Name</th>
            <th>Year Founded</th>
            <th>Discription</th>
            <th>Department Head</th>
            <th>Image</th>
            <th>Action</th>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user.name}</td>
                <td>{user.year}</td>
                <td>{user.discription}</td>
                <td>{user.head}</td>
                <td >
                  {image && image[user._id] && <img style={{height:'200px',width:'270px'}}src={`http://localhost:5000/images/${image[user._id]}`} alt="Uploaded" />}
                </td>
                <td>
                  <Link to={`/update/${user._id}`} className='btn btn-success p-3'>Edit</Link>
                </td>
                <td>
                  <button className='btn btn-danger p-3' onClick={() => handleDelete(user._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
}

export default Showdepartment;
