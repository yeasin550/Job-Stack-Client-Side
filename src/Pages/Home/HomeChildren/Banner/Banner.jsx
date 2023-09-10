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

const Banner = () => {
   const { pathname } = useLocation();
   UseScrollTop(pathname);
  return (
    <div className="banner side-bar text-white">
      <div className="max-w-screen-xl px-5 mx-auto min-h-screen ">
        <div className="grid md:grid-cols-2 gap-4 items-center justify-center  pt-28">
          {/*text part */}
          <div className="items-center justify-center space-y-6 ">
            <h1 className="text-3xl font-bold">
              Your Excellent Find Job
              <span className="text-3xl font-bold">
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

            <h3 className="text-xl mt-20">
              Are you on the hunt for your dream job or searching for the
              perfect candidate to join your team? Look no further! Job-Stack is
              your one-stop destination for all your career needs.
            </h3>

            <div className="flex items-center gap-10 mt-44">
              <div className="pt-6">
                <Link to="jobsroute">
                  <button className="banner-button">Browse Jobs</button>
                </Link>
              </div>
            </div>
          </div>

          {/* image part */}
          <div className="block ">
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
                <img src={banner4} alt="images" />
              </div>
              <div className="banner-5 shape-2">
                <img src={banner5} alt="images" />
              </div>
              <div className="banner-6 shape-2">
                <img src={banner6} alt="images" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="waves-section md:mt-0 mt-24">
        <div className="wave wave-1"></div>
        <div className="wave wave-2"></div>
        <div className="wave wave-3"></div>
        <div className="wave wave-4"></div>
      </div>
    </div>
  );
};

export default Banner;


