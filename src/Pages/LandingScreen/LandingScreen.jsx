import React from "react";

const LandingScreen = () => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <div className="mobile-mockup bg-background min-h-[800px] border border-color-text-opacity border-opacity-10 px-5 py-6 flex flex-col justify-end">
        {/* content */}
        <h2 className="text-3xl font-bold mb-1 text-color-text">
          Welcome to PopX
        </h2>
        <p className="text-xl text-color-text-opacity mb-6">
          Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit.
        </p>
        <button className="bg-primary py-2 rounded-md mb-3 text-white text-lg font-medium">
          Create Account
        </button>
        <button className="bg-secondary py-2 rounded-md text-lg font-medium">
          Already Registered? Login
        </button>
      </div>
    </div>
  );
};

export default LandingScreen;
