import axios from "axios";
import { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./Login.css";



export default function Register() {
  const usernameRef = useRef();
  const passwordRef = useRef();
  const {dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        username: usernameRef.current.value,
        password: passwordRef.current.value,
      });
      
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };

  return (
    <div className='login'>
        <span className='loginTitle'>Login</span>
        <form  className='loginForm' onSubmit={handleSubmit}>
            <label >Username</label>
            <input 
            className='loginInput'
            type="text" 
            placeholder='username'
            ref={usernameRef}
            />
            <label >Password</label>
            <input 
            className='loginInput' 
            type="password" 
            placeholder='password'
            ref={passwordRef}
            />
            <button className='loginB'type="submit" disabled={isFetching}>Login</button>
        </form>
            <button className='registerB' type='submit'>
              <Link className='link' to="/register">Register</Link>
              </button>

        
    </div>
  )
}


