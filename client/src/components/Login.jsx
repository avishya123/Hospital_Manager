import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// import axios from 'axios'
 import { useNavigate } from 'react-router-dom';
function Login() {
  const navigate=useNavigate();
    // useEffect(()=>{
    //   axios.get('http:localhost:5000/login',{email,password})
    //   .then(result=>{console.log(result);
    //     navigate('/dashboard')
    // })
    //   .catch(err=>console.log(err))
    // })
    const submit=(e)=>{
      navigate('/dashboard');
    }
  return (
    <div style={{backgroundColor:'blue',height:'100vh',width:'100vw'}}>
    <div style={{height:'450px',width:'400px',backgroundColor:'white',marginLeft:'300px',textAlign:'center'}}>
    <Form onSubmit={submit}>
      <h1>LOGIN</h1>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
    </div>
  );
}

export default Login;