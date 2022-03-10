import React from "react";
import IProduct from "./productInterface";

type Props = {
  product: IProduct;
};

const Product = ({ product }: Props) => {
  return <>{product.name}</>;
};

export default Product;
