import React from "react";
import useAxioSequre from "../../../Hooks/useAxiosSequre";
import { FaTrashAlt} from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const AllArticles = () => {
  const [axiosSequre] = useAxioSequre();
  const { data: articles = [], refetch } = useQuery(["articles"], async () => {
    const res = await axiosSequre.get("/news-article");
    return res.data;
  });

  // Article delete funcation
    const handleDeleteArticle = (_id) => {
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
        axiosSequre.delete(`/deletearticle/${_id}`).then((data) => {
          if (data?.data.deletedCount > 0) {
            Swal.fire("Deleted!", "Article has been deleted.", "success");
            refetch();
          }
        });
      }
    });
  };
  return (
    <div className="w-full">
      <h3 className="text-3xl font-semibold my-4">
        Total Articles: {articles.length}
      </h3>
      <div className="overflow-auto">
        <table className="table table-zebra w-full">
          {/* head */}
          <thead>
            <tr className="text-lg">
              <th>SL No</th>
              <th>Image</th>
              <th>Title</th>
              <th>Time</th>
              <th>Details</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {articles.map((article, index) => (
              <tr key={article._id}>
                <th>{index + 1}</th>
                <th>
                  <img
                    className="w-12 h-12 rounded-full"
                    src={article.image}
                    alt="article Photo"
                    draggable="false"
                  />
                </th>
                <td>{article.title}</td>
                <td>{article.timeStamp}</td>

                <td>
                  <Link to={`/details/${article._id}`}>
                    <button className="btn btn-ghost bg-blue-600  text-white">
                      Details
                    </button>
                  </Link>
                </td>
                <td>
                  <button
                    onClick={() => handleDeleteArticle(article._id)}
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

export default AllArticles;
