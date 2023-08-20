import React from 'react';
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
