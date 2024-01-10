import React, { useState } from 'react';
import './style.css';
 import { useNavigate} from 'react-router-dom';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';

import ListItemText from '@mui/material/ListItemText';

import Showdepartment from './Departments/Showdepartment';
import Showhead from './DepartmentHead/Showhead';
import Showemployee from './Employees/Showemployee';

const drawerWidth = 240;

export default function Dashboard() {
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

      const [selectedPage, setSelectedPage] = useState('Dashboard');

      const handlePageChange = (page) => {
        setSelectedPage(page);
      };

      const renderPage = () => {
        switch (selectedPage) {
           
          case 'Departments':
            return <Showdepartment />;
          case 'Department Heads':
            return <Showhead />;
          case 'Employees':
            return <Showemployee/>
          default:
            return (
              <div>
                <div>
        <div className='main'>
          {items.map((item, index) => (
            <div key={index} className='items'>
              <div className='img'>
                <img src={item.img} alt={item.name} />
              </div>
              <div className='name'>
                {item.name}
              </div>
            </div>
          ))}
          
        </div>
      </div>
              </div>
            );
        }
      };
      const navigate = useNavigate();
      const handleLogout = () => {
       
       navigate('/'); 
      };
    
  return (
   
    <Box sx={{ display: 'flex' }}>
    <CssBaseline />
    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar>
        <Typography variant="h6" noWrap component="div">
        <span style={{paddingRight:'20px'}}><i class="fa-solid fa-hospital"></i></span>
          CRESCENT HOSPITAL
        </Typography>
      </Toolbar>
    </AppBar>
    <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
      <Toolbar />
      <Box sx={{ overflow: 'auto' }}>
         <List className='list'>
            {['Dashboard', 'Departments', 'Department Heads', 'Employees'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton onClick={() => handlePageChange(text)} className='listbutton'>
                  {/* <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon> */}
                  <ListItemText primary={text} className='listtext'/>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {['LogOut'].map((text) => (
              <ListItem key={text} disablePadding>
                <ListItemButton onClick={handleLogout}>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
      </Box>
    </Drawer>
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <Toolbar />
     
      {renderPage()}
    </Box>
  </Box>

  );
}