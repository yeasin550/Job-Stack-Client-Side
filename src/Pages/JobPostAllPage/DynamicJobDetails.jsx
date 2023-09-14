import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import useAxioSequre from "../../Hooks/useAxiosSequre";
import JobPostDesign from "../Components/JobPostDesign/JobPostDesign";

const DynamicJobDetails = () => {
  const { id } = useParams();
  const [axiosSequre] = useAxioSequre();

  const { data: alljobs = [], refetch } = useQuery(["alljobs"], async () => {
    const res = await axiosSequre.get(`/job/${id}`);
    return res.data;
  });

  return (
    <div className="m-10">
      {alljobs?.map((posts) => (
        <JobPostDesign key={posts?._id} posts={posts} />
      ))}
    </div>
  );
};

export default DynamicJobDetails;
