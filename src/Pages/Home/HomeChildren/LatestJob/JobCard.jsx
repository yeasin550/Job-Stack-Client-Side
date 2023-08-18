import React from 'react';
import { FaMapMarkerAlt, FaRegClock } from "react-icons/fa";
import { IoLogoUsd } from "react-icons/io";
import apple from '../../../../assets/Jobs/apple.png'

const JobCard = ({ image, title, company, Technology,address,price,time }) => {
  return (
    <div className="md:w-6/12 h-44 job-card p-5 mt-5 md:mt-0">
      <div className="flex items-center">
        <div className="">
          <img className="h-20" src={image} alt="" />
        </div>
        <div className="mt-2 ml-8">
          <h1 className="text-xl font-semibold">{title}</h1>
          <p>{company}</p>
          <button className="px-2 py-1 bg-[#00B04D] mr-1 text-white mt-2">
            Technology
          </button>
          <button className="px-2 py-1 bg-[#00B04D] text-white mt-2">
            {Technology}
          </button>
        </div>
      </div>
      <div className="flex items-center gap-2 mt-3">
        <div className="flex items-center ">
          <p>{address}</p>
        </div>
        <div className="flex items-center ">
          <p>{price}</p>
        </div>
        <div className="flex items-center ">
          <p>{time}</p>
        </div>
      </div>
    </div>
  );
};

export default JobCard;



{/* <div className="flex items-center">
          <div className="">
            <img className="h-20" src={apple} alt="" />
          </div>
          <div className="ml-8">
            <h1 className=" text-xl font-semibold">IOS Developer</h1>
            <p className="">Apple</p>
            <div className="flex gap-3 mt-2">
              <button className="px-2 py-1 bg-[#00B04D] text-white">
                Technology
              </button>
              <button className="px-2 py-1 bg-[#00B04D] text-white">
                React js
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 mt-2">
          <div className="flex items-center ">
            <FaMapMarkerAlt />
            <p>Cupertino, USA</p>
          </div>
          <div className="flex items-center ">
            <IoLogoUsd />
            <p>$35000-$40000</p>
          </div>
          <div className="flex items-center ">
            <FaRegClock />
            <p>Full Time</p>
          </div>
            
        </div> */}