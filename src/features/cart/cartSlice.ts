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
      const product = action.payload
      const found = state.items.find(item => item.id === product.id)
      if (found) {
        state.items = state.items.map(item => item.id === product.id ? {...found, qty: found.qty + 1}: item)
      } else {
        state.items.push({...product, qty: 1})
      }
      console.log(state.items)
    },
    removeFromCart: (state, action: PayloadAction<IProduct>) => {
      const product = action.payload
      const found = state.items.find(item => item.id === product.id)
      if (found) {
        if (found.qty === 1) {
          state.items = state.items.filter(item => item.id !== product.id)
        } else {
          state.items = state.items.map(item => item.id === product.id ? {...found, qty: found.qty - 1}: item)
        }
      } else {
        console.error("Unable to find product in cart", product)
      }
    },
    removeCompletelyFromCart: (state, action: PayloadAction<IProduct>) => {
        const product = action.payload
        const found = state.items.find(item => item.id === product.id)
        if (found) {
          state.items = state.items.filter(item => item.id !== product.id)
        } else {
          console.error("Unable to find product in cart", product)
        }

    }
  }
});

export const {addToCart, removeFromCart, removeCompletelyFromCart} = cartSlice.actions

export const selectCartItems = (state : RootState) => state.cart.items
export const selectCartTotalPrice = (state : RootState) => state.cart.items.map(item => item.price * item.qty).reduce((prev, curr) => prev + curr, 0)
export const selectCartItemsLength = (state : RootState) => state.cart.items.length

export default cartSlice.reducer