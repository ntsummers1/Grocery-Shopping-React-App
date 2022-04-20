import React from "react";
import IProduct from "./productInterface";
import { useAppDispatch } from "../../../app/hooks";
import { addToCart } from "../../cart/cartSlice";
import { FaPlus } from "react-icons/fa";

type Props = {
  product: IProduct;
};

const Product = ({ product }: Props) => {
  const dispatch = useAppDispatch();

  return (
    <li className="bg-white rounded-xl border-gray-200 drop-shadow-2xl w-full max-w-[250px] h-[220px] mx-auto md:mx-0 my-4 px-3 py-6 text-center">
      <img
        src={product.img}
        alt={product.name}
        className="w-[150px] h-[150px] -translate-y-1/2 mx-auto"
      />
      <p className="font-bold text-xl -mt-[66px] text-center">{product.name}</p>
      <div className="flex mt-4">
        <p className="flex-auto text-left font-bold text-lg text-green-800 m-0">
          ${product.price}
        </p>
        <button
          className="w-[30px] h-[30px] rounded-full bg-green-900 hover:bg-green-800 text-white block text-center text-xs"
          disabled={!product.instock}
          onClick={() => dispatch(addToCart(product))}
        >
          <FaPlus className="inline-flex -mt-1" />
        </button>
      </div>
    </li>
  );
};

export default Product;
