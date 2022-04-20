import React from "react";
import Product from "./product/Product";
import IProducts from "./productsInterface";

type Props = {
  products: IProducts;
};

const Products = ({ products }: Props) => {
  return (
    <>
      <h1 className="text-4xl font-bold text-center md:text-left mx-1 lg:mx-4 mt-8">
        Products
      </h1>
      <ul className="flex flex-wrap mx-1 lg:mx-4 mt-16 md:mt-16 gap-x-8 gap-y-20">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </ul>
    </>
  );
};

export default Products;
