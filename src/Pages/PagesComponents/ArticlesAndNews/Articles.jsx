import React from "react";
import { BiRightArrowAlt } from "react-icons/bi";
import { Link } from "react-router-dom";

const Articles = ({ article }) => {
  const { _id, title, timeStamp, image } = article;
  return (
    <div className=" w-full shadow-xl rounded-md bg-white  p-2 md:p-2">
      <div className="rounded overflow-hidden flex flex-col">
        <img
          className="w-full h-64 transform transition-transform hover:scale-90 duration-700"
          src={image}
          alt="Sunset in the mountains"
        />
        <div className="mt-3">
          <p>{timeStamp}</p>

          <h1 className="text-xl my-2 font-semibold">{title}</h1>
          <Link to={`/details/${_id}`}>
            <p className="mt-3 font-semibold text-blue-600 cursor-pointer flex items-center gap-2">
              Read More
              <BiRightArrowAlt className="text-xl" />
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Articles;
