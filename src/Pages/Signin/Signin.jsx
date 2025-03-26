import React from "react";
import { IoMdHome } from "react-icons/io";
import { PiGreaterThan, PiLessThan } from "react-icons/pi";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center flex-col gap-5">
         <title>Sign In || popX</title>
      <div className="mobile-mockup bg-background min-h-[820px] border border-color-text-opacity border-opacity-10 px-5 py-6 flex flex-col justify-start">
        {/* content */}
        <h2 className="text-4xl font-bold mb-4 text-color-text">
          Signin to your <br />
          PopX account
        </h2>
        <p className="text-2xl text-color-text-opacity mb-6">
          Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit.
        </p>

        <form action="" className="flex flex-col gap-4">
          {/* email */}
          <div className="relative w-full">
            <label className="absolute left-3 -top-2 bg-white px-1 text-sm text-primary">
              Email Address
            </label>
            <input
              name="email"
              required
              type="email"
              placeholder="Enter email address"
              className="w-full border border-color-text-opacity border-opacity-30 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          {/* Password */}
          <div>
            <div className="relative w-full">
              <label className="absolute left-3 -top-2 bg-white px-1 text-sm text-primary">
                Password
              </label>
              <input
                name="password"
                required
                type="password"
                placeholder="Enter Password"
                className="w-full border border-color-text-opacity border-opacity-30 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>
          <div>
            <button className="w-full bg-accent py-2 rounded-md text-white hover:bg-primary hover:bg-opacity-50 duration-300 transition ease-in-out">
              Login
            </button>
          </div>
        </form>
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
          <p>2 of 4</p>
        </div>
        <div className="text-gray-500 hover:text-gray-700 transition ease-in-out duration-300">
          <PiGreaterThan size={25} />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
