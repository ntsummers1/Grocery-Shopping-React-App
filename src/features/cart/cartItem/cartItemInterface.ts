import IProduct from "../../products/product/productInterface";

export default interface ICartItem extends IProduct {
  qty: number;
}
