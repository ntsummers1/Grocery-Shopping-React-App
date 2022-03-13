import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../app/store';
import IProduct from '../products/product/productInterface';
import ICart from './cartInterface';

export interface ICartState {
  status: 'idle' | 'loading' | 'error'
  items: ICart
}

const initialState: ICartState = {
  status: 'idle',
  items: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IProduct>) => {
    },
    removeFromCart: (state, action: PayloadAction<IProduct>) => {
    }
  }
});

export const {addToCart, removeFromCart} = cartSlice.actions

export const selectCartItems = (state : RootState) => state.cart.items
export const selectCartTotalPrice = (state : RootState) => state.cart.items.map(item => item.price * item.qty).reduce((prev, curr) => prev + curr, 0)
export const selectCartItemsLength = (state : RootState) => state.cart.items.length

export default cartSlice.reducer