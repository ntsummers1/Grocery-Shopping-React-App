import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../../app/store";
import IProducts from "./productsInterface";

export interface IProductsState {
  status: "idle" | "loading" | "error";
  products: IProducts;
  filteredProducts: IProducts;
  categories: string[];
  currentCategory: string;
}

const initialState: IProductsState = {
  status: "idle",
  products: [],
  filteredProducts: [],
  categories: [],
  currentCategory: "All",
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
    getProductsByName: (state, action: PayloadAction<string>) => {
      const name = action.payload;

      state.filteredProducts = state.products.filter((item) =>
        item.name.toLowerCase().includes(name.toLowerCase())
      );
    },
    getProductsByCategory: (state, action: PayloadAction<string>) => {
      const category = action.payload;
      state.currentCategory = category;
      if (category !== "All") {
        state.filteredProducts = state.products.filter((item) =>
          item.category.includes(category)
        );
      } else {
        state.filteredProducts = state.products;
      }
    },
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
export const { getProductsByCategory, getProductsByName } =
  productsSlice.actions;

export const selectCurrentCategory = (state: RootState) =>
  state.products.currentCategory;
export const selectCategories = (state: RootState) => state.products.categories;
export const selectFilteredProducts = (state: RootState) =>
  state.products.filteredProducts;
export const selectProducts = (state: RootState) => state.products.products;

export default productsSlice.reducer;
