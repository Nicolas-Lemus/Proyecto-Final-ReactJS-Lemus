import React from "react";
import CartButtons from "../CartButtons/CartButtons";
import Card from "react-bootstrap/Card";
import "./CardDescription.css"


const CardDescription = ({productData}) => {

  return (
    <Card className="cardDescription">
      <div className="Images"><img src={productData.images} alt={productData.title}/></div>
      <h3>{productData.title}</h3>
      <h4>{productData.description}</h4>
      <h5 className='Previous'>$ {productData.previous_price}</h5>
      <h5>{productData.stock}</h5>
      <h5>$ {productData.price}</h5>
      <CartButtons productId={productData.id}/>
    </Card>
  );
};

export default CardDescription;
