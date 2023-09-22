import React from "react";
import { useLocation } from "react-router-dom";
import UseScrollTop from "../../../../Hooks/UseScrollTop";
import useAxioSequre from "../../../../Hooks/useAxiosSequre";
import { useQuery } from "@tanstack/react-query";
import { FaTrashAlt } from "react-icons/fa";
import images from "../../../../assets/images/images.jpg";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const Reviews = () => {
  const { pathname } = useLocation();
  UseScrollTop(pathname);

  const [axiosSequre] = useAxioSequre();
  const { data: review = [], refetch } = useQuery(["review"], async () => {
    const res = await axiosSequre.get("/review");
    return res.data;
  });

  // review aprove funcation
  const handleAproved = (post) => {
    fetch(`https://jobstack-backend-teal.vercel.app/review/${post}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          toast.success("Successfully toasted!");
        }
      });
  };

  // Review delete funcation
  const handleDeleteReview = (_id) => {
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
        axiosSequre.delete(`/review/${_id}`).then((data) => {
          if (data?.data.deletedCount > 0) {
            Swal.fire("Deleted!", "User has been deleted.", "success");
            refetch();
          }
        });
      }
    });
  };

  return (
    <div>
      <div className="overflow-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr className="text-lg">
              <th>SL No</th>
              <th>Image</th>
              <th>User name</th>
              <th>Review Text</th>
              <th>Action</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {review?.map((post, index) => (
              <tr key={post?._id}>
                <th>{index + 1}</th>
                <th>
                  <img
                    className="w-12 h-12 rounded-full"
                    src={post && post.userPhoto ? post.userPhoto : images}
                    alt="User Photo"
                    draggable="false"
                  />
                </th>
                <td>{post?.userName}</td>
                <td>
                  <div className="">
                    <p>{post?.reviewtext}</p>
                  </div>
                </td>
                <td>
                  {post?.status === "aproved" ? (
                    "aproved"
                  ) : (
                    <button
                      onClick={() => handleAproved(post?._id)}
                      className="btn btn-ghost bg-[#09867E]  text-white"
                    >
                      Approve
                    </button>
                  )}
                </td>
                <td>
                  <button
                    onClick={() => handleDeleteReview(post?._id)}
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

export default Reviews;
