import React from 'react';
import images from "../../../../assets/images/home-banner.png";
import { Link } from 'react-router-dom';

const JobBanner = () => {
    return (
      <div className="banner max-w-screen-xl px-5 mx-auto p-5 md:h-52 h-full rounded-md">
        <div className="md:flex justify-evenly items-center">
          <div>
            <h1 className="text-3xl font-semibold md:-mt-7">
              Are You Looking For A
              <span className="text-[#09867E]"> Dream Job?</span>
            </h1>
            <p className="text-xl mt-2">
              2400+ candidates are available for your company.
            </p>
          </div>
          <div className="">
            <img className="h-64 -mt-12 hidden md:block" src={images} alt="" />
          </div>
          <div className="">
            <Link to="jobsearch">
              <button className="banner-button md:-mt-8 ">Browse Jobs</button>
            </Link>
          </div>
        </div>
      </div>
    );
};

export default JobBanner;