import React from 'react'
import "../Styles/Navbar.css";
import{NavLink}from "react-router-dom";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from '../Store/actions';
export const Navbar = () => {
  const { token } = useSelector((state) => state.login);
  const dispatch=useDispatch();
 let handleLogout= () =>{
  dispatch(logOut());
 }
  return (
        <nav className="navbar">
        <div className='logonav'>
        <NavLink to="/" className='logonav-nav'> &#60; Trends &#47; &#62;</NavLink>
        </div>
        <div className='menu'>
        {token ? (
          <ul>
            <NavLink to="/" className="menulinks">
            <NavLink to="/cart" style={{color:'white',textDecoration:'none'}}>
            <Button
          varient="solid"
          sx={{
            backgroundColor: "purple",
            color: "white",
            height: "35px",
            width: "100px",
            marginLeft:'auto',
            marginRight:'1vw',
            "&:hover": { backgroundColor: "purple", color: "white" },
          }}
          >
            Cart
          </Button>
          </NavLink>
            <Button
          varient="solid"
          sx={{
            backgroundColor: "purple",
            color: "white",
            height: "35px",
            width: "100px",
            marginLeft:'auto',
            marginRight:'auto',
            "&:hover": { backgroundColor: "purple", color: "white" },
          }}
          onClick={()=>handleLogout()}>
            Logout
          </Button>

            </NavLink>
          </ul>
        ) : (
          <ul>
            <NavLink to="/login" className="menulinks">
              Login
            </NavLink>
          </ul>
        )}
        </div>
      </nav>
  )
}
