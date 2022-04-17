import IProduct from "../products/product/productInterface";
import cartReducer, {
  addToCart,
  ICartState,
  removeFromCart,
} from "./cartSlice";

describe("Cart Reducer", () => {
  const productOne: IProduct = {
    id: 0,
    name: "Generic Concrete Chicken",
    price: 173.0,
    category: ["Meat"],
    img: "img1.jpg",
    instock: true,
  };

  const productTwo: IProduct = {
    id: 1,
    name: "Fantastic Plastic Chair",
    price: 320.0,
    category: ["Furniture"],
    img: "../assets/imgs/1.jpeg",
    instock: true,
  };

  const initialState: ICartState = {
    status: "idle",
    items: [],
  };

  const oneItemInCartState: ICartState = {
    status: "idle",
    items: [{ ...productOne, qty: 1 }],
  };

  const twoItemInCartState: ICartState = {
    status: "idle",
    items: [
      { ...productOne, qty: 1 },
      { ...productTwo, qty: 1 },
    ],
  };

  const twoItemWithMultipleQtyInCartState: ICartState = {
    status: "idle",
    items: [
      { ...productOne, qty: 1 },
      { ...productTwo, qty: 2 },
    ],
  };

  it("should handle default state", () => {
    expect(cartReducer(undefined, { type: undefined })).toEqual({
      status: "idle",
      items: [],
    });
  });

  it("should add an item to an empty cart", () => {
    const cart = cartReducer(initialState, addToCart(productOne));
    expect(cart.items).toEqual([{ ...productOne, qty: 1 }]);
  });

  it("should increase quantity of an item", () => {
    const cart = cartReducer(oneItemInCartState, addToCart(productOne));
    expect(cart.items).toEqual([{ ...productOne, qty: 2 }]);
  });

  it("should add a different item to the cart", () => {
    const cart = cartReducer(oneItemInCartState, addToCart(productTwo));
    expect(cart.items).toEqual([
      { ...productOne, qty: 1 },
      { ...productTwo, qty: 1 },
    ]);
  });

  it("should remove an item from the cart", () => {
    const cart = cartReducer(oneItemInCartState, removeFromCart(productOne));
    expect(cart.items).toEqual([]);
  });

  it("should lower the quantity of one item in the cart", () => {
    const cart = cartReducer(
      twoItemWithMultipleQtyInCartState,
      removeFromCart(productTwo)
    );
    expect(cart.items).toEqual([
      { ...productOne, qty: 1 },
      { ...productTwo, qty: 1 },
    ]);
  });

  it("should remove an item from cart whose quantity is 0", () => {
    const cart = cartReducer(twoItemInCartState, removeFromCart(productTwo));
    expect(cart.items).toEqual([{ ...productOne, qty: 1 }]);
  });
});
