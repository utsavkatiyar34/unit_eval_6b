import React from "react";
import { Button } from "@mui/material";
import Modal from "react-bootstrap/Modal";
import {v4} from 'uuid';
import axios from "axios";
export default function ProductModal(props) {
  // const [cart,setCart] = useState(false);
  let handleAddtoCart=()=>{
    axios({
      method: "post",
      url: "http://localhost:8080/cart",
      data:{
      id:v4(),
      title:props.title,
      image:props.image,
      quantity:1,
      price:props.price,
      product_id:props.id
      }
    })
      .then((res) => {
        if(res.status===201){
        //  setCart(true);
        }
      })
      .catch((err) => console.log(err));
  }
 
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter"></Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ textAlign: "center",color:'purple' }}>
      
     <h4>{props.title}</h4>
     <img src={props.image} alt={props.title} ></img>
     <h4>{props.catagory}</h4>
     <h4>{props.brand}</h4>
     <h4>Price: ₹{props.price}</h4>
      </Modal.Body>
      <Modal.Footer>
      <Button
          varient="solid"
          sx={{
            backgroundColor: "purple",
            color: "white",
            height: "35px",
            width: "150px",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: ".5vw",
            marginBottom: "0",
            "&:hover": { backgroundColor: "purple", color: "white" },
          }}
          onClick={()=>{handleAddtoCart()}}
        >
          Add to cart
        </Button>
        <Button
          varient="solid"
          sx={{
            backgroundColor: "purple",
            color: "white",
            height: "35px",
            width: "100px",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: ".5vw",
            marginBottom: "0",
            "&:hover": { backgroundColor: "purple", color: "white" },
          }}
          onClick={props.onHide}
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
