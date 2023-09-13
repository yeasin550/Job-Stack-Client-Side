import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../Providers/AuthProvider";
import useAxioSequre from "../../../Hooks/useAxiosSequre";
import Swal from "sweetalert2";

const JobTaskForm = () => {
  const { user } = useContext(AuthContext)
  const [userEroor, setUserError] = useState("");
  const [axiosSequre] = useAxioSequre()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // console.log(data);
    const { jobTask, date, docs } = data;
    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();
    const formattedDay = day < 10 ? `0${day}` : day.toString();
    const formattedMonth = month < 10 ? `0${month}` : month.toString();
    const formattedDate = `${year}-${formattedMonth}-${formattedDay}`;
    const sendJobTask = {
      name: user.displayName,
      applyEmail: user.email,
      // postId: id,
      postDate: formattedDate,
      jobTask,
      date,
      docs,
    };
    console.log(sendJobTask);
    axiosSequre
      .post("/jobtask", sendJobTask)
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
    <div className="w-2/3 mx-auto my-12 border border-green-300 shadow-lg shadow-green-50 px-5 py-5 rounded-md">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full lg:px-2 px-4 border-bg-white rounded-lg text-black"
      >
        {/* why should you hire? */}
        <div className="relative w-full">
          <h1 className="my-2 font-semibold">Job Task Description?</h1>
          <textarea
            {...register("jobTask", {
              required: "Job description is required",
            })}
            className={`pl-3 pt-3 border ${
              errors.jobTask ? "border-red-500" : "border-green-500"
            } resize-none w-full sm:w-1/2 md:w-2/3 lg:w-full`}
            cols="54"
            rows="3"
            placeholder="Type job description"
          ></textarea>
          {errors.jobTask && (
            <p className="text-red-500">{errors.jobTask.message}</p>
          )}
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text font-semibold">Assignment Docs</span>
          </label>
          <input
            type="text"
            {...register("docs", { required: true })}
            placeholder="Input Assignment Docs"
            className="input input-bordered"
          />
          {errors.docs && (
            <span className="text-red-600">Docs is required</span>
          )}
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text font-semibold">Submit Last Date</span>
          </label>
          <input
            type="date"
            {...register("date", { required: true })}
            placeholder="type here"
            className="input input-bordered"
          />
          {errors.date && (
            <span className="text-red-600">Date is required</span>
          )}
        </div>

        <button className="bg-blue-600 mt-4 text-center text-white py-2 px-6 rounded-md hover:bg-blue-800  duration-300 w-full  bg-gradient-to-r from-blue-500 to-blue-700  font-semibold   hover:from-blue-700 hover:to-purple-900 transition-all">
          Send Task
        </button>
      </form>
    </div>
  );
};

export default JobTaskForm;
