import React from "react";
import { useLoaderData, useLocation } from "react-router-dom";
import UseScrollTop from "../../../Hooks/UseScrollTop";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import useAxioSequre from "../../../Hooks/useAxiosSequre";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getCurrentTimeStamp } from "../../../Hooks/useMonent";
import Comments from "./Comments";

const Details = () => {
  const { pathname } = useLocation();
  UseScrollTop(pathname);
  const { user } = useContext(AuthContext);
  const [axiosSequre] = useAxioSequre();
  const [clickedid, setClickedid] = useState(null);
  const articles = useLoaderData();

  const {
    _id,
    title,
    details,
    timeStamp,
    image,
    pointone,
    pointtwo,
    pointthree,
    pointfour,
    pointfive,
    pointsix,
    pointseven,
    pointeight,
    pointnine,
    pointten,
  } = articles;
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // comment data fucation
  const makeComment = (id) => {
    setClickedid(id);
  };
  const { data: commenttext = [], refetch } = useQuery(
    ["commenttext", clickedid],
    async () => {
      const res = await axiosSequre.get(`/articlecomments/${clickedid}`);
      return res.data;
    }
    );
    
  // Articles comment funcation
  const onSubmit = (data) => {
    const addcomment = {
      comment: data?.commenttext,
      userName: user?.displayName,
      userPhoto: user?.photoURL,
      postId: clickedid,
      timeStamp: getCurrentTimeStamp("LLL"),
    };
    console.log(addcomment);
    axiosSequre.post("/articlecomments", addcomment).then((data) => {
      if (data?.data?.insertedId) {
        refetch();
        reset();
      }
    });
  };

  return (
    <div>
      <div className="dark:text-black">
        <img
          src="https://jobbox-nextjs-v3.vercel.app/assets/imgs/page/blog/img-single.png"
          alt="detais images"
        />
        <div className=" md:-mt-60 z-50">
          <div className="md:w-9/12 mx-auto mt-20 bg-white lg:px-5 lg:pb-2 text-justify">
            <div className="grid place-items-center">
              <img className="h-80 w-auto  rounded-lg" src={image} alt="" />
            </div>
            <h1 className="text-2xl font-semibold mt-5 bg-white"> {title}</h1>
            <p className="text-lg mt-7">{articles?.pointone}</p>
            <p className="text-lg mt-7">{articles?.pointtwo}</p>
            <p className="text-lg mt-7">{articles?.pointthree}</p>
            <p className="text-lg mt-7">{articles?.pointfour}</p>
            <p className="text-lg mt-7">{articles?.pointfive}</p>
            <p className="text-lg mt-7">{articles?.pointsix}</p>
            <p className="text-lg mt-7">{articles?.pointseven}</p>
            <p className="text-lg mt-7">{articles?.pointeight}</p>
            <p className="text-lg mt-7">{articles?.pointnine}</p>
            <p className="text-lg mt-7">{articles?.pointten}</p>
            <p className="text-lg mt-7">{articles?.details}</p>
            <p className="my-5 font-semibold "> Post Time {timeStamp}</p>
          </div>
        </div>
      </div>
      {/* comment */}
      <hr />
      <div className="md:w-9/12 mx-auto my-10">
        <h1 className="text-2xl font-bold">Leave a comment</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          onClick={() => makeComment(_id)}
          className="card-body -ml-8"
        >
          <div className="-mt-3">
            <textarea
              {...register("commenttext", { required: true })}
              rows="4"
              placeholder="Write a Comment"
              className="rounded-md p-3 dark:text-black w-full bg-slate-100"
            ></textarea>
            {errors.commenttext && (
              <span className="text-red-800">Comment Text is required</span>
            )}
          </div>
          <div className=" mt-2 flex justify-end">
            <input
              className=" btn banner text-white float-right"
              type="submit"
              value="Post Comment"
            />
          </div>
        </form>
      </div>
      <div className="md:w-9/12 mx-auto mb-20">
        {commenttext.map((commentInfo) => (
          <Comments key={commentInfo._id} commentInfo={commentInfo}></Comments>
        ))}
      </div>
    </div>
  );
};

export default Details;
