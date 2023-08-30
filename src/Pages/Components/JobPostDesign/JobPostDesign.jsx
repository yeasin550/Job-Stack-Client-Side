import {
  FaCommentAlt,
  FaHandPointDown,
  FaShare,
} from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import JobApplyForm from "../../JobPostAllPage/JobApplyForm/JobApplyForm";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import moment from "moment/moment";
import { Link, useNavigate } from "react-router-dom";
// import { useContext } from "react";
// import { AuthContext } from "../../Providers/AuthProvider";

const JobPostDesign = ({ posts }) => {
  const navigate = useNavigate();

  const { user } = useContext(AuthContext);

  return (
    <div className="grid grid-cols-1">
      <div className=" bg-white shadow-md rounded-md mt-5 p-6 border border-gray-300">
        <div className="flex justify-between items-center mb-5">
          <div className="flex items-center gap-3">
            <img
              className="h-16 w-16 rounded-full"
              src={user?.photoURL}
              alt="img"
            />
            <div>
              <h1 className="font-semibold">{posts?.position}</h1>
              <h1 className="font-bold text-gray-600">
                {moment().format("MMMM Do YYYY")}
              </h1>
            </div>
          </div>
          <div className="flex items-center">
            <img
              src={posts?.image}
              alt="Company Logo"
              className="w-16 h-16 rounded-md mr-4 border border-gray-400"
            />
            <div>
              <h2 className=" font-semibold text-gray-800">
                {posts?.jobTitle}
              </h2>
              <p className="text-gray-600 ">{posts?.companyName}</p>
            </div>
          </div>
        </div>
        <hr />

        {/* workplace, Location, Job Category div*/}

        <div>
          <h3 className=" flex items-center gap-3 mt-5 font-semibold text-gray-800">
            Job Descriptions <FaHandPointDown />
          </h3>
          <p className="text-gray-600">{posts?.jobDescription}</p>
        </div>
        <div className="md:flex justify-between gap-3 mt-8">
          <div className="md:flex items-center gap-8">
            <div className="mb-4 px-2 py-1 rounded-md">
              <h1 className="font-semibold">Workplace</h1>
              <p>{posts?.workplace}</p>
            </div>

            <div className="mb-4 px-2 py-1 rounded-md">
              <h1 className="font-semibold">Locations</h1>
              <p>{posts?.location}</p>
            </div>
            <div className="mb-4 px-2 py-1 rounded-md">
              <h1 className="font-semibold">Job-Category</h1>
              <p>{posts?.jobCategory}</p>
            </div>
            <div className="mb-4 px-2 py-1 rounded-md">
              <h2 className="font-semibold">Salary</h2>
              <p> ${posts?.salary}/per year</p>
            </div>
          </div>
        </div>

        {/* <JobApplyForm posts={posts}></JobApplyForm> */}

        <button
          onClick={() => navigate(`/jobApplyForm/${posts?._id}`)}
          className="bg-green-500 text-center mt-5 text-white py-2 px-6 rounded-md hover:bg-green-600 transition duration-300 w-full"
        >
          Apply Now
        </button>

        <div className="flex bottom-0 justify-around  bg-gray-50 py-3 rounded-md">
          <div className="flex items-center gap-2 cursor-pointer">
            <FcLike /> Like
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <FaCommentAlt /> Comment
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <FaShare /> Share
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobPostDesign;
