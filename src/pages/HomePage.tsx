import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import Products from "../features/products/Products";
import {
  fetchProducts,
  selectFilteredProducts,
} from "../features/products/productsSlice";

const HomePage = () => {
  const dispatch = useAppDispatch();
  const selectProducts = useAppSelector(selectFilteredProducts);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div>
      HomePage
      <Products products={selectProducts} />
    </div>
  );
};

export default HomePage;
