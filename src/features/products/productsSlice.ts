import { createSlice } from '@reduxjs/toolkit'
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

const productsSlice = createSlice({
  name: 'Products Reducer',
  initialState,
  reducers: {}
});

export const {} = productsSlice.actions

export default productsSlice.reducer