import React from "react";
import { FaTrashAlt, FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxioSequre from "../../../../Hooks/useAxiosSequre";
import { useQuery } from "@tanstack/react-query";
import images from "../../../../assets/images/images.jpg";
import { useLocation } from "react-router-dom";
import UseScrollTop from "../../../../Hooks/UseScrollTop";

const AllUser = () => {
  const { pathname } = useLocation();
  UseScrollTop(pathname);

  const [axiosSequre] = useAxioSequre();
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await axiosSequre.get("/users");
    return res.data;
  });

  // user to admin funcation
  const handleMakeAdmin = (user) => {
    fetch(`https://jobstack-backend-teal.vercel.app/users/admin/${user?._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} is an Admin Now!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  // user delete funcation
  const handleDeleteUser = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSequre.delete(`/deleteuser/${_id}`).then((data) => {
          if (data?.data.deletedCount > 0) {
            Swal.fire("Deleted!", "User has been deleted.", "success");
            refetch();
          }
        });
      }
    });
  };

  return (
    <div className="w-full">
      <h3 className="text-3xl font-semibold my-4">
        {/* Total Users: {users.length} */}
      </h3>
      <div className="overflow-auto">
        <table className="table table-zebra w-full">
          {/* head */}
          <thead>
            <tr className="text-lg">
              <th>SL No</th>
              <th>Image</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user?._id}>
                <th>{index + 1}</th>
                <th>
                  <img
                    className="w-12 h-12 rounded-full"
                    src={user && user.image ? user.image : images}
                    alt="User Photo"
                    draggable="false"
                  />
                </th>
                <td>{user?.name}</td>
                <td>{user?.email}</td>
                <td>
                  {user?.role === "admin" ? (
                    "admin"
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(user)}
                      className="btn btn-ghost bg-blue-600  text-white"
                    >
                      <FaUserShield />
                    </button>
                  )}
                </td>

                <td>
                  <button
                    onClick={() => handleDeleteUser(user?._id)}
                    className="btn btn-ghost bg-red-600  text-white"
                  >
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

export default AllUser;
