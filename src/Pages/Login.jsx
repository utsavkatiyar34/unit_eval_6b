import React, { useState } from 'react'
import '../Styles/Signup.css'
import { Button } from '@mui/material';
import axios from 'axios';
import { useDispatch,useSelector } from 'react-redux';
import { loginToDoError, loginToDoLoading, loginToDoSuccess } from '../Store/actions';
import { Navigate, NavLink } from 'react-router-dom';

export const Login = () => {
  const [username,setUsername]=useState('');
  const [password, setPassword]=useState('');
  const dispatch=useDispatch();
  let handleLogin=()=>{
    dispatch(loginToDoLoading());
    axios({
          method: "get",
          url: `http://localhost:4000/users?username=${username}&password=${password}`,
    }).then((res) => {
      if (res.data.length===0){
        alert("Invalid Creditionals");
        return;
      }
            dispatch(loginToDoSuccess(res.data));
            
          })
          .catch((err) => {
            dispatch(loginToDoError());
          });
  }
  const { logdata } = useSelector((state) => state.login); 
  if(logdata.length==1){
    return <Navigate to="/" /> 
  }
  return (
    <div className='signUp'>
        <input
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="inpfields"
          placeholder='Username'
          type="text"
        ></input>
        <input
          required
          value={password}
          name='number'
          onChange={(e) => setPassword(e.target.value)}
          className="inpfields"
          placeholder='Password'
          type="password"
        ></input>
         <Button  variant="solid"
         onClick={handleLogin}
          sx={{
            color: "white",
            backgroundColor: "#900C3F",
            width:'30%',
            borderColor: "#900C3F",
            height:"3vw",
            marginLeft:'auto',
            marginRight:'auto',
            "&:hover": { backgroundColor: "#a0522d" },
          }}>Login</Button>
          <NavLink to="/signup">Not Registered?<br></br> SignUp</NavLink>
     </div>
  )
}
