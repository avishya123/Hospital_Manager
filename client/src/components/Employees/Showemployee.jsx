import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
// import CustomNavbar from '../Navbar';

export default function Showemployee() {
     const[users, setUsers] = useState([])
  const [image, setImage] = useState({});

    useEffect(()=>{
axios.get("http://localhost:5000/showe")
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
      axios.delete('http://localhost:5000/deleteemp/'+id)
     .then(res =>{ console.log(res)
    window.location.reload()
    })
    }
  return (
      <div>
    {/* <div><CustomNavbar/></div> */}
        <div className='d-flex vh-90 bg-primary justify-content-center align-items-center  p-3'>
      <div className='w-100 bg-white rounded p-3 font-size-25 m-5'>
        <Link to="/employee" className='btn btn-success'>Add</Link>
<table className='table'>
    <thead>
       <th>Employee Name</th>
       {/* <th>Employee Number</th> */}
       {/* <th>Age</th> */}
       <th>Image</th>
       <th>Department</th>
       {/* <th>Discription</th> */}
       <th>Action</th>
    </thead>
<tbody>{
    users.map((user)=>{
       //if we use array we don't use return,  but if we use curly braces we want use curly braces.
return <tr key={user.id}>              
       <td>{user.name}</td>
    {/* <td>{user.empnumber}</td> */}
    {/* <td>{user.age}</td> */}
    <td>{image && image[user._id] && <img src={`http://localhost:5000/images/${image[user._id]}`} alt="Uploaded" />}</td>
    <td>{user.dept}</td>
    {/* <td>{user.discription}</td> */}

    <td>
    <Link to={`/updateemp/${user._id}`} className='btn btn-success p-3'>Edit</Link> </td>
     <td><button className='btn btn-danger p-3' onClick={(e) => handleDelete(user._id)}>Delete</button></td>
    <td><Link to={`/profileemp/${user._id}`} className='btn btn-success p-3'>View</Link> </td>
</tr>
    })
    }
    
</tbody>
</table>
      </div>
    </div>
    </div>
  )
}
