import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Cartcard } from './Cartcard';

export const Cartpage = () => {
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
  }, []);
  return (
    <div>
      {cart.map((ele)=><Cartcard key={ele.id}{...ele}/>)}
    </div>
  )
}
