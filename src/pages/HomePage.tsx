import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import Header from "../features/header/Header";
import Categories from "../features/products/categories/Categories";
import Products from "../features/products/Products";
import {
  fetchProducts,
  selectCategories,
  selectFilteredProducts,
} from "../features/products/productsSlice";

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  signOut: any;
};

const HomePage = ({ signOut }: Props) => {
  const dispatch = useAppDispatch();
  const selectProducts = useAppSelector(selectFilteredProducts);
  const selectCategoryList = useAppSelector(selectCategories);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div>
      <Header
        left={"basket"}
        middle={"search"}
        right={"profile"}
        signOut={signOut}
      />
      <div className="flex flex-col md:flex-row mx-4">
        <div className="flex-auto w-full md:w-3/12 lg:w-2/12 px-2 lg:pl-4">
          <Categories categories={selectCategoryList} />
        </div>

        <div className="flex-auto w-full md:w-9/12 lg:w-10/12 px-2 ms:px-4 mt-2 lg:mt-0">
          <Products products={selectProducts} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
