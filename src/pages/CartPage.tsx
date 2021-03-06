import { useAppSelector } from "../app/hooks";
import ICart from "../features/cart/cartInterface";
import {
  selectCartItems,
  selectCartTotalPrice,
} from "../features/cart/cartSlice";
import Header from "../features/header/Header";
import {
  FaLock,
  FaCcVisa,
  FaCcMastercard,
  FaCcAmex,
  FaMoneyBill,
} from "react-icons/fa";
import CartItem from "../features/cart/cartItem/CartItem";

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  signOut: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  user: any;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const CartPage = ({ user, signOut }: Props) => {
  const cartItems: ICart = useAppSelector(selectCartItems);
  const totalCost: number = useAppSelector(selectCartTotalPrice);
  const shippingFee = 3.99;
  const deliveryTotal: number =
    totalCost > 0 ? parseFloat((totalCost + shippingFee).toFixed(2)) : 0;

  console.log(user);

  return (
    <div>
      <Header left="basket" middle="My Cart" right="close" signOut={signOut} />

      <div className="flex flex-col lg:flex-row mx-4">
        <div className="flex-auto w-full lg:w-3/5 lg:border-r-2 border-gray-100 px-2 lg:pr-12 lg:pl-4">
          <h2 className="font-bold text-lg mb-4">Item(s)</h2>
          {cartItems.length > 0 ? (
            cartItems.map((item) => <CartItem item={item} />)
          ) : (
            <div className="flex bg-white py-4 px-4 flex-row rounded-md mt-4">
              <p>
                No items have been added to the cart yet. We'll be ready once
                you pick some out!
              </p>
            </div>
          )}
        </div>

        <div className="flex-auto w-full lg:w-2/5 px-2 ms:px-4 mt-2 lg:mt-0">
          <div className="flex bg-white py-4 px-8 flex-col rounded-md lg:max-w-sm lg:mx-auto">
            <div className="flex w-full mb-2">
              <h2 className="font-bold text-lg flex-auto">Customer Details</h2>
              <button className="text-blue-400 font-bold text-sm hover:text-blue-500 hover:underline">
                Change
              </button>
            </div>
            <div className="flex">
              <div className="flex-auto w-1/2">
                <p className="font-bold text-xs">Full Name</p>
                <p className="mt-1 mb-4 text-md text-green-700">
                  {user.username}
                </p>
              </div>
              <div className="flex-auto w-1/2">
                <p className="font-bold text-xs">Email Address</p>
                <p className="mt-1 mb-4 text-md text-green-700 truncate">
                  {user.attributes.email}
                </p>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex w-auto">
                <h2 className="font-bold text-lg flex-auto">
                  Delivery Address
                </h2>
              </div>
              <p className="text-green-700 mt-1 text-md">No 27, Uswatte Road</p>
              <p className="text-green-700 mt-1 text-md">Maratuwa</p>
            </div>
          </div>

          <div className="flex bg-white py-4 px-8 flex-col mt-2 rounded-md lg:max-w-sm lg:mx-auto">
            <div className="flex w-full mb-2">
              <h2 className="font-bold text-lg flex-auto">Total</h2>
              <h2 className="text-black font-bold text-lg">${totalCost}</h2>
            </div>
            <div className="flex w-full mb-2">
              <h2 className="text-green-700 text-md flex-auto">
                Shipping Fee:
              </h2>
              <p className="text-green-700 text-md">
                ${totalCost > 0 ? shippingFee : 0}
              </p>
            </div>
            <div className="flex w-full mb-2">
              <h2 className="text-green-700 text-md flex-auto">
                Delivery total:
              </h2>
              <p className="text-green-700 text-md">${deliveryTotal}</p>
            </div>
          </div>
          <div className="flex bg-white py-4 px-8 flex-col mt-2 rounded-md lg:max-w-sm lg:mx-auto">
            <h2 className="font-bold text-lg"> Payment Details</h2>
            <span className="flex text-green-700 mt-2">
              <FaLock className="text-green-900 mr-2 mt-1 flex align-middle" />
              <p> Your details are secured and safe </p>
            </span>

            <div className="flex flex-row gap-x-2 mt-4">
              <div className="flex-auto flex-column bg-light-background px-2 py-4 rounded-lg text-center w-full">
                <FaCcVisa className="text-2xl text-green-900 mx-auto" />
                <p> Visa </p>
              </div>
              <div className="flex-auto flex-column bg-light-background px-2 py-4 rounded-lg text-center w-full">
                <FaCcMastercard className="text-2xl text-green-900 mx-auto" />
                <p> Master </p>
              </div>
              <div className="flex-auto flex-column bg-light-background px-2 py-4 rounded-lg text-center w-full">
                <FaCcAmex className="text-2xl text-green-900 mx-auto" />
                <p> Amex </p>
              </div>
              <div className="flex-auto flex-column bg-light-background px-2 py-4 rounded-lg text-center w-full">
                <FaMoneyBill className="text-2xl text-green-900 mx-auto" />
                <p> Cash </p>
              </div>
            </div>
          </div>
          <button className="bg-green-900 text-white w-full rounded-full py-4 mt-4 lg:max-w-sm lg:mx-auto block">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
