import React from 'react';
import { useLocation } from 'react-router-dom';
import UseScrollTop from '../../../../Hooks/UseScrollTop';
import useAxioSequre from '../../../../Hooks/useAxiosSequre';
import { useQuery } from '@tanstack/react-query';
import { FaTrashAlt } from 'react-icons/fa';
import images from "../../../../assets/images/images.jpg";

const PostReport = () => {
     const { pathname } = useLocation();
     UseScrollTop(pathname);

     const [axiosSequre] = useAxioSequre();
     const { data: postreport = [], refetch } = useQuery(["post-report"], async () => {
       const res = await axiosSequre.get("/post-report");
       return res.data;
     });
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
                <th>Post id</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {postreport.map((post, index) => (
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
                      <p>{post?.selectedReasons[0]}</p>
                      <p> {post?.selectedReasons[1]}</p>
                      <p> {post?.selectedReasons[2]}</p>
                    </div>
                  </td>
                  <td>{post?.postId}</td>
                  <td>
                    <button
                      //   onClick={() => handleDeleteUser(user?._id)}
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

export default PostReport;