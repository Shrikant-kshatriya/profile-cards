import React from "react";
import { IoMdFemale, IoMdMale } from "react-icons/io";

const Card = ({ user }) => {
  return (
    <div className="relative bg-gradient-to-r from-indigo-300 to-purple-300 p-6 rounded-[30px] shadow-lg w-full min-w-[500px] flex flex-col sm:flex-row items-center gap-6 overflow-hidden">

      <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-br from-indigo-200 to-purple-200 rounded-bl-[50%] z-0"></div>

      <div className="w-36 h-36 relative z-10">
        <img
          src={user.picture.large}
          alt={`${user.name.first} ${user.name.last}`}
          className="w-full h-full rounded-xl object-cover border border-gray-300"
        />
      </div>

      <div className="text-center sm:text-left relative z-10">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
          {user.name.title} {user.name.first} {user.name.last}
        </h2>

        <div className="flex items-center mt-3 text-gray-700 text-lg">
          <span className="font-semibold">Gender:</span>
          <span className="mx-2 capitalize">{user.gender}</span>
          {user.gender === "male" ? (
            <IoMdMale className="text-blue-500 mr-2" size={18} />
          ) : (
            <IoMdFemale className="text-red-500 mr-2" size={18} />
          )}
        </div>

        <div className="flex items-center mt-2 text-gray-700 text-lg">
          <span className="font-semibold">Phone:</span>
          <span className="ml-2">{user.phone}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
