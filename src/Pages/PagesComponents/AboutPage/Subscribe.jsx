import React from "react";
import { FaBell } from "react-icons/fa";

const Subscribe = () => {
  return (
      <div className="p-12  banner text-white rounded-md mb-20">
        <div className="md:flex justify-evenly items-center">
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
            <form className="md:flex items-center gap-10">
              <input
                className="py-2 dark:text-black w-full mt-3 md:mt-0 md:w-96 ps-3 text-lg rounded-md outline-0"
                type="email"
                name="email"
                id=""
                placeholder="Type Your Email Address"
              />
              <input
                className="banner px-8 py-2 mt-3 md:mt-0 rounded-md text-white"
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
