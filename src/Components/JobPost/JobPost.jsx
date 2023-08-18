import { useContext } from "react";
import {
  FaCommentAlt,
  FaHandPointDown,
  FaHandPointUp,
  FaShare,
} from "react-icons/fa";
import { AuthContext } from "../../Providers/AuthProvider";
const JobPost = ({posts}) => {
  const { user } = useContext(AuthContext);

  console.log(posts);

  // const handleJobPost = () => {
  //   console.log('job apply successfull')

  //    const Toast = Swal.mixin({
  //                toast: true,
  //                position: "top-end",
  //                showConfirmButton: false,
  //                timer: 3000,
  //                timerProgressBar: true,
  //                didOpen: (toast) => {
  //                  toast.addEventListener("mouseenter", Swal.stopTimer);
  //                  toast.addEventListener("mouseleave", Swal.resumeTimer);
  //                },
  //              });
  //              Toast.fire({
  //                icon: "success",
  //                title: "Job post successfully!",
  //              });
  // }
  return (
    <div className="my-12 md:mx-8 ">
      <h1 className="text-center font-semibold text-4xl text-green-500">
        Different Type of Jobs!
      </h1>
      <div className="grid grid-cols-1">
        <div className=" bg-white shadow-md rounded-md mt-10 p-6 border border-gray-300">
          <div className="flex justify-between items-center mb-5">
            <div className="flex items-center gap-3">
              <img
                className="h-16 w-16 rounded-full"
                src={user?.photoURL}
                alt=""
              />
              <div>
                <h1 className="font-semibold ">{posts?.position}</h1>
                <h1>5 Days Left</h1>
              </div>
            </div>
            <div className="flex items-center">
              <img
                src={posts?.image}
                alt="Company Logo"
                className="w-16 h-16 rounded-md mr-4 border border-gray-400"
              />
              <div>
                <h2 className="text-2xl font-semibold text-gray-800">
                  Job Title
                </h2>
                <p className="text-gray-600">Programming Hero</p>
              </div>
            </div>
          </div>
          <hr />

          {/* workplace, Location, Job Category */}
          <div className="md:flex justify-between gap-3 mt-12 my-5 font-semibold">
            <div className="md:flex items-center gap-3">
              <div className="mb-4 space-y-2">
                <p className=" bg-gray-200 border py-1 px-2 rounded-md">
                  {posts?.workplace}
                </p>
              </div>

              <div className="mb-4">
                <p className="bg-gray-200 border py-1 px-2 rounded-md">
                  {posts?.location}
                </p>
              </div>
              <div className="mb-4">
                <p className="bg-orange-100 border py-1 px-2 rounded-md">
                  {posts?.jobCategory}
                </p>
              </div>
            </div>
            <div>
              <h2 className="font-bold bg-gray-100 py-2 px-1 rounded-md">
                ${posts?.salary}/per year
              </h2>
            </div>
          </div>
          <div>
            <h3 className="text-lg flex items-center gap-3 font-semibold text-gray-800">
              Job Descriptions <FaHandPointDown />
            </h3>
            <p className="text-gray-600">{posts?.jobDescription}</p>
          </div>

          {/* <JobApplyForm /> */}

          <div className="flex bottom-0 justify-around text-lg bg-gray-50 py-3 rounded-md">
            <div className="flex items-center gap-2 cursor-pointer">
              <FaHandPointUp /> Like
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
    </div>
  );
};

export default JobPost;
