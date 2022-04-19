import React from "react";
import Category from "./Category";

type Props = {
  categories: string[];
};

const Categories = ({ categories }: Props) => {
  return (
    <div>
      <h1 className="text-md font-bold text-left mt-2">Categories</h1>
      <ul className="flex flex-wrap">
        {categories.map((category, index) => (
          <Category key={index} category={category} />
        ))}
      </ul>
    </div>
  );
};

export default Categories;
