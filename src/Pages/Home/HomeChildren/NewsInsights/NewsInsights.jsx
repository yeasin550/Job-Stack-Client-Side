import React from "react";
import { FaHandPointRight, FaRegCommentDots, FaUserAlt } from "react-icons/fa";
// import  './NewsInsights.css'
const NewsInsights = () => {
  return (
    <div className="my-16 md:px-20 ">
      <div className="text-center space-y-5 my-5">
        <h1 className="text-4xl font-bold text-green-500">News & Insights</h1>
        <p className="text-lg">
          Mauris ut cursus nunc. Morbi eleifend, ligula at consectetur vehicula
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {/* div-1 */}
        <div className="w-full max-w-screen-xl mx-auto p-5 sm:p-10 md:p-2">
          <div className="rounded overflow-hidden flex flex-col max-w-xl mx-auto">
            <a href="#">
              <img
                className="w-full transform transition-transform hover:scale-125 duration-700"
                src="https://i.ibb.co/cC1vyyC/1.jpg"
                alt="Sunset in the mountains"
              />
            </a>
            <div className="relative -mt-16 px-10 pt-5 pb-16 bg-white m-10 shadow-md shadow-gray-200 space-y-6">
              <div className="flex gap-8">
                <p className="flex justify-center items-center gap-3">
                  <FaUserAlt></FaUserAlt> <spna>Admin</spna>
                </p>
                <p className="flex justify-center items-center gap-3">
                  <FaRegCommentDots></FaRegCommentDots> Comments
                </p>
              </div>
              <a
                href="#"
                className="font-bold text-xl hover:text-green-500 transition duration-500 ease-in-out inline-block mb-2"
              >
                How To Work Instagram Marketing
              </a>
              <button className="bg-green-500 py-2 px-6 rounded-sm text-white hover:bg-black  border border-green-500 text-lg flex justify-center items-center gap-3 duration-700">
                Read More{" "}
                <span>
                  <FaHandPointRight></FaHandPointRight>
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* div-2 */}
        <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-2">
          <div className="rounded overflow-hidden flex flex-col max-w-xl mx-auto">
            <a href="#">
              <img
                className="w-full transform transition-transform hover:scale-125 duration-700"
                src="https://i.ibb.co/b74kyf4/2.jpg"
                alt="Sunset in the mountains"
              />
            </a>

            <div className="relative -mt-16 px-10 pt-5 pb-16 bg-white m-10 shadow-md shadow-gray-200 space-y-6">
              <div className="flex gap-8">
                <p className="flex justify-center items-center gap-3">
                  <FaUserAlt></FaUserAlt> <spna>Admin</spna>
                </p>
                <p className="flex justify-center items-center gap-3">
                  <FaRegCommentDots></FaRegCommentDots> Comments
                </p>
              </div>
              <a
                href="#"
                className="font-bold text-xl inline-block hover:text-green-500 transition duration-500 ease-in-out mb-2"
              >
                Businesses Thriving, Are Not Societies.
              </a>
              <button className="bg-green-500 py-2 px-6 rounded-sm text-white hover:bg-black  border border-green-500 text-lg flex justify-center items-center gap-3 duration-700">
                Read More{" "}
                <span>
                  <FaHandPointRight></FaHandPointRight>
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* div-3 */}
        <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-2">
          <div className="rounded overflow-hidden flex flex-col max-w-xl mx-auto">
            <a href="#">
              <img
                className="w-full transform transition-transform hover:scale-125 duration-700"
                src="https://i.ibb.co/bFwMDk4/3.jpg"
                alt="Sunset in the mountains"
              />
            </a>
            <div className="relative -mt-16 px-10 pt-5 pb-16 bg-white m-10 shadow-md shadow-gray-300 space-y-6">
              <div className="flex gap-8">
                <p className="flex justify-center items-center gap-3">
                  <FaUserAlt></FaUserAlt> <spna>Admin</spna>
                </p>
                <p className="flex justify-center items-center gap-3">
                  <FaRegCommentDots></FaRegCommentDots> Comments
                </p>
              </div>
              <a
                href="#"
                className="font-bold text-xl inline-block hover:text-green-500 transition duration-500 ease-in-out mb-2"
              >
                TNike Shoes Attract More For Sales.
              </a>
              <button className="bg-green-500 py-2 px-6 rounded-sm text-white hover:bg-black  border border-green-500 text-lg flex justify-center items-center gap-3 duration-700">
                Read More
                <span>
                  <FaHandPointRight></FaHandPointRight>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* post jobs now */}
      <div className="flex justify-between items-center shadow-lg shadow-gray-300 mt-5 pr-7">
        <div className="text-4xl py-7 px-9 font-bold custom-shape  relative bg-green-500 text-white">
          Post jobs now
        </div>
        <div>Start your free trial today, no credit card is required.</div>
        <div>
          <button className="bg-green-500 py-2 px-8 rounded-sm text-white hover:bg-white hover:text-black border border-green-500 text-lg duration-1000">
            Post Now!
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsInsights;
