import { FaMinus, FaPlus } from "react-icons/fa";
import { useAppDispatch } from "../../../app/hooks";
import {
  addToCart,
  removeCompletelyFromCart,
  removeFromCart,
} from "../cartSlice";
import ICartItem from "./cartItemInterface";

type Props = {
  item: ICartItem;
};

const CartItem = ({ item }: Props) => {
  const dispatch = useAppDispatch();

  return (
    <div className="flex bg-white py-4 px-4 flex-row rounded-md mt-4">
      <img src={item.img} alt={item.name} className="w-20 h-20 mr-8" />
      <div className="flex-auto w-full mt-4">
        <p className="text-lg text-green-700"> {item.name} </p>
        <p className="text-lg text-green-800 font-bold">${item.price}</p>
      </div>
      <div className="flex-auto flex-col w-40">
        <p
          onClick={() => dispatch(removeCompletelyFromCart(item))}
          className="text-red-400 font-bold text-sm text-right cursor-pointer hover:text-red-500 hover:underline"
        >
          Remove
        </p>
        <div className="flex-auto flex-row mt-6 text-right">
          <p
            onClick={() => dispatch(removeFromCart(item))}
            className="text-white bg-green-900 hover:bg-green-700 rounded-full text-sm p-1.5 text-center inline-flex items-center  cursor-pointer"
          >
            <FaMinus />
          </p>
          <p className="inline-flex mx-4"> {item.qty} </p>
          <p
            onClick={() => dispatch(addToCart(item))}
            className="text-white bg-green-900 hover:bg-green-700 rounded-full text-sm p-1.5 text-center inline-flex items-center cursor-pointer"
          >
            <FaPlus />
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
