import { FaSearch } from "react-icons/fa";

const Search = () => {
  return (
    <form className="justify-between items-center flex flex-1 w-100 max-w-lg px-2.5 mx-auto">
      <input
        type="text"
        id="product-search"
        className="bg-gray-50 text-gray-900 text-sm rounded-full justify-between items-center flex flex-1 w-full p-2.5 mx-2"
        placeholder="What are you looking for?"
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
