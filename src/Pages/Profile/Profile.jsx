import React from "react";
import { FaCamera } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { PiGreaterThan, PiLessThan } from "react-icons/pi";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center flex-col gap-5">
      <title>Create Account || popX</title>
      <div className="mobile-mockup bg-background min-h-[900px] border border-color-text-opacity border-opacity-10   flex flex-col justify-start">
        {/* content */}
        <div className="bg-white w-full">
          <p className=" text-xl font-medium py-5 px-5 opacity-80">
            Account Settings
          </p>
        </div>
        {/* <h2 className="text-4xl font-bold mb-4 text-color-text">
          Create your <br />
          PopX account
        </h2>
        <p className="text-2xl text-color-text-opacity mb-6">
          Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit.
        </p> */}
        <div className="px-5 mt-6">
          {/* top */}
          <div className="flex gap-6 items-center">
            {/* image  */}
            <div className="w-20 h-20 rounded-full relative">
              <img
                className="w-full h-full object-cover rounded-full"
                src="https://i.ibb.co.com/6c60Yv8D/shahbaz-small.png"
                alt=""
              />
              <div className="bg-primary text-white absolute p-1 rounded-full right-0 bottom-[2px]">
                <FaCamera size={12} />
              </div>
            </div>
            {/* name & email */}
            <div>
              <h3 className="text-2xl font-bold  text-color-text">Marry Doe</h3>
              <p className="text-xl font-medium  text-color-text-opacity opacity-80">
                marry@gmail.com
              </p>
            </div>
          </div>
          {/* bottom */}
          <div className="mt-8">
            <p className="text-sm text-color-text font-medium opacity-80">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              accusamus dolorem placeat ipsa ex fugit, possimus asperiores
              cumque alias corrupti impedit neque voluptatibus quas ad ratione
              explicabo molestiae, itaque recusandae.
            </p>
          </div>
        </div>
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

export default Profile;
