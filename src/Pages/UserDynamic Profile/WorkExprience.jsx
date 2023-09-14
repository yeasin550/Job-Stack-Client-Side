import React from "react";
import { useParams } from "react-router-dom";
import useAxioSequre from "../../Hooks/useAxiosSequre";
import { useQuery } from "@tanstack/react-query";
import { FaPlus, FaShoppingBag } from "react-icons/fa";

const WorkExprience = () => {
  const { id } = useParams();
  console.log(id);
  const [axiosSequre] = useAxioSequre();

  const { data: dynamicuser = [] } = useQuery(["dynamicuser", id], async () => {
    const res = await axiosSequre.get(`/dynamicuser/${id}`);
    return res.data;
  });
  console.log(dynamicuser);

  const { data: work = [] } = useQuery(
    ["work", dynamicuser?.email],
    async () => {
      const res = await axiosSequre.get(`/works/${dynamicuser?.email}`);
      return res.data;
    }
  );
  console.log(work);

  return (
    <div className="px-10 py-10">
      <div className="flex flex-col shadowdiv border p-4 rounded-md">
        <div className="my-2">
          {work?.map((experience) => (
            <div
              key={experience?._id}
              className="flex justify-between items-center mt-4"
            >
              <div className="flex gap-5">
                <FaShoppingBag className="text-2xl"></FaShoppingBag>
                <div>
                  <h1>
                    {experience?.position} at{" "}
                    <span className="font-bold font-sans">
                      {experience?.company}
                    </span>
                  </h1>
                  <p>
                    {experience?.startyear}-<span>{experience?.endYear}-</span>
                    <span>{experience?.workstatus} </span>
                    <span>{experience?.location}</span>
                  </p>
                  <p>{experience.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkExprience;
