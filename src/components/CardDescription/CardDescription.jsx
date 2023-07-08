import React from "react";
import CartButtons from "../CartButtons/CartButtons";
import Card from "react-bootstrap/Card";
import "./CardDescription.css"


const CardDescription = ({product}) => {

  return (
    <Card className="cardDescription">
      <div>
        <img src={product.images} alt={product.title}/>
      </div>
      <div>
        <h3>{product.title}</h3>
        <h4>{product.description}</h4>
        <h5 className='Previous'>$ {product.previous_price}</h5>
        <h5>{product.stock}</h5>
        <h5>$ {product.price}</h5>
        <CartButtons productId={product.id}/>
      </div>
    </Card>
  );
};

export default CardDescription;
