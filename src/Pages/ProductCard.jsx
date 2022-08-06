import React,{useState} from "react";
import "../Styles/products.css";
import { Button } from "@mui/material";
import ProductModal from "./ProductModal";

export const ProductCard = ({ id, brand, title, price, image, catagory }) => {

  const [modalShow, setModalShow] = React.useState(false);
  const [itemdata, setItemdata] = useState([]);
  const getModal = (id, brand, title, price, image, catagory) => {
    setItemdata([id, brand, title, price, image, catagory]);
    return setModalShow(true);
  };
  return (
    <div className="productcard">
      <img src={image} alt={title}></img>
      <h4>{title}</h4>
      <h4>Price: ₹{price}</h4>
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
        onClick={() => getModal(id, brand, title, price, image, catagory)}
      >
        Details
      </Button>
     
      <ProductModal
        show={modalShow}
        key={itemdata[0]}
        onHide={() => setModalShow(false)}
        id={itemdata[0]}
        title={itemdata[2]}
        brand={itemdata[1]}
        price={itemdata[3]}
        image={itemdata[4]}
        catagory={itemdata[5]}
      />
    </div>
  );
};
