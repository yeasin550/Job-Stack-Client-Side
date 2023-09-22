import React, { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import useAxioSequre from "../../../Hooks/useAxiosSequre";

import useCompleteTask from "../../../Hooks/useCompleteTask";
import { FiDelete } from "react-icons/fi";
import { useForm } from "react-hook-form";

const CompleteTask = () => {
  const { user } = useContext(AuthContext);
  const [userEroor, setUserError] = useState("");
  const [completeTask] = useCompleteTask();
  const [axiosSequre] = useAxioSequre();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    const { jobDescription, approved } = data;

    const sendJobTask = {
      name: user.displayName,
      applyEmail: user?.email,
      jobDescription,
      approved,
    };
   
    axiosSequre
      .post("/decision", sendJobTask)
      .then((response) => {
        if (response.data.insertedId) {
          console.log(data);
          reset();
          Swal.fire({
            icon: "success",
            title: "Task send successfully",
            showConfirmButton: false,
            timer: 3000,
          });
        }
      })
      .catch((error) => {
        setUserError(error.message);
      });
  };
  return (
    <div>
      <div className="grid grid-cols-1">
        <div className="py-5 px-3">
          <div className="overflow-x-auto">
            <table className="table table-zebra w-full">
              <thead>
                <tr className="uppercase  lg:text-transparent bg-clip-text  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                  {/* <th>Sl</th> */}
                  <th>User Image</th>
                  <th>Name</th>
                  <th>Applier-Email</th>
                  <th>Submit Date</th>
                  <th>Assignment</th>
                  <th>Feedback</th>
                  {/* <th>Accept</th> */}
                </tr>
              </thead>
              <tbody>
                {completeTask?.map((task, index) => (
                  <tr
                    key={task._id}
                    className="dark:bg-white dark:text-black dark:border-red-950"
                  >
                    {/* <td>{index + 1}</td> */}
                    <td>
                      <img
                        className="w-12 h-12 rounded-md"
                        src="https://img.freepik.com/free-vector/heart-logo_126523-587.jpg?w=740&t=st=1694020952~exp=1694021552~hmac=f9010928b59d497b8d6dcf2dbc0d9ec113f8859775377d674cf8e6b9a66f29c5"
                      />
                    </td>
                    <td>{task?.name}</td>
                    <td>{task?.applyEmail}</td>
                    <td>
                      {task?.postDate} <br />
                    </td>
                    <td>
                      <a
                        href={task?.docs}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <h1
                          className=" text-white hover:shadow-md px-3 py-1 rounded-md hover:border-purple-700 border 
                        bg-green-600 text-center hover:bg-blue-800  duration-300   bg-gradient-to-r from-green-700 to-blue-700   hover:from-blue-900 hover:to-purple-900 transition-all"
                        >
                          Assignment
                        </h1>
                      </a>
                    </td>
                    <td>
                      <label htmlFor="my_modal_6">
                        <h1
                          className=" text-white hover:shadow-md px-3 py-1 rounded-md hover:border-purple-700 border 
                        bg-green-600 text-center hover:bg-blue-800  duration-300   bg-gradient-to-r from-green-700 to-blue-700   hover:from-blue-900 hover:to-purple-900 transition-all"
                        >
                          Feedback
                        </h1>
                      </label>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <input type="checkbox" id="my_modal_6" className="modal-toggle" />
      <div className="modal py-0">
        <div className="absolute modal-box">
          <div className="relative -top-12 left-6 modal-action">
            <label
              htmlFor="my_modal_6"
              className="btn text-white absolute top-3 right-3 btn-outline btn-circle bg-blue-600 rounded-full hover:bg-blue-700"
            >
              <FiDelete className="text-3xl" />
            </label>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full border-bg-white rounded-lg text-black"
          >
            <div className="relative w-full">
              <h1 className="font-semibold text-purple-800 text-2xl text-center mb-2">
                Task Feedback
              </h1>
              {/* Decision */}
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-semibold">Decision</span>
                </label>
                <select
                  {...register("approved", { required: true })}
                  required
                  placeholder="Put your decision"
                  className="select input input-bordered w-full border border-green-500"
                >
                  <option>Join Now</option>
                  <option>Rejection</option>
                </select>
                {errors.approved && (
                  <span className="text-red-600">approved is required</span>
                )}
              </div>
              <div className="relative w-full mt-3">
                <h1 className="font-semibold">Job-Feedback</h1>
                <textarea
                  {...register("jobDescription", {
                    required: true,
                  })}
                  rows="6"
                  placeholder="jobDescription"
                  className="rounded-md px-3 dark:text-black w-full border border-blue-500"
                ></textarea>
                {errors.jobDescription && (
                  <span className="text-red-800">
                    jobDescription is required
                  </span>
                )}
              </div>
              <button className="bg-blue-600 mt-4 text-center text-white py-2 px-6 rounded-md hover:bg-blue-800  duration-300 w-full  bg-gradient-to-r from-blue-500 to-blue-700  font-semibold   hover:from-blue-700 hover:to-purple-900 transition-all">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CompleteTask;
