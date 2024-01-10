import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {  useParams,Link } from 'react-router-dom';
import CustomNavbar from '../Navbar';

export default function Profilehead() {
  const { head } = useParams();
  const [name, setName] = useState('');
  const [empnumber, setEmpnumber] = useState('');
  const [age, setAge] = useState('');
  const [image, setImage] = useState([]);
  const [dept, setDept] = useState('');
  const [discription, setDiscription] = useState('');
  const [_id, set_id] = useState('');

  useEffect(() => {
    axios.get(`http://localhost:5000/showprofilehead/${head}`)
      .then(result => {
        console.log(result);

        const data = result.data || {};
        setName(data.name || '');
        setEmpnumber(data.empnumber || '');
        setAge(data.age || '');
        setImage(data.image || []); // Change 'files' to 'image'
        setDept(data.dept || '');
        setDiscription(data.discription || '');
        set_id(data._id || '');
        // Log image URLs to the console
        if (Array.isArray(data.image)) {
          console.log('Image URLs:', data.image.map(img => `http://localhost:5000/images/${img}`));
        } else {
          console.log('Image URL:', `http://localhost:5000/images/${data.image}`);
        }
      })
      .catch(err => console.log(err));
  }, [head]);

  return (
    <>
    <div><CustomNavbar/></div>
    <div style={{paddingLeft:'450px',height:'80vh',width:'100vw'}}>
       <div style={{border:'2px solid black',width:'620px',textAlign:'center',fontSize:'25px',height:'700px',backgroundColor:'lightskyblue'}}>
        <form action="" >
        <div style={{ paddingTop:'20px',paddingLeft:'40px' }}>
                {Array.isArray(image) ? (
                  image.map(img => (
                    <img key={img} style={{ height: '250px', width: '300px',borderRadius:'50%',paddingTop:'50px',paddingLeft:'20px' }} src={`http://localhost:5000/images/${img}`} alt="Uploaded" />
                  ))
                ) : (
                  <img style={{ height: '200px', width: '270px',borderRadius:'50%' }} src={`http://localhost:5000/images/${image}`} alt="Uploaded" />
                )}
              </div>
          <div style={{ height: '400px', width: '610px',paddingLeft:'70px' }}>
        <h2  style={{border:'none',textAlign:'center',color:'blue',width:'500px',fontSize:'50px'}}>{name}</h2>
              <table style={{border:'none'}}>
                <tr>
              <td><label htmlFor="">Name  :</label></td>
              <td>{name}</td><br />
              </tr>
              <tr>
              <td><label htmlFor="">Employee Number  :</label></td>
              <td>{empnumber}</td> <br />
              </tr>
             <tr>
              <td><label htmlFor="">Age  :</label></td>
              <td>{age}</td><br />
              </tr>
              <tr>
              <td><label htmlFor="">Department  :</label></td>
              <td><Link to={`/profiledept/${dept}`} style={{color:'blue'}}> <u>{dept}</u></Link></td><br />
              </tr>
              <tr>
              <td><label htmlFor="">Discription  :</label></td>
              <td>{discription}</td>
              <br />
              </tr>
              </table>
          </div>
          <div><Link to={`/showhead/updatehead/${_id}`} className='btn btn-success p-3'>Edit</Link>
</div>
        </form>
        </div>
    </div>
    </>
  );
}
