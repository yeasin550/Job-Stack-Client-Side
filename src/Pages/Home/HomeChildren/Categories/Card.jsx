import React from "react";

const Card = ({ icon, title, num }) => {
  return (
    <div>
      <div className="bg-slate-50 p-7 md:h-56 categorires-card rounded-md shadow-xl cursor-pointer hover:scale-110 transition-transform duration-300">
        <div className="text-3xl flex justify-center text-white ">
          <button className="bg-[#09867E] rounded-full p-5">{icon}</button>
        </div>
        <div className="text-center">
          <h1 className="py-3 text-xl font-semibold">{title}</h1>
          <h1 className="">{num} Jobs</h1>
        </div>
      </div>
    </div>
  );
};

export default Card;
