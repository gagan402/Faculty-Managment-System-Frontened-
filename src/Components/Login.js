import React from "react";
import { useState ,useEffect} from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
//import "bootstrap/dist/css/bootstrap.min.css";
import './login.css';
import axios from 'axios';
import {useNavigate} from "react-router-dom";


function Login() {

   const [values,setValues]=useState(
    {
        email:'',
        password:''
    }
   )
   
  const navigate = useNavigate()

  const [error,setError]= useState('');
  const [showLogin , setShowLogin] = useState(false);
  useEffect(() => {
    const delayToShowLogin = setTimeout(() =>{
      setShowLogin(true);
    },1000);
    return () => {
      clearTimeout(delayToShowLogin);
    }
  }, []);

   const handleSubmit=(event) =>{
    event.preventDefault();
    axios.post('http://localhost:8081/login',values)
    .then(res=>{
      if(res.data.Status==="Success")
      {
           navigate('/');
      }
      else{
        setError(res.data.Error);
      }
    })
    .catch(err =>console.log(err));
   }


  return (
    <div className=" jusify-content-center align-items-center vh-100  loginPage">
      <div className="header">
        <h1>TeachTrack: Faculty Management Suite</h1>
      </div>
      <div className={` p-3 rounded w-30 mx-auto loginForm  justify-content-center align-items-center login ${showLogin ? 'slide-in' : 'hidden'}`}>
        <div className={`text-danger ${showLogin ? 'fade-in' : 'hidden'}`}>
          {error && error}
        </div>
        <Form onSubmit={handleSubmit}>
          <h1>Login to Track</h1>
          <Form.Group className="mb-2" controlId="formGroupEmail">
            <Form.Label><strong>Email Id</strong></Form.Label>
            <Form.Control type="email" placeholder="Enter email"  onChange={e=> setValues({...values,email:e.target.value})}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label><strong>Password</strong></Form.Label>
            <Form.Control type="password" placeholder=" Enter Password" onChange={e=> setValues({...values,password:e.target.value})} />
          </Form.Group>

            <div className="d-grid">
            <Button  size="lg" className={`loggbtn ${showLogin ? 'fade-in' : 'hidden'}`} type="submit">
              Log in 
            </Button>
            </div>
            <p className="note">
    Track your Faculty through Teach Track:)
            </p>
            
        </Form>
      </div>
    </div>
  );
}
export default Login;


/*

import React, { useState, useEffect } from 'react';
import './login.css';
import axios from 'axios';
import {useNavigate} from "react-router-dom";

const Login = () => {
    const [values, setValues] = useState({
        email: '',
        password: ''
    });

    const [isValidEmail, setIsValidEmail] = useState(false);
    const [error, setError] = useState('');
    const [showLogin, setShowLogin] = useState(false);

    useEffect(() => {
        const delayToShowLogin = setTimeout(() => {
            setShowLogin(true);
        }, 1000);

        return () => {
            clearTimeout(delayToShowLogin);
        };
    }, []);
   
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post('/login', values)
            .then((res) => {
                if (res.data.Status === 'Success') {
                    // Handle successful login
                    navigate('/');
                } else {
                    setError(res.data.Error);
                }
            })
            .catch((err) => console.log(err));
    };

    

    return (
        <div className="main">
            <div className='header'><h1>Faculty Manager</h1></div>
            <div className={`login ${showLogin ? 'slide-in' : 'hidden'}`}>
              <form onSubmit={handleSubmit}>
                <div className='text-danger'>
                    {error && error}
                </div>
                <h2>Login</h2>
                <div className={`inp ${!isValidEmail ? 'invalid-email' : ''}`}>
                    <label>Email</label>
                    <input type="email" placeholder="Email address" onChange={e=> setValues({...values,email:e.target.value})} />
                </div>
                <div className="inp">
                    <label>Password</label>
                    <input type="password" placeholder="Password" onChange={e=> setValues({...values,password:e.target.value})} />
                </div>
                <button className={`login-button ${showLogin ? 'fade-in' : 'hidden'}`}>Log In</button>
                </form>
            </div>
        </div>
    );
};

export default Login;*/