import { FiDelete } from "react-icons/fi";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import useAxioSequre from "../../../Hooks/useAxiosSequre";
import { useQuery } from "@tanstack/react-query";

const AppliedJobs = () => {
  const { user } = useContext(AuthContext);
  const [axiosSequre] = useAxioSequre();

  const { data: appliedJobs = [], refetch } = useQuery(
    ["appliedJobs", user?.email],
    async () => {
      const res = await axiosSequre.get(`jobsapply/${user?.email}`);
      return res.data;
    }
  );
  console.log(appliedJobs);

  return (
    <div className="px-5">
      <div className="grid lg:grid-cols-1 gap-3">
        <div className="py-5 px-5">
          <div className="overflow-x-auto">
            <table className="table table-zebra w-full">
              <thead>
                <tr className="uppercase  lg:text-transparent bg-clip-text  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                  <th>Sl</th>
                  <th>image</th>
                  <th>User Name</th>
                  <th className="text-center">User Email</th>
                  <th>User Number</th>
                  <th className="text-center">Resume</th>
                  <th className="text-center">Task</th>
                </tr>
              </thead>
              <tbody>
                {appliedJobs?.map((appliedJob, index) => (
                  <tr
                    key={appliedJob._id}
                    className="dark:bg-white dark:text-black dark:border-red-950"
                  >
                    <td>{index + 1}</td>
                    <td>
                      <img
                        className="w-12 h-12 rounded-md"
                        src={appliedJob?.userPhoto}
                        alt="class"
                      />
                    </td>
                    <td>{appliedJob?.name}</td>
                    <td>{appliedJob?.applyEmail}</td>
                    <td>+{appliedJob?.number}</td>
                    <td>
                      <label htmlFor="my_modal_6">
                        <h1
                          className=" text-white hover:shadow-md px-3 py-1 rounded-md hover:border-purple-700 border 
                        bg-green-600 text-center hover:bg-blue-800  duration-300   bg-gradient-to-r from-green-700 to-blue-700   hover:from-blue-900 hover:to-purple-900 transition-all"
                        >
                          View Resume
                        </h1>
                      </label>
                    </td>
                    <td>
                      <Link to="/jobTaskForm">
                        <h1
                          className=" text-white hover:shadow-md px-3 py-1 rounded-md hover:border-purple-700 border 
                        bg-green-600 text-center hover:bg-blue-800  duration-300   bg-gradient-to-r from-green-700 to-blue-700   hover:from-blue-900 hover:to-purple-900 transition-all"
                        >
                          Send
                        </h1>
                      </Link>
                    </td>
                    <input
                      type="checkbox"
                      id="my_modal_6"
                      className="modal-toggle"
                    />
                    <div className="modal py-0">
                      <div className="absolute modal-box">
                        <div className="relative -top-12 left-6 modal-action">
                          <label
                            htmlFor="my_modal_6"
                            className="btn text-white absolute top-3 right-3 btn-outline btn-circle bg-green-600 rounded-full hover:bg-green-700"
                          >
                            <FiDelete className="text-3xl" />
                          </label>
                        </div>
                        <form className="w-full border-bg-white rounded-lg text-black">
                          <div className="relative w-full">
                            <h1 className="font-semibold text-2xl text-center mb-2">
                              Resume
                            </h1>
                            <img
                              className="w-full"
                              src={appliedJob?.resumeImage}
                              alt=""
                            />
                          </div>
                        </form>
                      </div>
                    </div>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppliedJobs;
