import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useAppDispatch } from "../../app/hooks";
import { getProductsByName } from "../products/productsSlice";

const Search = () => {
  const [name, setName] = useState("");
  const dispatch = useAppDispatch();

  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    dispatch(getProductsByName(name));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(getProductsByName(name));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="justify-between items-center flex flex-1 w-100 max-w-lg px-2.5 mx-auto"
    >
      <input
        type="text"
        id="product-search"
        onChange={(e) => setName(e.target.value)}
        className="bg-gray-50 text-gray-900 text-sm rounded-full justify-between items-center flex flex-1 w-full p-2.5 mx-2"
        placeholder="What are you looking for?"
        onKeyUp={(e) => handleKeyUp(e)}
      />
      <button
        type="submit"
        className="bg-gray-50 hover:bg-gray-200 text-green-800 text-sm rounded-full p-2.5 mx-1 font-bold w-10 lg:w-28"
      >
        <p className="hidden lg:inline-flex">Search </p>
        <FaSearch className="inline-flex lg:ml-4 tx-lg -mt-1" />
      </button>
    </form>
  );
};

export default Search;
