import React from "react";
import { FaGreaterThan, FaLessThan } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { PiGreaterThan, PiLessThan } from "react-icons/pi";
import { Link } from "react-router-dom";

const LandingScreen = () => {
  return (
    <div className="w-full  flex items-center justify-center flex-col gap-5 min-h-screen">
      <div className="mobile-mockup bg-background min-h-[800px] border border-color-text-opacity border-opacity-10 px-5 py-6 flex flex-col justify-end">
        {/* content */}
        <h2 className="text-3xl font-bold mb-1 text-color-text">
          Welcome to PopX
        </h2>
        <p className="text-xl text-color-text-opacity mb-6">
          Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit.
        </p>
        <Link to={"/create-account"}>
          <button className="bg-primary py-2 rounded-md mb-3 text-white text-lg font-medium w-full hover:bg-primary hover:bg-opacity-80 transition ease-in-out duration-300">
            Create Account
          </button>
        </Link>
        <Link to={"/signin"}>
          <button className="bg-secondary py-2 rounded-md text-lg font-medium w-full hover:bg-secondary hover:bg-opacity-70 transition ease-in-out duration-300">
            Already Registered? Login
          </button>
        </Link>
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
          <p>1 of 4</p>
        </div>
        <div className="text-gray-500 hover:text-gray-700 transition ease-in-out duration-300">
          <PiGreaterThan size={25} />
        </div>
      </div>
    </div>
  );
};

export default LandingScreen;
