import React from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { addToCart, removeCompletelyFromCart, removeFromCart, selectCartItems, selectCartTotalPrice } from "../features/cart/cartSlice";
import Header from "../features/header/Header";

const CartPage = () => {

  const cartItems = useAppSelector(selectCartItems)
  const totalCost = useAppSelector(selectCartTotalPrice)
  const shippingFee = 3.99
  const deliveryTotal = totalCost > 0 ? (totalCost + shippingFee).toFixed(2) : 0

  const dispatch = useAppDispatch()

  return <div>

    <Header />

    <div> 
      <h2>Item(s)</h2>
      { cartItems.map(item => <div>
          <img src={item.img}/>
          <p> {item.name} </p>
          <p> {item.price} </p>
          <p> {item.qty} </p>
          <p onClick={() => dispatch(removeCompletelyFromCart(item))}> Remove </p>
          <p onClick={() => dispatch(removeFromCart(item))}> - </p>
          <p> {item.qty} </p>
          <p onClick={() => dispatch(addToCart(item))}> + </p>
        </div>
      )}
    </div>
    
    <div>
      <div>
        <h2>Customer Details</h2>
      </div>
      <div>
        <h2>Total</h2>
        <p> Item(s) Price: {totalCost} </p>
        <p> Shipping Fee: {totalCost > 0 ? shippingFee : 0} </p>
        <p> Delivery total: {deliveryTotal} </p>
      </div>
      <div>
        <h2>Payment Details</h2>
        <p> Your details are secured and safe </p>
      </div>

      <button> Next </button>
    </div>
  </div>;
};

export default CartPage;
