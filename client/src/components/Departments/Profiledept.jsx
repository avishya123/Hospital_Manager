import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams ,Link} from 'react-router-dom';
import CustomNavbar from '../Navbar';

export default function Profiledept() {
  const { dept } = useParams();

  const [name, setName] = useState('');
  const [year, setYear] = useState('');
  const [discription, setDiscription] = useState('');
  const [head, setHead] = useState('');
  const [image, setImage] = useState(null);
  const [_id, set_id] = useState('');

  useEffect(() => {
    axios.get(`http://localhost:5000/showprofiledept/${dept}`)
      .then(result => {
        console.log(result);

        const data = result.data || {};
        setName(data.name || '');
        setYear(data.year || '');
        setDiscription(data.discription || '');
        setImage(data.image || null); // Change 'files' to 'image'
        setHead(data.head || '');
        
        set_id(data._id || '');
        // Log image URLs to the console
        if (Array.isArray(data.image)) {
          console.log('Image URLs:', data.image.map(img => `http://localhost:5000/images/${img}`));
        } else if (data.image !== null && data.image !== undefined) {
          console.log('Image URL:', `http://localhost:5000/images/${data.image}`);
        }
      })
      .catch(err => console.log(err));
  }, [dept]);

  return (
    <>
      <div><CustomNavbar/></div>
      <div style={{ paddingLeft: '450px', height: '80vh', width: '100vw' }}>
        <div style={{ border: '2px solid black', width: '600px', textAlign: 'center', fontSize: '25px', height: '700px', backgroundColor: 'lightskyblue' }}>
          <form action="" >
            <div >
              {image !== null ? (
                Array.isArray(image) ? (
                  image.map(img => (
                    <img key={img} style={{ height: '350px', width: '590px',objectFit:'cover' }} src={`http://localhost:5000/images/${img}`} alt="Uploaded" />
                  ))
                ) : (
                  <img style={{ height: '350px', width: '590px' ,objectFit:'cover'}} src={`http://localhost:5000/images/${image}`} alt="Uploaded" />
                )
              ) : (
                <p>No image available</p>
              )}
            </div>
            <div style={{ height: '400px', width: '610px', paddingLeft: '70px' }}>
              <h2 style={{ border: 'none', textAlign: 'center', color: 'blue', width: '500px',fontSize:'50px' }}>{name}</h2>
              <table style={{ border: 'none' }}>
                <tr>
                  <td><label htmlFor="">Department Name:</label></td>
                  <td>{name}</td>
                </tr>
                <tr>
                  <td><label htmlFor="">Year Founded:</label></td>
                  <td>{year}</td>
                </tr>
                <tr>
                  <td><label htmlFor="">Department Head:</label></td>
                  <td><Link to={`/profilehead/${head}`} style={{color:'blue'}}> <u>{head}</u></Link></td>
                </tr>
                <tr>
                  <td><label htmlFor="">Description:</label></td>
                  <td>{discription}</td>
                </tr>
              </table>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
