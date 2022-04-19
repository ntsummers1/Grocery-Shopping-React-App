import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import Header from "../features/header/Header";
import Products from "../features/products/Products";
import {
  fetchProducts,
  selectFilteredProducts,
} from "../features/products/productsSlice";

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  signOut: any;
};

const HomePage = ({ signOut }: Props) => {
  const dispatch = useAppDispatch();
  const selectProducts = useAppSelector(selectFilteredProducts);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div>
      <Header
        left={"categories"}
        middle={"search"}
        right={"basket/profile"}
        signOut={signOut}
      />
      <Products products={selectProducts} />
    </div>
  );
};

export default HomePage;
