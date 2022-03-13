import React from "react";
import IProduct from "./productInterface";
import "./product.css";

type Props = {
  product: IProduct;
};

const Product = ({ product }: Props) => {
  return (
    <li className="product">
      <img src={product.img} alt={product.name} className="product-img" />
      <p className="product-name"> {product.name} </p>
      <div className="product-info-row">
        <p className="product-price">${product.price}</p>
        <button className="product-add" disabled={!product.instock}>
          +
        </button>
      </div>
    </li>
  );
};

export default Product;
