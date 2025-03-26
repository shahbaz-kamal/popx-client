import React from "react";
import { IoMdHome } from "react-icons/io";
import { PiGreaterThan, PiLessThan } from "react-icons/pi";
import { Link } from "react-router-dom";

const CreateAccount = () => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center flex-col gap-5">
        <title>Create Account || popX</title>
      <div className="mobile-mockup bg-background min-h-[900px] border border-color-text-opacity border-opacity-10 px-5 py-6 flex flex-col justify-start">
        {/* content */}
        <h2 className="text-4xl font-bold mb-4 text-color-text">
          Create your <br />
          PopX account
        </h2>
        <p className="text-2xl text-color-text-opacity mb-6">
          Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit.
        </p>

        <form action="" className="flex flex-col gap-5">
          {/* Name */}
          <div className="relative w-full">
            <label className="absolute left-3 -top-2 bg-white px-1 text-sm text-primary">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              name="name"
              required
              type="text"
              placeholder="Enter Your Full Name"
              className="w-full border border-color-text-opacity border-opacity-30 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          {/* Phone */}
          <div className="relative w-full">
            <label className="absolute left-3 -top-2 bg-white px-1 text-sm text-primary">
              Phone number <span className="text-red-500">*</span>
            </label>
            <input
              name="phone"
              required
              type="number"
              placeholder="Enter Your Phone Number"
              className="w-full border border-color-text-opacity border-opacity-30 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          {/* Email */}
          <div className="relative w-full">
            <label className="absolute left-3 -top-2 bg-white px-1 text-sm text-primary">
              Email address <span className="text-red-500">*</span>
            </label>
            <input
              name="email"
              required
              type="email"
              placeholder="Enter Your Email Address"
              className="w-full border border-color-text-opacity border-opacity-30 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          {/* Password */}
          <div>
            <div className="relative w-full">
              <label className="absolute left-3 -top-2 bg-white px-1 text-sm text-primary">
                Password <span className="text-red-500">*</span>
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
          {/* Photo */}
          <div>
            <div className="relative w-full">
              <label className="absolute left-3 -top-2 bg-white px-1 text-sm text-primary">
                Photo URL <span className="text-red-500">*</span>
              </label>
              <input
                name="photo"
                required
                type="url"
                placeholder="Enter Photo URL"
                className="w-full border border-color-text-opacity border-opacity-30 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>
          {/* Company Name */}
          <div>
            <div className="relative w-full">
              <label className="absolute left-3 -top-2 bg-white px-1 text-sm text-primary">
                Company name <span className="text-red-500">*</span>
              </label>
              <input
                name="company"
                required
                type="text"
                placeholder="Enter Company Name"
                className="w-full border border-color-text-opacity border-opacity-30 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>
          {/* isAgency */}
          <div className="w-full">
            <label className="block text-sm font-medium text-color-text mb-1">
              Are you an Agency? <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center space-x-4">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="agency"
                  value="yes"
                  className="w-5 h-5 text-primary border-gray-300 focus:ring-primary"
                />
                <span className="text-color-text">Yes</span>
              </label>
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="agency"
                  value="no"
                  className="w-5 h-5 text-primary border-gray-300 focus:ring-primary"
                />
                <span className="text-color-text">No</span>
              </label>
            </div>
          </div>

          <div>
            <button className="w-full bg-primary py-2 rounded-md text-white hover:bg-primary hover:bg-opacity-80 duration-300 transition ease-in-out">
              Create Account
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
