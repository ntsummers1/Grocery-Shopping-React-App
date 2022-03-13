import React from "react";
import { useAppDispatch } from "../../../app/hooks";
import ICartItem from "./cartItemInterface";

type Props = {
  item: ICartItem;
};

const Cart = ({ item }: Props) => {
  const dispatch = useAppDispatch();

  return <></>;
};

export default Cart;
