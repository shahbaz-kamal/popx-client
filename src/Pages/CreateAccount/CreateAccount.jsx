import React from "react";
import { IoMdHome } from "react-icons/io";
import { PiGreaterThan, PiLessThan } from "react-icons/pi";
import { Link } from "react-router-dom";

const CreateAccount = () => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center flex-col gap-5">
      <div className="mobile-mockup bg-background min-h-[800px] border border-color-text-opacity border-opacity-10 px-5 py-6 flex flex-col justify-end">
        {/* content */}
        <h2 className="text-3xl font-bold mb-1 text-color-text">
          Welcome to PopX create account
        </h2>
        <p className="text-xl text-color-text-opacity mb-6">
          Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit.
        </p>
      </div>
      <div className="flex gap-4">
        <div className="text-gray-500 hover:text-gray-700 transition ease-in-out duration-300">
          <Link to={"/"}>
            <IoMdHome size={25} />
          </Link>
        </div>
        <div className="text-gray-500 hover:text-gray-700 transition ease-in-out duration-300">
          <PiLessThan size={25} />
        </div>
        <div className="text-gray-500 ">
          <p>3 of 4</p>
        </div>
        <div className="text-gray-500 hover:text-gray-700 transition ease-in-out duration-300">
          <PiGreaterThan size={25} />
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
