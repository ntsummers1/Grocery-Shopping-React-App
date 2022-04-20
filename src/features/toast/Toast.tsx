import toast from "react-hot-toast";
import IProduct from "../products/product/productInterface";

const Toast = (product: IProduct) =>
  toast.success(`Successfully added ${product.name} to cart!`);

export default Toast;
