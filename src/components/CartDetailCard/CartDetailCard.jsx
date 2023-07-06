import React from "react";
import "./CartDetailCard.css"

const CartDetailCard = ({ product, quantity,removeProduct}) => {

  return (
    <div className="Card">
      <h3>{product.title}</h3>
      <div className="Images"><img src={product.images} alt={product.title}/></div>
      <h5>c/u $ {product.price}</h5>
      <h6 className="qty">Cantidad : {quantity.quantity}</h6>
      <h6 id="total">Total: $ {product.price * quantity.quantity}</h6>
    </div>
  );
};

export default CartDetailCard;