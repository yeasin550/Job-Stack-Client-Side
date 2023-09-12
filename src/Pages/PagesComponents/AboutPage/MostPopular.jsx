import React from 'react';
import images from '../../../assets/images/about.jpg'
import { FaSearch, FaUsers } from 'react-icons/fa';
import { HiPhoto } from "react-icons/hi2";
import { GoDeviceDesktop } from "react-icons/go";
import { MdOutlineShoppingBag } from "react-icons/md";
import { TfiWrite } from "react-icons/tfi";

const MostPopular = () => {
    return (
      <div className="max-w-screen-xl px-5 mx-auto my-20">
        <div className="grid md:grid-cols-2 gap-5 items-center">
          <div className="">
            <img src={images} alt="banner images" draggable="false" />
          </div>
          <div className="">
            <h1 className="text-4xl font-bold"> Why We are Most Popular</h1>
            <p className="text-lg mt-4 text-justify">
              We've earned our reputation as the most popular job site by
              offering a world of opportunities to job seekers and a seamless
              hiring experience to employers. With a vast selection of job
              listings, user-friendly tools, personalized guidance, and a
              vibrant community, we're your go-to destination for all things
              career-related. Join millions of satisfied users who have found
              their dream jobs and top talent right here. Start your journey to
              success today with Job-Stack
            </p>
            <div className="mt-7 grid grid-cols-2 gap-5">
              <div className="flex items-center gap-2 text-xl">
                <button className="banner rounded-full p-2 text-white">
                  <FaUsers />
                </button>
                <h1 className="font-semibold">Career Connect</h1>
              </div>
              <div className="flex items-center gap-2 text-xl">
                <button className="banner rounded-full p-2 text-white">
                  <FaSearch />
                </button>
                <h1 className="font-semibold">Job Search</h1>
              </div>
              <div className="flex items-center gap-2 text-xl">
                <button className="banner rounded-full p-2 text-white">
                  <HiPhoto />
                </button>
                <h1 className="font-semibold">User Post</h1>
              </div>
              <div className="flex items-center gap-2 text-xl">
                <button className="banner rounded-full p-2 text-white">
                  <GoDeviceDesktop />
                </button>
                <h1 className="font-semibold"> Top Companies</h1>
              </div>
              <div className="flex items-center gap-2 text-xl">
                <button className="banner rounded-full p-2 text-white">
                  <MdOutlineShoppingBag />
                </button>
                <h1 className="font-semibold">International Job</h1>
              </div>
              <div className="flex items-center gap-2 text-xl">
                <button className="banner rounded-full p-2 text-white">
                  <TfiWrite />
                </button>
                <h1 className="font-semibold"> Trusted & Quality Job</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default MostPopular;