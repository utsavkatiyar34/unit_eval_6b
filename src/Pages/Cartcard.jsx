import React from 'react'

export const Cartcard = ({id, quantity, product_id, image, title, price}) => {
  return (
    <div>
        <div className="productcard">
      <img style={{height:'200px',width:'300px',marginLeft:'auto',marginRight:'auto'}} src={image} alt={title}></img>
      <h4>{title}</h4>
      <h4>{quantity}</h4>
      <h4>{price}</h4>
      </div>
    </div>
  )
}
