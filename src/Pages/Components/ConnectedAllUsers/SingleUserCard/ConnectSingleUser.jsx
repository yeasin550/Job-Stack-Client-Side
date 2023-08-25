import React from "react";

import { AiFillCaretDown } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { BsFillTrashFill } from "react-icons/bs";

const ConnectSingleUser = () => {
  return (
    <div>
      <div className="flex justify-between mt-2">
        <div className="flex">
          <div>
            <img
              className="h-20 w-20 rounded-full hover:cursor-pointer"
              src="https://img.freepik.com/free-photo/close-up-portrait-handsome-confident-young-man-white-t-shirt-looking-away-blurry-outdoor-nature_176420-6306.jpg?size=626&ext=jpg&ga=GA1.2.258135247.1692691034&semt=ais"
              alt=""
            />
          </div>
          <div className="ml-2">
            <h1 className="font-semibold text-[18px] hover:underline">
              Monirul Islam (Monir)
            </h1>
            <h5 className="text-[15px] line-clamp-2 text-slate-600 leading-4 ">
              Front End Developer at Dubai Municipality | Interactive Developer
              | #WebGL ,#React js,#Vue js | khaledoghli.com{" "}
            </h5>
            <h1 className="text-[13px] text-slate-600">Connected 2 weeks ago</h1>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <button className="font-semibold text-green-600 border-2 px-4 py-1.5 hover:cursor-pointer hover:border-[3px] border-green-600  hover:bg-green-100 rounded-3xl">
            Massage
          </button>

          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="">
              <BiDotsHorizontalRounded className="ml-3  text-3xl hover:bg-slate-200 rounded-full hover:cursor-pointer" />
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <button className="text-base flex items-center">
                <BsFillTrashFill className="text-xl mr-2" />
                Remove Connection
              </button>
            </ul>
          </div>
        </div>
      </div>
      <hr className="mt-2 ml-20" />
    </div>
  );
};

export default ConnectSingleUser;
