import React from "react";

import { AiFillCaretDown } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { BsFillTrashFill } from "react-icons/bs";
import Swal from "sweetalert2";
import useAxioSequre from "../../../../Hooks/useAxiosSequre";
import { useNavigate } from "react-router-dom";

const ConnectSingleUser = ({ data, refetch }) => {
  const { name, image, _id } = data;
  const [axiosSequre] = useAxioSequre();
  const navigate = useNavigate();

  // delete user
  const handleRequestDelete = (id) => {
    axiosSequre.delete(`/deleterequest/${id}`).then((data) => {
      if (data?.data?.deletedCount > 0) {
        Swal.fire({
          icon: "success",
          title: `Deleted <b>${name}</b>`,
          showConfirmButton: false,
          timer: 1500,
        });
        refetch();
      }
    });
  };

  return (
    <div>
      <div className="flex justify-between mt-2">
        <div className="flex">
          <div>
            <img
              className="h-20 w-20 rounded-full hover:cursor-pointer"
              src={image}
              alt=""
            />
          </div>
          <div className="ml-2">
            <h1 className="font-semibold text-[18px] hover:underline">
              {name}
            </h1>
            <h5 className="text-[15px] line-clamp-2 text-slate-600 leading-4 ">
              Front End Developer at Dubai Municipality
            </h5>
            <h1 className="text-[13px] text-slate-600">
              Connected 2 weeks ago
            </h1>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <button
            onClick={() => navigate("/massageroute")}
            className="font-semibold text-green-600 border-2 px-4 py-1.5 hover:cursor-pointer hover:border-[3px] border-green-600  hover:bg-green-100 rounded-3xl"
          >
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
              <button
                onClick={() => handleRequestDelete(_id)}
                className="text-base flex items-center"
              >
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
