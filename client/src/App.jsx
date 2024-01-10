import Login from "./components/Login"
import { BrowserRouter, Routes,Route } from "react-router-dom"
import '@fortawesome/fontawesome-free/css/all.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Departments from "./components/Departments";
// import DepartmentDetail from "./components/DepartmentDetail";
// import Navbar from "./components/Navbar";
// import Admindashboard from "./components/Admindashboard";
import 'bootstrap/dist/css/bootstrap.min.css';
import Department from "./components/Departments/Department";
import Showdepartment from "./components/Departments/Showdepartment";
import DepartmentHead from "./components/DepartmentHead/DepartmentHead";
import Showhead from "./components/DepartmentHead/Showhead";
import Employee from "./components/Employees/employee";
import Showemployee from "./components/Employees/Showemployee";
import Updatedept from "./components/Departments/Updatedept";
import Updatehead from "./components/DepartmentHead/Updatehead";
import Updateemp from "./components/Employees/Updateemp";
// import CustomNavbar from "./components/Navbar";
import '../src/components/style.css'
import Profilehead from "./components/DepartmentHead/Profilehead";
import Profiledept from "./components/Departments/Profiledept";
import Profileemp from "./components/Employees/Profileemp";
import Dashboard from "./components/Dashboard";
function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<Login/>}/>
     {/* <Route path="/nav" element={<CustomNavbar/>}/> */}
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/create" element={<Department/>}/>
      <Route path="/showdepartment" element={<Showdepartment/>}/> 
      <Route path="/update/:id" element={<Updatedept/>}/>
      <Route path="/depthead" element={<DepartmentHead/>}/> 
      <Route path="/showhead" element={<Showhead/>}/> 
      <Route path="/showhead/updatehead/:id" element={<Updatehead/>}/>
      <Route path="/employee" element={<Employee/>}/> 
      <Route path="/showemp" element={<Showemployee/>}/> 
      <Route path="/updateemp/:id" element={<Updateemp/>}/>
      <Route path="/profilehead/:head" element={<Profilehead />} />
      <Route path="/profiledept/:dept" element={<Profiledept />} />
      <Route path="/profileemp/:id" element={<Profileemp />} />
    </Routes>
    </BrowserRouter>
       {/* <Dashboard/> */}
    </>
  )
}

export default App
