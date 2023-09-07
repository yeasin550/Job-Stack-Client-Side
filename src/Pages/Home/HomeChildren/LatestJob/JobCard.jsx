import React from "react";
import JobDesign from "./JobDesign";

const JobCard = ({ items }) => {
  return (
    <div className="max-w-screen-xl px-5 mx-auto">
      <div className="grid md:grid-cols-2 gap-10">
        {items.map((item) => (
          <JobDesign key={item._id} item={item}></JobDesign>
        ))}
      </div>
    </div>
  );
};
export default JobCard;
