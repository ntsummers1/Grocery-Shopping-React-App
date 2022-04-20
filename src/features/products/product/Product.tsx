import React from "react";
import IProduct from "./productInterface";
import { useAppDispatch } from "../../../app/hooks";
import { addToCart } from "../../cart/cartSlice";
import { FaPlus } from "react-icons/fa";
import Toast from "../../toast/Toast";

type Props = {
  product: IProduct;
};

const Product = ({ product }: Props) => {
  const dispatch = useAppDispatch();

  return (
    <li className="bg-white rounded-3xl border-gray-200 drop-shadow-2xl w-full max-w-[280px] h-[200px] mx-auto my-4 px-3 py-6 text-center">
      <img
        src={product.img}
        alt={product.name}
        className="w-[150px] h-[150px] -translate-y-2/3 mx-auto object-contain"
      />
      <p className="font-normal text-green-900 text-xl -mt-[84px] text-center">
        {product.name}
      </p>
      <div className="flex mt-4">
        <p className="flex-auto text-left font-bold text-lg text-green-900 m-0">
          {`$ ${product.price} `}
        </p>
        <button
          className="w-[30px] h-[30px] rounded-full bg-green-900 hover:bg-green-700 text-white block text-center text-xs"
          disabled={!product.instock}
          onClick={() => {
            Toast(product);
            dispatch(addToCart(product));
          }}
        >
          <FaPlus className="inline-flex -mt-1" />
        </button>
      </div>
    </li>
  );
};

export default Product;
