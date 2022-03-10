import React from "react";
import IProduct from "./productInterface";

type Props = {
  product: IProduct;
};

const Product = ({ product }: Props) => {
  return <li>{product.name}</li>;
};

export default Product;
