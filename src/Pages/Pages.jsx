import React from 'react'
import { Routes, Route } from 'react-router-dom'
import {Home} from '../Pages/Home';
import {Login} from '../Pages/Login';
import { Cartpage } from './Cart';
export const Pages = () => {
  return (
    <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/cart" element={<Cartpage />}></Route>
        <Route path="*" element={<h2>Error... Page not found.</h2>}></Route>
      </Routes>
  )
}
