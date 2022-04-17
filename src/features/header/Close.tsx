import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

const Close = () => {
  return (
    <div className="flex items-center">
      <Link
        to={"/"}
        className="text-white bg-white/30 hover:bg-white/20 rounded-full text-xl p-1.5 text-center inline-flex items-center mr-2"
      >
        <AiOutlineClose />
      </Link>
    </div>
  );
};

export default Close;
