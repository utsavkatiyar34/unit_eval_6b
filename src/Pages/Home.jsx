import React from 'react'
import '../App.css'
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Products } from './Products';

export const Home = () => {
  const { logdata } = useSelector((state) => state.login);
  if(logdata.length===0){
    return <Navigate to="/login"/>
  }
  return (
    <div className='.App'>
      <Products/>
    </div>
  )
}