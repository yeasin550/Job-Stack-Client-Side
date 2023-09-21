import React from "react";
import { FaBell } from "react-icons/fa";

const Subscribe = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  }
  return (
    <div className="p-12  bg-[#09867E]  text-white dark:bg-gradient-to-r from-gray-700 via-gray-900 to-black rounded-md mb-20">
      <div className="md:flex justify-evenly items-center dark:shadow-sm dark:shadow-gray-400 py-6">
        {/* Frist div */}
        <div className="flex items-center gap-4">
          <FaBell className="text-6xl" />
          <div className="">
            <h1 className="text-2xl font-semibold">Get Jobs Notifications</h1>
            <p>Free Subscribe Out Newsletter Now!</p>
          </div>
        </div>
        {/* second div */}
        <div className="">
          <form onSubmit={handleSubmit} className="md:flex items-center gap-10">
            <input
              className="py-2 dark:text-black w-full mt-3 md:mt-0 md:w-96 ps-3 text-lg rounded-md outline-0"
              type="email"
              name="email"
              id=""
              placeholder="Type Your Email Address"
            />
            <input
              className="bg-[#09867E] shadow-md px-8 py-2 mt-3 md:mt-0 rounded-md text-white cursor-pointer"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
