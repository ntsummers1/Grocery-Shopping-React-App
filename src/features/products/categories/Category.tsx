import React from "react";
import { useAppDispatch } from "../../../app/hooks";
import { BiCategory, BiFoodMenu } from "react-icons/bi";
import { GiKiwiFruit, GiChipsBag } from "react-icons/gi";

type Props = {
  category: string;
};

const categoryIconHelper = (category: string): JSX.Element => {
  switch (category) {
    case "All":
      return <BiCategory className="text-blue-500" />;

    case "Snacks":
      return <GiChipsBag className="text-blue-500" />;

    case "Fruits":
      return <GiKiwiFruit className="text-orange-600" />;

    default:
      return <BiFoodMenu />;
  }
};

const Category = ({ category }: Props) => {
  const dispatch = useAppDispatch();

  return (
    <li className="w-full cursor-pointer hover:font-bold py-2">
      <button onClick={dispatch(getProductsByCategory(category))}>
        <span className="text-white bg-white hover:bg-white/20 rounded-full text-2xl         p-1.5 text-center inline-flex items-center mr-4 shadow-xl">
          {categoryIconHelper(category)}
        </span>{" "}
        {category}
      </button>
    </li>
  );
};

export default Category;
