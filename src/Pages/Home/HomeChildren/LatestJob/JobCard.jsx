import React from "react";
import JobDesign from "./JobDesign";

const JobCard = ({ items }) => {
  return (
    <div className="w-full px-3 lg:px-16">
      <div className="grid md:grid-cols-2 gap-10">
        {items.map((item) => (
          <JobDesign key={item._id} item={item}></JobDesign>
        ))}
      </div>
    </div>
  );
};
export default JobCard;
