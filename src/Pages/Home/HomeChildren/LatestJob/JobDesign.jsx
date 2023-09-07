import React from 'react';
import{BiDollarCircle, BiMap} from 'react-icons/bi'
import { Link } from 'react-router-dom';
// aso animation
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const JobDesign = ({ item }) => {
  const { image, jobTitle, companyName, workplace, salary, location } = item;
  // aos annimation
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div data-aos="fade-up" data-aos-duration="3000" className="cards">
      <div className="shadow-lg p-4 md:p-6 mt-8 hover:shadow-2xl rounded-md w-full md:w-[600px] card">
        <div className="flex flex-col md:flex-row items-center md:gap-5">
          <div className="mb-4 md:mb-0 md:mr-4">
            <img className="h-20 w-20" src={image} alt="" />
          </div>
          <div className="flex-grow text-center md:text-left">
            <h1 className="text-2xl font-bold">{jobTitle}</h1>
            <h1>
              Company Name:{" "}
              <span className="font-semibold text-lg">{companyName}</span>
            </h1>
            <h1>{workplace}</h1>
            <div className="flex flex-col md:flex-row items-center gap-2">
              <h1 className="flex items-center gap-1">
                <BiMap /> {location}
              </h1>
              <h1 className="flex items-center gap-1">
                <BiDollarCircle />
                {salary}/month
              </h1>
            </div>
          </div>
          <div className="mt-4 md:mt-0 text-center md:text-right">
            <div className="">
              <Link to="jobApplyForm">
                <button className="px-4 md:px-6 py-2 banner text-white outline-0 rounded-md font-semibold">
                  Apply Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDesign;