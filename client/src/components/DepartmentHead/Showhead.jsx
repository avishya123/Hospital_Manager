import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
// import CustomNavbar from '../Navbar';

export default function Showhead() {
    const[users, setUsers] = useState([])
  const [image, setImage] = useState({});

    useEffect(()=>{
axios.get("http://localhost:5000/showh")
.then(result => {setUsers(result.data)
  const images = result.data.reduce((acc, department) => {
    acc[department._id] = department.image;
    return acc;
  }, {});
  setImage(images);
})
.catch(err => console.log(err))
    },[])

    const handleDelete= (id) => {
      axios.delete('http://localhost:5000/deletehead/'+id)
     .then(res =>{ console.log(res)
    window.location.reload()
    })
    }
  return (
    <div style={{paddingLeft:'200px'}}>
    {/* <div><CustomNavbar/></div> */}
         <div className='d-flex vh-90 bg-primary justify-content-center align-items-center  p-3'>
      <div className='w-100 bg-white rounded p-3 font-size-25 m-5'>
        <Link to="/depthead" className='btn btn-success'>Add</Link>
<table className='table'>
    <thead>
       <th>Department Head Name</th>
       {/* <th>Employee Number</th> */}
       {/* <th>Age</th> */}
       <th>Image</th>
       <th>Department</th>
       {/* <th>Discription</th> */}
       <th>Action</th>
    </thead>
    <tbody>
  {users.map((user) => (
    <tr key={user._id}>
      <td> <Link to={`/profilehead/${user.namee}`}>{user.name}</Link></td>
      {/* <td>{user.empnumber}</td> */}
      {/* <td>{user.age}</td> */}
      <td>{image && image[user._id] && <img src={`http://localhost:5000/images/${image[user._id]}`} alt="Uploaded" />}</td>
      <td><Link to={`/profiledept/${user.dept}`}>{user.dept}</Link></td>
      {/* <td>{user.discription}</td> */}
      <td>
      <Link to={`/showhead/updatehead/${user._id}`} className='btn btn-success p-3'>Edit</Link>
      </td>
      <td>
        <button className='btn btn-danger p-3' onClick={(e) => handleDelete(user._id)}>Delete</button>
      </td>
    </tr>
  ))}
</tbody>

</table>
      </div>
    </div>
    </div>
  )
}
