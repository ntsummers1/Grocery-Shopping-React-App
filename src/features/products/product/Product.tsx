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
    <li className="my-1 px-1 w-full sm:w-1/2 lg:my-4 lg:px-4 lg:w-1/4 bg-white rounded-lg border-gray-200 drop-shadow-2xl">
      <img src={product.img} alt={product.name} className="w-48" />
      <p className="font-bold text-xl text-center"> {product.name} </p>
      <div className="p-5 flex">
        <p className="flex-auto">${product.price}</p>
        <button
          className="w-[40px] h-[40px] rounded-full bg-green-900 text-white"
          disabled={!product.instock}
          onClick={() => dispatch(addToCart(product))}
        >
          +
        </button>
      </div>
    </li>
  );
};

export default Product;
