import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const ArticleCard = ({ article }) => {
  const {
    _id,
    articletitle,
    userName,
    userPhoto,
    image,
    artciledescription,
    timeStamp,
  } = article;
  return (
    <div>
      <>
        {/* component */}
        <div className="mx-auto px-4  max-w-xl">
          <div className="bg-white shadow-2xl rounded-lg mb-6 tracking-wide">
            <div className="md:flex-shrink-0">
              <img
                src={image}
                alt="mountains"
                className="w-full h-52 rounded-lg rounded-b-none"
              />
            </div>
            <div className="px-4 py-2 mt-2">
              <h2 className="font-bold text-2xl text-gray-800 tracking-normal">
                {articletitle}
              </h2>
              <p className="text-sm mt-1">
                {artciledescription?.length < 150 ? (
                  <>{artciledescription}</>
                ) : (
                  <>{artciledescription.slice(0, 150)}...</>
                )}
              </p>
              <div className="flex items-center justify-between mt-2 mx-6">
                <p className="text-blue-500 text-lg -ml-3 ">
                  <Link to={`/users-article/${_id}`}> Show More</Link>
                </p>
                <a className="flex text-gray-700">
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    className="w-6 h-6 text-blue-500"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                    />
                  </svg>
                </a>
              </div>
              <div className="author flex items-center -ml-3 my-3">
                <div className="user-logo">
                  <img
                    className="w-12 h-12 object-cover rounded-full mx-4  shadow"
                    src={userPhoto}
                    alt="avatar"
                  />
                </div>
                <h2 className="text-sm tracking-tighter text-gray-900">
                  By{" "}
                  <a className="font-semibold" href="#">
                    {userName}
                  </a>{" "}
                  <span className="text-gray-600">{timeStamp}</span>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default ArticleCard;
