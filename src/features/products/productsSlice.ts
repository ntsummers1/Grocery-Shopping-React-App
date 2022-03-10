import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios';
import IProductsFilter from './productsFilterInterface';
import IProducts from './productsInterface';

export interface IProductsState {
  status: 'idle' | 'loading' | 'error'
  products: IProducts
  filteredProducts: IProducts
}

const initialState: IProductsState = {
  status: 'idle',
  products: [],
  filteredProducts: []
}

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {

})

const productsSlice = createSlice({
  name: 'Products Reducer',
  initialState,
  reducers: {
    filterProducts: (state, action: PayloadAction<IProductsFilter>) => {}
  },
  extraReducers: {}
});

export const {filterProducts} = productsSlice.actions

export default productsSlice.reducer