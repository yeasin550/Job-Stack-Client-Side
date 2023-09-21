import React from "react";
import useAxioSequre from "../../Hooks/useAxiosSequre";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";

const UserFollowing = () => {
  const { user } = useContext(AuthContext);
  const [axiosSequre] = useAxioSequre();
  const navigate = useNavigate();
  const { refetch, data: followings = [] } = useQuery(
    ["followings", user?.email],
    async () => {
      const res = await axiosSequre.get(`/followingrequest/${user?.email}`);
      return res.data;
    }
  );
  console.log(followings);
  const handleRequestDelete = (id) => {
    axiosSequre.delete(`/deleterequest/${id}`).then((data) => {
      if (data?.data?.deletedCount > 0) {
        Swal.fire({
          icon: "success",
          title: `Cancell Following request!`,
          showConfirmButton: false,
        });
        refetch();
      }
    });
  };
  return (
    <div className="py-10 dark:text-black">
      {followings ? (
        <div className="grid md:grid-cols-3 gap-4 px-5 w-full h-[100vh] overflow-auto">
          {followings?.map((person) => (
            <div
              key={person?._id}
              className="w-full h-72 bg-white shadow-2xl  rounded-lg relative"
            >
              <div className="">
                <img
                  className="h-14 w-full rounded-tl-lg rounded-tr-lg"
                  src="https://i.ibb.co/b79tz7t/Banner-3.png"
                  alt="cover photo"
                  draggable="false"
                />
                <div
                  onClick={() => navigate(`/dynamicprofile/${person?._id}`)}
                  className="flex justify-center cursor-pointer -mt-12"
                >
                  {person?.userImage ? (
                    <img
                      className="h-[100px] w-[100px] rounded-full"
                      src={person?.userImage}
                      alt="user profile photo"
                      draggable="false"
                    />
                  ) : (
                    <div className="h-[100px] w-[100px] bg-gray-200 p-4 rounded-full">
                      <FaUserAlt className="w-full h-full"></FaUserAlt>
                    </div>
                  )}
                </div>
              </div>
              <div className="text-center mt-1 pb-10">
                <h1 className="text-lg font-semibold">{person?.userName}</h1>
                <p>Mern-Stack Web Developer</p>
                <p>React.js Developer</p>
                <div
                  onClick={() => handleRequestDelete(person?._id)}
                  className="flex justify-center"
                >
                  <button className=" px-6 rounded-full outline outline-offset-2 outline-2 outline-blue-500 text-blue-500 font-semibold  absolute bottom-4">
                    Cancell Request
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center mt-10 ">
          <span className="loading loading-spinner w-14 text-success"></span>
        </div>
      )}
    </div>
  );
};

export default UserFollowing;
