import React from "react";
import { useLocation } from "react-router-dom";
import UseScrollTop from "../../../../Hooks/UseScrollTop";
import useAxioSequre from "../../../../Hooks/useAxiosSequre";
import { useQuery } from "@tanstack/react-query";
import { FaTrashAlt } from "react-icons/fa";
import images from "../../../../assets/images/images.jpg";

const UserReport = () => {
  const { pathname } = useLocation();
  UseScrollTop(pathname);

  const [axiosSequre] = useAxioSequre();
  const { data: UserReport = [], refetch } = useQuery(
    ["post-report"],
    async () => {
      const res = await axiosSequre.get("/user-report");
      return res.data;
    }
  );
  return (
    <div>
      <div className="overflow-auto">
        <table className="table table-zebra w-full">
          {/* head */}
          <thead>
            <tr className="text-lg">
              <th>SL No</th>
              <th>Image</th>
              <th>User name</th>
              <th>Report Name</th>
              <th>User id</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {UserReport.map((user, index) => (
              <tr key={user?._id}>
                <th>{index + 1}</th>
                <th>
                  <img
                    className="w-12 h-12 rounded-full"
                    src={user && user.userPhoto ? user.userPhoto : images}
                    alt="User Photo"
                    draggable="false"
                  />
                </th>
                <td>{user?.userName}</td>
                <td>
                  <div className="">
                    <p>{user?.selectedReasons[0]}</p>
                    <p> {user?.selectedReasons[1]}</p>
                    <p> {user?.selectedReasons[2]}</p>
                  </div>
                </td>
                <td>{user?.id}</td>
                <td>
                  <button className="btn btn-ghost bg-red-600  text-white">
                    <FaTrashAlt />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserReport;
