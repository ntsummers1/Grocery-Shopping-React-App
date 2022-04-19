import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../../app/store";
// import IProductsFilter from "./productsFilterInterface";
import IProducts from "./productsInterface";

export interface IProductsState {
  status: "idle" | "loading" | "error";
  products: IProducts;
  filteredProducts: IProducts;
  categories: string[];
}

const initialState: IProductsState = {
  status: "idle",
  products: [],
  filteredProducts: [],
  categories: [],
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const endpoint = "../endpointResponses/products.json";
    console.log(endpoint);
    if (endpoint) {
      const res = await axios.get(endpoint);
      return res.data;
    } else {
      return Promise.reject("Unable to connect to endpoint");
    }
  }
);

const productsSlice = createSlice({
  name: "Products Reducer",
  initialState,
  reducers: {
    // filterProducts: (state, action: PayloadAction<IProductsFilter>) => {
    //   const filters = action.payload;
    //   state.filteredProducts = state.products;
    //   if (filters.instock != null) {
    //     state.filteredProducts = state.filteredProducts.filter(
    //       (item) => item.instock === filters.instock
    //     );
    //   }
    //   if (filters.name != null) {
    //     state.filteredProducts = state.filteredProducts.filter((item) =>
    //       item.name.includes(filters.name!)
    //     );
    //   }
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "idle";
        const products: IProducts = action.payload.products;

        console.log(action.payload);

        state.products = products;
        state.filteredProducts = products;
        state.categories = action.payload.categories;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.status = "error";
      });
  },
});

// export const { filterProducts } = productsSlice.actions;

export const selectCategories = (state: RootState) => state.products.categories;
export const selectFilteredProducts = (state: RootState) =>
  state.products.filteredProducts;
export const selectProducts = (state: RootState) => state.products.products;

export default productsSlice.reducer;
