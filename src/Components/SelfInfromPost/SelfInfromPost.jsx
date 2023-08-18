import React, { useContext, useEffect, useState } from "react";
import PostInfo from "./PostInfo";
import useAxioSequre from "../../Hooks/useAxioSequre";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const SelfInfromPost = () => {
  const [post, SetPost] = useState([]);
  const [axiosSequre] = useAxioSequre();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch(`https://jobstack-backend-teal.vercel.app/selfpost/${user?.email}`)
      .then((res) => res.json())
      .then((data) => SetPost(data));
  }, [user]);

  const handleDelete = (_id) => {
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
        // Swal.fire("Deleted!", "Your file has been deleted.", "success");
        fetch(`https://jobstack-backend-teal.vercel.app/selfpost/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              const filtering = selfpost.filter((datas) => datas._id !== _id);
              selfpost(filtering);
            }
          });
      }
    });
  };

  return (
    <div>
      <div className="grid md:grid-cols-2 gap-5 justify-center">
        {post.map((posts) => (
          <PostInfo
            key={posts._id}
            posts={posts}
            createdAt={posts.createdAt}
            handleDelete={handleDelete}
          ></PostInfo>
        ))}
      </div>
    </div>
  );
};

export default SelfInfromPost;
