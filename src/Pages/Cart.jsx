import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button } from "@mui/material";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Cartcard } from './Cartcard';

export const Cartpage = () => {
  const { logdata } = useSelector((state) => state.login);
  const [cart, setCart] = useState([]);
  

  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:8080/cart",
    })
      .then((res) => {
        setCart(res.data);
      })
      .catch((err) => console.log(err));
  }, [cart]);

  if(logdata.length===0){
    return <Navigate to="/login"/>
    }
  return (
    <div style={{textAlign:'center'}}>
      <Button
          varient="solid"
          sx={{
            backgroundColor: "purple",
            color: "white",
            height: "35px",
            width: "150px",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "1vw",
            marginBottom: "0",
            "&:hover": { backgroundColor: "purple", color: "white" },
          }}
        >
       Total Items: {cart.length}
        </Button>
      {cart.map((ele)=><Cartcard key={ele.id} {...ele}/>)}
    </div>
  )
}
