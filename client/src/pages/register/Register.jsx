import React from 'react'
import axios from "axios"
import { useState } from 'react'
import { Link } from 'react-router-dom'
import "./Register.css"

export default function Register() {
  const[username,setUsername]=useState("")
  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")
  const[Error,setError]=useState(false)


 const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post("http://localhost:5000/api/auth/register", {
        username,
        email,
        password,
      });
      res.data && window.location.replace("/login");
    } catch (err) {
      setError(true);
    }
  };
  
 


  return (
    <div className='register'>
        <span className='registerTitle'>Register</span>
        <form  className='registerForm' onSubmit={handleSubmit} method="post">
            <label >Username</label>
            <input onChange={event=>setUsername(event.target.value)} className='registerInput' type="text" placeholder='Username' />
            <label >Email</label>
            <input onChange={event=>setEmail(event.target.value)} className='registerInput' type="text" placeholder='Email' />
            <label >Password</label>
            <input onChange={event=>setPassword(event.target.value)} className='registerInput' type="password" placeholder='password' />
            <button className='registerButton'>Register</button>
        </form>
            <button  className='loginButton' type='submit'>
              <Link className="link" to="/login" >Login</Link>
              </button>

    {Error&&<span style={{color:"red",marginTop:"10px"}}>something went wrong!</span>}
        
    </div>
  )
}
