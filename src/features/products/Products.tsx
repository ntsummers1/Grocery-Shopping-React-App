import React from "react";
import Product from "./product/Product";
import IProducts from "./productsInterface";
import "./products.css";

type Props = {
  products: IProducts;
};

const Products = ({ products }: Props) => {
  return (
    <>
      <h1 className="products-title">Products</h1>
      <ul className="products">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </ul>
    </>
  );
};

export default Products;
