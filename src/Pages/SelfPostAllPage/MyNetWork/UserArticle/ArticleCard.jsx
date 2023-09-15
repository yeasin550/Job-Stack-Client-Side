import React from "react";
import { FaUserAlt } from "react-icons/fa";

const ArticleCard = ({ article }) => {
  const {
    articletitle,
    userName,
    userPhoto,
    image,
    artciledescription,
    timeStamp,
  } = article;
  return (
    <div>
      <div className="shadow-xl h-96 p-3 rounded-lg">
        <div className="flex items-center gap-3">
          {userPhoto ? (
            <img className="w-10 h-10 rounded-full" src={userPhoto} />
          ) : (
            <FaUserAlt className="w-10 h-10 rounded-full bg-gray-200"></FaUserAlt>
          )}
          <div className="">
            <p className="font-bold">{userName}</p>
            <p>{timeStamp}</p>
          </div>
        </div>
        <img src={image} alt="" />
        <h1 className="text-lg font-semibold mb-2">{articletitle}</h1>

        <p className="text-sm"> {artciledescription}</p>
      </div>
    </div>
  );
};

export default ArticleCard;
