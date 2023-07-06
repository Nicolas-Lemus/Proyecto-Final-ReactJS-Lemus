import React from "react";
import CartButtons from "../CartButtons/CartButtons";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import "./ProductCard.css"

const ProductCard = ({productData}) => {

  return (
    <Card className="Card">
      <h3>{productData.title}</h3>
      <div className='Images'><Link to={`/products/${productData.id}`}><img src={productData.images} alt={productData.title}/></Link></div>
      <h5 className='Previous'>${productData.previous_price}</h5>
      <h5>$ {productData.price}</h5>
      <p>Stock: {productData.stock}</p>
      <CartButtons productId={productData.id}/>
      <h6 className="Detail"><Link to={`/products/${productData.id}`}>ir a descripcion</Link></h6>
    </Card>
  );
};

export default ProductCard;
