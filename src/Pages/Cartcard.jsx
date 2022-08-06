import { Button } from "@mui/material";
import axios from "axios";
import React from "react";

export const Cartcard = ({ id, quantity, product_id, image, title, price }) => {
//  const [cart, setCart] = useState([]);
  let handleRemove = (id) => {
    axios({
      method: "delete",
      url: `http://localhost:8080/cart/${id}`,
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };
  let handleIncrement = (id) =>{
        axios({
                method: "patch",
                url: `http://localhost:8080/cart/${id}`,
                data: {
                  quantity: quantity+1,
                },
              })
                .then((res) => {
                  console.log(res);
                })
                .catch((err) => console.log(err));
  }
  let handleDecrement = () =>{
        if(quantity===1){
handleRemove(id);
        }
        else{
        axios({
        method: "patch",
        url: `http://localhost:8080/cart/${id}`,
        data: {
          quantity: quantity-1
        }
      })
        .then((res) => {
          console.log(res)
        })
        .catch((err) => {console.log(err)});
  }
  }
  return (
    <div>
      <div
        className="productcard"
        style={{ width: "30%", marginLeft: "auto", marginRight: "auto" }}
      >
        <h2>{title}</h2>
        <img
          style={{
            height: "300px",
            width: "250px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
          src={image}
          alt={title}
        ></img>
        <h4>Quantity: {quantity}</h4>
        <h4>Price: ₹{price}</h4>
        <div>
        <Button
          varient="solid"
          sx={{
            backgroundColor: "purple",
            color: "white",
            height: "35px",
            width: "50px",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: ".5vw",
            marginBottom: "0",
            "&:hover": { backgroundColor: "purple", color: "white" },
          }}
          onClick={() => {
            handleDecrement(id);
          }}
        >
        -
        </Button>

        <Button
          varient="solid"
          sx={{
            backgroundColor: "purple",
            color: "white",
            height: "35px",
            width: "150px",
            marginLeft: "10px",
            marginRight: "10px",
            marginTop: ".5vw",
            marginBottom: "0",
            "&:hover": { backgroundColor: "purple", color: "white" },
          }}
          onClick={() => {
            handleRemove(id);
          }}
        >
          Remove item
        </Button>
       
        <Button
          varient="solid"
          sx={{
            backgroundColor: "purple",
            color: "white",
            height: "35px",
            width: "50px",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: ".5vw",
            marginBottom: "0",
            "&:hover": { backgroundColor: "purple", color: "white" },
          }}
          onClick={() => {
            handleIncrement(id);
          }}
        >
          +
        </Button>
        </div>
      </div>
    </div>
  );
};
