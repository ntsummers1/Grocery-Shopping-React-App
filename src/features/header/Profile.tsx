import React from "react";
import { FaUserCircle } from "react-icons/fa";

const Profile = (props: { onClick: () => void }) => {
  return (
    <button
      onClick={props.onClick}
      className="text-white bg-white/30 hover:bg-white/20 rounded-full text-2xl p-1.5 text-center inline-flex items-center mr-2 cursor-pointer ml-2 sm:ml-4 lg:ml-8"
    >
      <FaUserCircle />
    </button>
  );
};

export default Profile;
