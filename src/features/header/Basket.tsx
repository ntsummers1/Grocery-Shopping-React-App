import { BsBasket } from "react-icons/bs";
import { Link } from "react-router-dom";

type Props = {
  amountOfItems: number;
};

const Basket = ({ amountOfItems }: Props) => {
  return (
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
  );
};

export default Basket;
