import { useAppSelector } from "../../app/hooks";
import { selectCartItemsLength } from "../cart/cartSlice";
import Basket from "./Basket";
import Close from "./Close";
import HeaderTitle from "./HeaderTitle";
import Profile from "./Profile";
import Search from "./Search";

type Props = {
  left: "basket" | "categories";
  middle: "search" | string;
  right: "basket/profile" | "close";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  signOut: any;
};

const Header = ({ left, middle, right, signOut }: Props) => {
  const amountOfItems = useAppSelector(selectCartItemsLength);

  return (
    <div>
      <nav className="mb-4 mx-4 bg-gradient-to-r from-dark-green to-light-green px-2 sm:px-4 py-2.5 rounded-full">
        <div className="py-4 flex flex-wrap justify-between items-center mx-auto">
          {left == "basket" ? <Basket amountOfItems={amountOfItems} /> : <></>}
          {middle == "search" ? <Search /> : <HeaderTitle title={middle} />}
          {right == "basket/profile" ? (
            <>
              <Basket amountOfItems={amountOfItems} />
              <Profile onClick={signOut} />
            </>
          ) : (
            <Close />
          )}
        </div>
      </nav>
    </div>
  );
};

export default Header;
