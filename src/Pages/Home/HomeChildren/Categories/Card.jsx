import React from "react";

const Card = ({ images, icon, title, num }) => {
  return (
    <div>
      <div className="card card-compact bg-base-100 shadow-xl">
        <figure>
          <img className="h-40 w-full" src={images} />
        </figure>
        <div className="card-body">
          <div className="-mt-12  text-white ">
            <button className="text-5xl bg-[#00B04D] px-2 py-2 rounded-md">
              {icon}
            </button>
          </div>
          <h2 className="card-title font-bold">{title}</h2>
          <p className="mb-3">
            Posted Jobs:{" "}
            <span className="px-3 py-1 bg-[#00B04D] rounded-md text-white">{num}</span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
