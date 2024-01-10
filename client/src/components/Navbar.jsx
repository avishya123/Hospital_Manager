import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

function CustomNavbar() {
  return (
    <div style={{marginTop:'0',fontWeight:'bold'}}>
      {[false].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-primary mb-3 vw-100 p-3 fixed-top bg-primary ">
          <Container fluid>
            <Navbar.Brand href="#" style={{wordSpacing:'5px'}}> <span style={{paddingRight:'20px'}}><i class="fa-solid fa-hospital"></i></span>
 <b>CRESCENT HOSPITAL</b></Navbar.Brand>
            <Nav.Link  href="/dashboard">DASHBOARD</Nav.Link>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton style={{backgroundColor:'blue',color:'white'}}>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  PROFILE
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link  href="/showdepartment">Departments</Nav.Link>
                  <Nav.Link href="/showhead">Department head</Nav.Link>
                  <Nav.Link href="/showemp">Employees</Nav.Link>
                  <NavDropdown
                    title="Dropdown"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#/login">
                    <Nav.Link href="/">LogOut</Nav.Link>
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    
                  </NavDropdown>
                </Nav>
                
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </div>
  );
}

export default CustomNavbar;
