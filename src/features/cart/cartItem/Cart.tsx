import React from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { selectCartItems } from "../cartSlice";
import ICartItem from "./cartItemInterface";

type Props = {
  item: ICartItem;
};

const Cart = ({ item }: Props) => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector(selectCartItems);

  return (
    <>
      {cartItems.map((item) => (
        <p> {item.name} </p>
      ))}
    </>
  );
};

export default Cart;
