import React, { useState, useEffect } from "react";
import axios from 'axios';
import { ProductCard } from "./ProductCard";
import "../Styles/products.css"

export const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:8080/products",
    })
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return <div className="productdiv" >
        {products.map((el, ind)=><ProductCard key={el.id}{...el}/>)}
  </div>;
};
