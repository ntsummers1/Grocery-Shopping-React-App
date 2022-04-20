import React from "react";
import { useAppDispatch } from "../../../app/hooks";
import { getProductsByCategory } from "../productsSlice";

const Banner = () => {
  const dispatch = useAppDispatch();

  return (
    <div className="hidden lg:flex bg-yellow-400 rounded-3xl border-gray-200 drop-shadow-2xl w-full xl:h-[300px] lg:h-[250px] my-12">
      <img
        src="../imgs/lemon.png"
        alt="lemon"
        className="inline-flex h-full w-1/3 object-contain"
      />
      <div className="flex h-full w-2/3 flex-col">
        <h1 className="flex w-full font-bold text-4xl xl:text-6xl text-center text-white drop-shadow-xl mt-20">
          Life Gave You Lemons
        </h1>
        <h2 className="flex w-full font-bold text-2xl xl:text-4xl text-center text-green-900 drop-shadow-xl mt-8">
          You dont say no.
          <button
            onClick={() => dispatch(getProductsByCategory("Fruits"))}
            className="flex font-bold text-2xl xl:text-4xl text-center bg-green-900 text-white rounded-full p-2.5 px-6 -mt-2 ml-4"
          >
            Add Some Today
          </button>
        </h2>
      </div>
    </div>
  );
};

export default Banner;
