import React from "react";
import { FaHandPointRight, FaRegCommentDots, FaUserAlt } from "react-icons/fa";
import { BiRightArrowAlt } from "react-icons/bi";
// aso animation
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import images from '../../../../assets/images/home-banner.png'

const NewsInsights = () => {
  // aos annimation
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="max-w-screen-xl px-5 mx-auto">
      <div className="text-center space-y-5 my-5">
        <h1 className="md:text-4xl text-2xl font-bold">Recent News Articles</h1>
        <p className="text-lg">
          Fresh job related news content posted each day.
        </p>
      </div>
      <div
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
        className="grid lg:gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
      >
        {/* div-1 */}
        <div className="w-full shadow-xl rounded-md max-w-screen-xl mx-auto sm:p-10 md:p-4">
          <div className="rounded overflow-hidden flex flex-col max-w-xl mx-auto">
            <a href="#">
              <img
                className="w-full transform transition-transform hover:scale-125 duration-700"
                src="https://job-board.dexignzone.com/xhtml/images/blog/default/thum3.jpg"
                alt="Sunset in the mountains"
              />
            </a>
            <div className="mt-3">
              <div className="flex gap-8 items-center">
                <p> August 31, 2023</p>
                <p className="flex items-center gap-2">
                  <FaRegCommentDots /> 12 Comment
                </p>
              </div>
              <h1 className="text-xl my-2 font-semibold">
                Attract Sales And Profits
              </h1>
              <p>
                A job ravenously while Far much that one rank beheld after
                outside....
              </p>
              <p className="mt-3 font-semibold text-blue-600 cursor-pointer flex items-center gap-2">
                Read More
                <BiRightArrowAlt className="text-xl" />
              </p>
            </div>
          </div>
        </div>

        {/* div-2 */}
        <div className="max-w-screen-xl shadow-xl rounded-md  mx-auto p-5 sm:p-4 md:p-2">
          <div className="rounded overflow-hidden flex flex-col max-w-xl mx-auto">
            <a href="#">
              <img
                className="w-full transform transition-transform hover:scale-125 duration-700"
                src="https://job-board.dexignzone.com/xhtml/images/blog/default/thum2.jpg"
                alt="Sunset in the mountains"
              />
            </a>

            <div className="mt-3">
              <div className="flex gap-8 items-center">
                <p> September 1, 2023</p>
                <p className="flex items-center gap-2">
                  <FaRegCommentDots /> 16 Comment
                </p>
              </div>
              <h1 className="text-xl my-2 font-semibold">
                5 Tips For Your Job Interviews
              </h1>
              <p>
                A job ravenously while Far much that one rank beheld after
                outside....
              </p>
              <p className="mt-3 font-semibold text-blue-600 cursor-pointer flex items-center gap-2">
                Read More
                <BiRightArrowAlt className="text-xl" />
              </p>
            </div>
          </div>
        </div>

        {/* div-3 */}
        <div className="max-w-screen-xl shadow-xl rounded-md  mx-auto p-5 sm:p-10 md:p-2">
          <div className="rounded overflow-hidden flex flex-col max-w-xl mx-auto">
            <a href="#">
              <img
                className="w-full transform transition-transform hover:scale-125 duration-700"
                src="https://job-board.dexignzone.com/xhtml/images/blog/default/thum1.jpg"
                alt="Sunset in the mountains"
              />
            </a>
            <div className="mt-3">
              <div className="flex gap-8 items-center">
                <p> September 3, 2023</p>
                <p className="flex items-center gap-2">
                  <FaRegCommentDots /> 9 Comment
                </p>
              </div>
              <h1 className="text-xl my-2 font-semibold">
                Overworked Newspaper Editor
              </h1>
              <p>
                A job ravenously while Far much that one rank beheld after
                outside....
              </p>
              <p className="mt-3 font-semibold text-blue-600 cursor-pointer flex items-center gap-2">
                Read More
                <BiRightArrowAlt className="text-xl" />
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="banner text-white p-5 md:h-52 h-full rounded-md mt-20">
        <div className="md:flex justify-evenly items-center">
          <div>
            <h1 className="text-3xl font-semibold md:-mt-7">
              Are You Looking For A
             Dream Job?
            </h1>
            <p className="text-xl mt-2">
              2400+ candidates are available for your company.
            </p>
          </div>

          <div className="">
            <img
              className="md:h-64 -mt-12 hidden md:block"
              src={images}
              alt="images"
              draggable='false'
            />
          </div>
          <div className="">
            <Link to="jobsroute">
              <button className="banner-button mt-2 md:-mt-8">Browse Jobs</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsInsights;
