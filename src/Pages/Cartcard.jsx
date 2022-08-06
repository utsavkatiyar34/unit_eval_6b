import React from 'react'

export const Cartcard = ({id, quantity, product_id}) => {
  return (
    <div>
        <div className="productcard">
      <h4>{id}</h4>
      <h4>{quantity}</h4>
      <h4>{product_id}</h4>
      </div>
    </div>
  )
}
