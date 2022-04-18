const Search = () => {
  return (
    <form className="justify-between items-center flex flex-1 w-100 max-w-md p-2.5 mx-auto">
      <input
        type="text"
        id="product-search"
        className="bg-gray-50 text-gray-900 text-sm rounded-full justify-between items-center flex flex-1 w-100 w-full p-2.5 mx-5"
        placeholder="What are you looking for?"
      />
      <button type="submit"> Search </button>
    </form>
  );
};

export default Search;
