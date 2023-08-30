
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import useAxioSequre from "../../../Hooks/useAxiosSequre";
import { useQuery } from "@tanstack/react-query";
import AppliedJobsDetails from "./AppliedJobsDetails";

const AppliedJobs = () => {
  const {user} = useContext(AuthContext)
  const [axiosSequre] = useAxioSequre();

const { data: appliedJobs = [], refetch } = useQuery(["appliedJobs", user?.email],
  async () => {
    const res = await axiosSequre.get(`jobsapply/${user?.email}`);
    return res.data;
  }
);
  console.log(appliedJobs);
  
  return (
    <div className="px-5">
      <div className="grid lg:grid-cols-1 gap-3">
        {appliedJobs.map((applied) => (
          <AppliedJobsDetails
            key={applied._id}
            applied={applied}
          ></AppliedJobsDetails>
        ))}
      </div>
      {/* <div className="relative border-[1px]  py-5 my-5  px-5 border-green-500 shadow-sm shadow-green-500">
        <div className="flex justify-between">
          <div className="flex-col items-center gap-3">
            <div className="flex items-center gap-3">
              <img
                className="h-20 w-20 rounded-full"
                src="https://img.freepik.com/free-vector/heart-logo_126523-587.jpg?w=740&t=st=1693226217~exp=1693226817~hmac=7bfa4747aaa6d910ec6c4c71bbf6b23c2933a343716962635bba8751ad47be76"
                alt="img"
              />
              <div>
                <h1 className="font-semibold">React Developer</h1>
                <h1 className="font-bold text-gray-600">5 days ago</h1>
              </div>
            </div>
            <Link to="/massageroute">
              <button className="bg-green-500 px-2 py-1 my-1 rounded-md text-white w-[210px] mt-3">
                Contact
              </button>
            </Link>
          </div>
          <div className="">
            <div className="flex items-center gap-2">
              <img
                className="h-10 w-10 rounded-full"
                src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=740&t=st=1693304549~exp=1693305149~hmac=1cb92ed3b7f54c71cb6e129d15ac162b06e5b960efd1b46fe0eb9594503062ad"
                alt=""
              />
              <h1 className="font-bold text-lg ">Personal Info</h1>
            </div>
            <div className="mb-2">
              <h1 className="font-semibold">Name : </h1>
              <p> Yeasin Arafat</p>
            </div>
            <div className="my-2">
              <h1 className="font-semibold">Email : </h1>
              <p> your@gmail.com</p>
            </div>
            <div className="my-2">
              <h1 className="font-semibold">Phone : </h1>
              <p> +3412342143</p>
            </div>
          </div>

        </div>
        <hr />
        <div className="mt-5">
          <h1 className="font-bold">Why should you hire?</h1>
          <p>
            I should be hired for this role because of my relevant skills,
            experience, and passion for the industry. I've researched the
            company and can add value to its growth. My positive attitude, work
            ethics, and long-term goals align with the job requirements, making
            me a committed and valuable asset to the company.”
          </p>
        </div>
      </div> */}
    </div>
  );
};

export default AppliedJobs;
