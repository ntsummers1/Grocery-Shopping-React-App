/* eslint-disable jest/no-commented-out-tests */
import IProduct from "./product/productInterface";
import productReducer, { fetchProducts, IProductsState } from "./productsSlice";

describe("Products Reducer", () => {
  const productOne: IProduct = {
    id: 0,
    name: "Generic Concrete Chicken",
    price: 173.0,
    category: ["Meat"],
    img: "img1.jpg",
    instock: true,
  };

  // const productTwo: IProduct = {
  //   id: 1,
  //   name: "Fantastic Plastic Chair",
  //   price: 320.0,
  //   category: ["Furniture"],
  //   img: "../assets/imgs/1.jpeg",
  //   instock: false,
  // };

  // const productThree: IProduct = {
  //   id: 1,
  //   name: "Fantastic Plastic Hair",
  //   price: 120.0,
  //   category: ["Hair"],
  //   img: "../assets/imgs/1.jpeg",
  //   instock: true,
  // };

  const initialState: IProductsState = {
    status: "idle",
    products: [],
    filteredProducts: [],
    categories: [],
  };

  // const fetchedProductsState: IProductsState = {
  //   status: "idle",
  //   products: [productOne, productTwo],
  //   filteredProducts: [productOne, productTwo, productThree],
  // };

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

  // it("should handle default filter", () => {
  //   const state = productReducer(
  //     fetchedProductsState,
  //     filterProducts({ instock: null, name: null })
  //   );
  //   expect(state).toEqual({
  //     ...fetchedProductsState,
  //     filteredProducts: [productOne, productTwo, productThree],
  //   });
  // });

  // it("should handle filtering by inStock", () => {
  //   const state = productReducer(
  //     fetchedProductsState,
  //     filterProducts({ instock: true, name: null })
  //   );

  //   expect(state).toEqual({
  //     ...fetchedProductsState,
  //     filteredProducts: [productOne, productThree],
  //   });
  // });

  // it("should handle filtering by name", () => {
  //   const state = productReducer(
  //     fetchedProductsState,
  //     filterProducts({ instock: true, name: "Hair" })
  //   );
  //   expect(state).toEqual({
  //     ...fetchedProductsState,
  //     filteredProducts: [productThree],
  //   });
  // });
});
