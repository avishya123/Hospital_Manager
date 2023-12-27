import React, { useState } from 'react'
import Navbar from "./Navbar";
import './style.css';
export default function Admindashboard() {
  const [items,setitems]=useState([
    {
      img:'https://www.lisiehospital.org/uploads/Department_images/5xCPOcDSA15pq4TJZXw6vYuWHpIUkOFLHidx6io9.jpeg',
      id:1,
      name:'CARDIOLOGY DEPARTMENT'
    },
    {
      img:'https://jeevanjyotihospital.com/images/ENT.jpg',
      id:2,
      name:'ENT DEPARTMENT'
    },
    {
      img:'https://careandcurehospital.co.in/wp-content/uploads/2022/02/neurology-manu-hospital.jpg',
      id:3,
      name:'NEUROLOGY DEPARTMENT'
    },, {
      img:'https://vishwarajhospital.com/wp-content/uploads/2021/01/icu-1024x704.jpg',
      id:4,
      name:'ICU DEPARTMENT'
    },, {
      img:'https://www.aucmed.edu/sites/g/files/krcnkv361/files/styles/atge_default_md/public/migrations/media/clinical-sciences-4-students-and-patient.jpg?itok=2zwhBXFn',
      id:5,
      name:'INPATIENT DEPARTMENT'
    },, {
      img:'https://healthysure.in/wp-content/uploads/2023/06/5ea8f7ab-2f0f-4232-a110-ce2c2a2b3e68.jpg',
      id:6,
      name:'OUTPATIENT DEPARTMENT'
    },
  ]);
  return (
    <div>
      <div><Navbar/></div>
      <div className='main'>
    {items.map((item, index) => (
      <div key={index} className='items'>
        <div className='img'>
          <img src={item.img}  />
        </div>
        <div className='name'>
          {item.name}
        </div>
      </div>
    ))}
      </div>
  </div>
)}
