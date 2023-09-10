import React from "react";
import "./Banner.css";
import banner1 from "../../../../assets/images/banner1.png";
import banner2 from "../../../../assets/images/banner2.png";
import banner3 from "../../../../assets/images/banner3.png";
import banner4 from "../../../../assets/images/banner4.png";
import banner5 from "../../../../assets/images/banner5.png";
import banner6 from "../../../../assets/images/banner6.png";
import Typewriter from "typewriter-effect";
import { Link, useLocation } from "react-router-dom";
import UseScrollTop from "../../../../Hooks/UseScrollTop";
import banner from "../../../../assets/images/banner.png";
import bk from "../../../../assets/images/Blue_Black_Futuristic_And_Modern_Technology_Logo__5_-removebg-preview.png";

const Banner = () => {
   const { pathname } = useLocation();
   UseScrollTop(pathname);
  return (
    <div className="banner  side-bar">
      <div className="md:px-20 px-5">
        <div className="grid md:grid-cols-2 gap-4 items-center justify-center py-10 md:py-24">
          {/*text part */}
          <div className="items-center justify-center space-y-6 ">
            <h1 className="md:text-5xl text-transparent bg-clip-text  bg-gradient-to-r from-white via-yellow-400 to-white text-2xl font-bold">
              Your Excellent Find Job
              <span className="md:text-5xl text-2xl font-bold">
                <Typewriter
                  options={{
                    strings: [
                      "Top Category Jobs Available",
                      "To Get Your Dream Jobs",
                      "Your Ultimate Job Search Hub",
                      "Your Path to Success",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </h1>

            <h3 className="lg:text-xl text-[16px]  text-white mt-20">
              Are you on the hunt for your dream job searching for the
              perfect candidate to join your team? Look no further! JobStack is
              your one-stop destination for all your career needs.
            </h3>

            <div className="flex items-center gap-10 mt-4">
              <div className="lg:pt-6">
                <Link to="jobsroute">
                  <button className="banner-button ">Browse Jobs</button>
                </Link>
              </div>
            </div>
          </div>

          {/* image part */}
          <div className="md:block hidden ">
            <div className=" banner-imgs">
              <div className="banner-1 shape-1">
                <img src={banner1} alt="images" />
              </div>
              <div className="banner-2 shape-2">
                <img src={banner2} alt="images" />
              </div>
              <div className="banner-3 shape-3">
                <img src={banner3} alt="images" />
              </div>
              <div className="banner-4 shape-3">
                <img  src={banner4} alt="images" />
              </div>
              <div className="banner-5  shape-2">
                <img src={banner5} alt="images" />
              </div>
              <div className="banner-6 shape-2">
                <img src={banner6} alt="images" />
              </div>
            </div>
          </div>
          {/* rotate Background */}
           <div className="md:hidden relative py-12 order-first px-2 w-full">
           <img className="w-full z-10 relative"  src={banner} alt="" />
           <img className="absolute top-16 w-full animate-spin-slow" src={bk} alt="" />

         </div>

        </div>
      </div>
    </div>
  );
};

export default Banner;


