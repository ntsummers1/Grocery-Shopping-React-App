import React from "react";
import { FaUserCircle } from "react-icons/fa";

const Profile = (props: { onClick: () => void }) => {
  return (
    <FaUserCircle
      onClick={props.onClick}
      className="text-white bg-white/30 hover:bg-white/20 rounded-full text-4xl p-1.5 text-center inline-flex items-center mr-2 cursor-pointer ml-8"
    />
  );
};

export default Profile;
