import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BsBasket } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { selectCartItemsLength } from "../cart/cartSlice";

const RenderNavBasedOnUrl = (location: string, amountOfItems: number) => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  switch (location) {
    case "/cart":
      return (
        <nav className="mb-4 mx-4 bg-gradient-to-r from-dark-green to-light-green px-2 sm:px-4 py-2.5 rounded-full">
          <div className="container py-4 flex flex-wrap justify-between items-center mx-auto">
            {
              <Link to={"/cart"} className="flex items-center">
                <span className="text-white relative">
                  <div className="bg-white/30 hover:bg-white/20 rounded-full text-xl p-1.5 text-center inline-flex items-center">
                    {<BsBasket />}
                  </div>
                  <div className="bg-red-500 rounded-full text-center absolute -top-3 -right-1 px-1.5 text-sm font-bold">
                    {amountOfItems}
                  </div>
                </span>
                <span className="self-center text-white bg-white/30 hover:bg-white/20 rounded-full text-md p-1.5 px-6 ml-4 text-center inline-flex items-center mr-2">
                  Basket
                </span>
              </Link>
            }

            <div className="justify-between items-center flex w-auto">
              <h1 className="text-3xl xl:text-4xl font-bold text-white">
                My Cart
              </h1>
            </div>

            <div className="flex items-center">
              {
                <Link
                  to={"/"}
                  className="text-white bg-white/30 hover:bg-white/20 rounded-full text-xl p-1.5 text-center inline-flex items-center mr-2"
                >
                  <AiOutlineClose />
                </Link>
              }
            </div>
          </div>
        </nav>
      );

    default:
      return (
        <nav className="m-4 bg-gradient-to-r from-dark-green to-light-green px-2 sm:px-4 py-2.5 rounded-full">
          <div className="container py-4 flex flex-wrap justify-between items-center mx-auto">
            {
              <Link to={"/cart"} className="flex items-center">
                <span className="text-white relative">
                  <div className="bg-white/30 hover:bg-white/20 rounded-full text-xl p-1.5 text-center inline-flex items-center">
                    {<BsBasket />}
                  </div>
                  <div className="bg-red-500 rounded-full text-center absolute -top-3 -right-1 px-1.5 text-sm font-bold">
                    {amountOfItems}
                  </div>
                </span>
                <span className="self-center text-white bg-white/30 hover:bg-white/20 rounded-full text-md p-1.5 px-6 ml-4 text-center inline-flex items-center mr-2">
                  Basket
                </span>
              </Link>
            }

            <div className="justify-between items-center flex w-auto">
              <h1 className="text-3xl xl:text-4xl font-bold text-white">
                Products
              </h1>
            </div>

            <div className="flex items-center">
              {
                <Link
                  to={"/"}
                  className="text-white bg-white/30 hover:bg-white/20 rounded-full text-xl p-1.5 text-center inline-flex items-center mr-2"
                >
                  <AiOutlineClose />
                </Link>
              }
            </div>
          </div>
        </nav>
      );
  }
};

const Header = () => {
  const amountOfItems = useAppSelector(selectCartItemsLength);

  const location = useLocation();

  return <div>{RenderNavBasedOnUrl(location.pathname, amountOfItems)}</div>;
};

export default Header;
