/* eslint-disable jest/no-commented-out-tests */
import IProduct from "./product/productInterface";
import productReducer, {
  fetchProducts,
  getProductsByCategory,
  getProductsByName,
  IProductsState,
} from "./productsSlice";

describe("Products Reducer", () => {
  const productOne: IProduct = {
    id: 0,
    name: "Generic Concrete Chicken",
    price: 173.0,
    category: ["Snacks"],
    img: "img1.jpg",
    instock: true,
  };

  const productTwo: IProduct = {
    id: 1,
    name: "Fantastic Plastic Chair",
    price: 320.0,
    category: ["Snacks", "Fruit"],
    img: "../assets/imgs/1.jpeg",
    instock: false,
  };

  const productThree: IProduct = {
    id: 1,
    name: "Fantastic Plastic Hair",
    price: 120.0,
    category: ["Fruit"],
    img: "../assets/imgs/1.jpeg",
    instock: true,
  };

  const initialState: IProductsState = {
    status: "idle",
    products: [],
    filteredProducts: [],
    categories: [],
    currentCategory: "All",
  };

  const fetchedProductsState: IProductsState = {
    status: "idle",
    products: [productOne, productTwo, productThree],
    filteredProducts: [productOne, productTwo, productThree],
    categories: ["All", "Snacks", "Fruits"],
    currentCategory: "All",
  };

  it("should handle initial state", () => {
    expect(productReducer(undefined, { type: undefined })).toEqual(
      initialState
    );
  });

  it("should handle fetchProducts pending status", () => {
    const state = productReducer(initialState, {
      type: fetchProducts.pending.type,
    });
    expect(state).toEqual({ ...initialState, status: "loading" });
  });

  it("should handle fetchProducts fulfilled status", () => {
    const state = productReducer(initialState, {
      type: fetchProducts.fulfilled.type,
      payload: { categories: ["Snacks", "Fruits"], products: [productOne] },
    });
    expect(state).toEqual({
      status: "idle",
      products: [productOne],
      filteredProducts: [productOne],
      categories: ["Snacks", "Fruits"],
    });
  });

  it("should handle fetchProducts error status", () => {
    const state = productReducer(initialState, {
      type: fetchProducts.rejected.type,
      payload: { error: "Some Error" },
    });
    expect(state).toEqual({ ...initialState, status: "error" });
  });

  it("should handle all categories of products", () => {
    const state = productReducer(
      fetchedProductsState,
      getProductsByCategory("All")
    );

    expect(state).toEqual({
      ...fetchedProductsState,
    });
  });

  it("should handle a particular category of products", () => {
    const state = productReducer(
      fetchedProductsState,
      getProductsByCategory("Snacks")
    );

    expect(state).toEqual({
      ...fetchedProductsState,
      filteredProducts: [productOne, productTwo],
      currentCategory: "Snacks",
    });
  });

  it("should handle an non-exsitant category of products", () => {
    const state = productReducer(
      fetchedProductsState,
      getProductsByCategory("John")
    );

    expect(state).toEqual({
      ...fetchedProductsState,
      filteredProducts: [],
      currentCategory: "John",
    });
  });

  it("should handle searching for products by name", () => {
    const state = productReducer(
      fetchedProductsState,
      getProductsByName("Plastic")
    );

    expect(state).toEqual({
      ...fetchedProductsState,
      filteredProducts: [productTwo, productThree],
    });
  });

  it("should return no products searching for products by unfound name", () => {
    const state = productReducer(
      fetchedProductsState,
      getProductsByName("test")
    );

    expect(state).toEqual({
      ...fetchedProductsState,
      filteredProducts: [],
    });
  });

  it("should return all products searching for products by empty string", () => {
    const state = productReducer(fetchedProductsState, getProductsByName(""));

    expect(state).toEqual({
      ...fetchedProductsState,
      filteredProducts: [productOne, productTwo, productThree],
    });
  });
});
