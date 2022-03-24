import React from "react";
import Product from "./product/Product";
import IProducts from "./productsInterface";

type Props = {
  products: IProducts;
};

const Products = ({ products }: Props) => {
  return (
    <>
      <h1 className="text-4xl font-bold text-center">Products</h1>
      <ul className="">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </ul>
    </>
  );
};

export default Products;
