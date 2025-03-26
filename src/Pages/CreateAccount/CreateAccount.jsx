import React from "react";
import { IoMdHome } from "react-icons/io";
import { PiGreaterThan, PiLessThan } from "react-icons/pi";
import { Link, useNavigate } from "react-router-dom";
import UseAuth from "../../Hooks/UseAuth";
import Swal from "sweetalert2";
import UseAxiosPublic from "../../Hooks/useAxiosPublic";

const CreateAccount = () => {
  const { user, createUser, setLoading } = UseAuth();
  const axiosPublic = UseAxiosPublic();
  const navigate = useNavigate();
  // handling next & prevoius button
  const handleNext = () => {
    if (user && user?.email) {
      navigate("/profile");
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You can' view profile unless you are logged in",
      });
      navigate("/");
    }
  };
  const handlePrev = () => {
    navigate("/signin");
  };

  const handleCreateAccount = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const password = e.target.password.value;
    const phone = e.target.phone.value;
    const email = e.target.email.value;
    const company = e.target.company.value;
    const isAgency = e.target.agency.value;
    const photo = e.target.photo.value;
    const userInfo = { name, phone, email, company, isAgency, photo };
    // password verification
    const regexPass = /^.{6,}$/;
    const regexUpperCase = /[A-Z]/;
    const regexLowerCase = /[a-z]/;
    if (!regexPass.test(password)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Password should be at least 6 characters",
      });
      return;
    }
    if (!regexUpperCase.test(password)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Password should contain at least 1 uppercase letter",
      });
      return;
    }
    if (!regexLowerCase.test(password)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Password should contain at least 1 lowercase letter",
      });
      return;
    }
    console.log(userInfo);
    createUser(email, password)
      .then(async (result) => {
        console.log(result.user);
        // inserting userinfo in mongodb
        try {
          const res = await axiosPublic.post("user", userInfo);
          console.log(res.data);
          if (res.data.message === "user Exist") {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "You Already have an account. Please login to continue",
            });
          }
          if (res.data.insertedId) {
            Swal.fire({
              title: "Good job!",
              text: "Account created Successfully",
              icon: "success",
            });
            setLoading(false);
            navigate("/profile");
          }
        } catch (err) {
          console.log(err.message);
        }
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${error.message}`,
        });
      });
  };
  return (
    <div className="w-full min-h-screen flex items-center justify-center flex-col gap-5">
      <title>Create Account || popX</title>
      <div className="mobile-mockup bg-background min-h-[820px] border border-color-text-opacity border-opacity-10 px-5 py-6 flex flex-col justify-start">
        {/* content */}
        <h2 className="text-4xl font-bold mb-4 text-color-text">
          Create your <br />
          PopX account
        </h2>
        <p className="text-2xl text-color-text-opacity mb-6">
          Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit.
        </p>

        <form onSubmit={handleCreateAccount} className="flex flex-col gap-5">
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
                Photo URL
              </label>
              <input
                name="photo"
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
        <div
          onClick={handlePrev}
          className="hover:cursor-pointer text-gray-500 hover:text-gray-700 transition ease-in-out duration-300"
        >
          <PiLessThan size={25} />
        </div>
        <div className="text-gray-500 ">
          <p>3 of 4</p>
        </div>
        <div
          onClick={handleNext}
          className="hover:cursor-pointer text-gray-500 hover:text-gray-700 transition ease-in-out duration-300"
        >
          <PiGreaterThan size={25} />
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
