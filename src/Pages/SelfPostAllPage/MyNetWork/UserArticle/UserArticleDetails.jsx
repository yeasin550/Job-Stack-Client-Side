import React from "react";
import { useLoaderData, useLocation } from "react-router-dom";
import UseScrollTop from "../../../../Hooks/UseScrollTop";

const UserArticleDetails = () => {
  const { pathname } = useLocation();
  UseScrollTop(pathname);
  const articles = useLoaderData();
  const {
    articletitle,
    userPhoto,
    image,
    userName,
    artciledescription,
    timeStamp,
  } = articles;
  return (
    <div>
      <img
        src="https://jobbox-nextjs-v3.vercel.app/assets/imgs/page/blog/img-single.png"
        alt="detais images"
      />
      <div className="md:-mt-44 z-50">
        <div className="md:w-9/12 mx-auto mt-20 bg-white text-justify">
          <div className="grid place-items-center">
            <img className="h-80 w-auto  rounded-lg" src={image} alt="" />
          </div>
          <div className="">
            <h1 className="text-2xl mt-8"> {articletitle}</h1>
            <p className="mt-5">{artciledescription}</p>
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
  );
};

export default UserArticleDetails;
