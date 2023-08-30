import React from "react";
import "./Banner.css";
import banner from "../../../../assets/images/banner.png";
import Typewriter from "typewriter-effect";
import bk from "../../../../assets/images/animationbk.png";

const Banner = () => {
  return (
    <div className="max-w-screen-xl  px-5 mx-auto min-h-[80vh]">
      <div className="grid md:grid-cols-2 gap-4 items-center justify-center ">
        {/* ====================Left part */}
        <div className="py-12 ">
          <img className="absolute lg:h-[500px] animate-spin-slow  mt-10 mr-4   animate-spin" src={bk} alt="" />
          <img className="relative" src={banner} alt="" />
        </div>
        {/* ===================Right part */}

        <div className="items-center justify-center space-y-6 ">
          <h1 className="lg:text-5xl text-3xl font-bold">
            Our Excellent Find Job
            <h1 className="lg:text-5xl text-3xl font-bold">
              <Typewriter
                options={{
                  strings: ["Best Career", "Best Solution", "Great Offer"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
          </h1>

          <h3 className="text-xl text-gray-500">
            There are many variations passages of Lorem Ipsum Fasts by injected
            humour, or randomised words which...
          </h3>

          <div className="pt-6">
            <button className="bg-green-500 py-2 px-6 rounded-sm text-white hover:bg-white hover:text-black  border border-green-500 text-lg flex justify-center items-center gap-3 duration-700">
              Browse Jobs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;


