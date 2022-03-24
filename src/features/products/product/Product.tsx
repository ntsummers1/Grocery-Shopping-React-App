import React from "react";
import IProduct from "./productInterface";
import { useAppDispatch } from "../../../app/hooks";
import { addToCart } from "../../cart/cartSlice";

type Props = {
  product: IProduct;
};

const Product = ({ product }: Props) => {
  const dispatch = useAppDispatch();

  return (
    <li className="">
      <img src={product.img} alt={product.name} className="" />
      <p className=""> {product.name} </p>
      <div className="">
        <p className="">${product.price}</p>
        <button
          className=""
          disabled={!product.instock}
          onClick={() => dispatch(addToCart(product)) }
        >
          +
        </button>
      </div>
    </li>
  );
};

export default Product;
