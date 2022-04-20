import React from "react";
import { useAppSelector } from "../../app/hooks";
import Banner from "./banner/Banner";
import Product from "./product/Product";
import IProducts from "./productsInterface";
import { selectCurrentCategory } from "./productsSlice";

type Props = {
  products: IProducts;
};

const Products = ({ products }: Props) => {
  const currentCategory = useAppSelector(selectCurrentCategory);

  return (
    <>
      {currentCategory == "All" ? <Banner /> : <></>}

      <h1 className="text-5xl font-bold text-center md:text-left mx-1 lg:mx-4 mt-8 mb-16">
        {currentCategory == "All" ? "Products" : currentCategory}
      </h1>
      <ul className="flex flex-wrap mx-1 lg:mx-4 mt-20 md:mt-24 gap-x-8 gap-y-20">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </ul>
    </>
  );
};

export default Products;
