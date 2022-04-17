import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import Header from "../features/header/Header";
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
      <Header left={"categories"} middle={"search"} right={"basket/profile"} />
      HomePage
      <Products products={selectProducts} />
    </div>
  );
};

export default HomePage;
