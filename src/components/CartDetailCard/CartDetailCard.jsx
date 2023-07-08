import React from "react";
import { Link } from "react-router-dom";
import "./CartDetailCard.css"

const CartDetailCard = ({product, quantity}) => {

  return (
    <div className="Card">
      <h3>{product.title}</h3>
      <div className="Images"><Link to={`/products/${product.id}`}><img src={product.images} alt={product.title}/></Link></div>
      <h5>c/u $ {product.price}</h5>
      <h6 className="qty">Cantidad : {quantity.quantity}</h6>
      <h6 id="total">Total: $ {product.price * quantity.quantity}</h6>
      <p className="Detail"><Link to={`/products/${product.id}`}>ir a descripción</Link></p>
    </div>
  );
};

export default CartDetailCard;