import React from "react";
import { useAppDispatch } from "../../../app/hooks";
import { BiCategory, BiFoodMenu } from "react-icons/bi";
import { GiKiwiFruit, GiChipsBag, GiMeat } from "react-icons/gi";
import {
  MdEmojiFoodBeverage,
  MdCleaningServices,
  MdLocalPharmacy,
} from "react-icons/md";
import { getProductsByCategory } from "../productsSlice";
import { FaCarrot, FaFish } from "react-icons/fa";

type Props = {
  category: string;
};

const categoryIconHelper = (category: string): JSX.Element => {
  switch (category) {
    case "All":
      return <BiCategory className="text-blue-500" />;

    case "Snacks":
      return <GiChipsBag className="text-orange-500" />;

    case "Fruits":
      return <GiKiwiFruit className="text-red-600" />;

    case "Vegetables":
      return <FaCarrot className="text-green-600" />;

    case "Beverages":
      return <MdEmojiFoodBeverage className="text-gray-700" />;

    case "Fish":
      return <FaFish className="text-purple-600" />;

    case "Meat":
      return <GiMeat className="text-red-500" />;

    case "Household":
      return <MdCleaningServices className="text-yellow-900" />;

    case "Pharmacy":
      return <MdLocalPharmacy className="text-pink-600" />;

    default:
      return <BiFoodMenu className="text-green-600" />;
  }
};

const Category = ({ category }: Props) => {
  const dispatch = useAppDispatch();

  return (
    <li className="w-36 h-10 md:w-full mb-4 mx-auto">
      <button
        className="flex w-full cursor-pointer hover:font-bold hover:underline hover:text-green-900 h-10"
        onClick={() => dispatch(getProductsByCategory(category))}
      >
        <span className="text-white bg-white hover:bg-white/20 rounded-full text-2xl p-1.5 text-center inline-flex items-center mr-4 shadow-xl">
          {categoryIconHelper(category)}
        </span>
        <span className="inline-flex leading-10">{category}</span>
      </button>
    </li>
  );
};

export default Category;
