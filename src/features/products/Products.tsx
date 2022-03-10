import React from "react";
import Product from "./product/Product";
import IProducts from "./productsInterface";

type Props = {
  products: IProducts;
};

const Products = ({ products }: Props) => {
  return (
    <>
      <ul>
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </ul>
    </>
  );
};

export default Products;
