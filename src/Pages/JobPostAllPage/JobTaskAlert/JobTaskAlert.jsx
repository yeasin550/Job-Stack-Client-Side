import moment from 'moment';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../Providers/AuthProvider';
import useAxioSequre from '../../../Hooks/useAxiosSequre';
import { useState } from 'react';
import Swal from 'sweetalert2';
import { useQuery } from '@tanstack/react-query';
import useCompleteTask from '../../../Hooks/useCompleteTask';

const JobTaskAlert = () => {
  const [userError, setUserError] = useState('');
  const [completeTask] = useCompleteTask();
  const { user } = useContext(AuthContext)
  const [axiosSequre] = useAxioSequre();
      const { data: jobTaskAlert = [], refetch } = useQuery(["jobTaskAlert", user?.email],
        async () => {
          const res = await axiosSequre.get(`jobtask/${user?.email}`);
          return res.data;
        }
      );
  // console.log(jobTaskAlert);
  console.log(completeTask);
    // const { data: completeTask = [], refetch } = useQuery(
    //   ["completeTask", user?.email],
    //   async () => {
    //     const res = await axiosSequre.get(`assignment/${user?.email}`);
    //     return res.data;
    //   }
    // );
    // console.log(completeTask);
      const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
 const onSubmit = (data) => {
   // console.log(data);
   const { docs } = data;
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

     docs,
   };
   console.log(sendJobTask);
   axiosSequre
     .post("/assignment", sendJobTask)
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
      <div className="my-5 mx-3">
        {jobTaskAlert.map((jobTasks) => (
          <div
            className="border border-purple-700 mb-5 rounded-md"
            key={jobTasks._id}
            jobTask={jobTasks}
          >
            <div className=" bg-gray-200 px-3  py-4 rounded shadow p-4 my-5 mx-3  space-y-3">
              <p className="text-gray-600 text-sm w-full lg:w-9/12">
                {jobTasks?.jobTask}
              </p>
              <p className="lg:flex items-center gap-3">
                <span className="font-semibold">Assignment Task :</span>{" "}
                <a
                  href={jobTasks?.docs}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p className="bg-gray-300 text-red-700 hover:bg-white  hover:shadow-md px-3 py-1 rounded-md font-bold hover:border-purple-700 border">
                    {jobTasks?.docs}
                  </p>
                </a>
              </p>
              <p className="text-sm">
                <span className="font-semibold">Submission deadline : </span>{" "}
                {jobTasks?.date}
              </p>
              <p>Thanks</p>
              <p>{jobTasks?.name}</p>
              <p className="text-end mt-2">
                <span className="font-semibold">Assignment Send date : </span>{" "}
                {jobTasks?.postDate}
              </p>
            </div>
            <div className="flex justify-end pr-5">
              {completeTask.slice(0, 1).map((complete) => (
                <a
                  href={complete?.docs}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-end bg-gray-300  text-red-600 hover:bg-white hover:shadow-md px-3 py-1 lg:ml-0 ml-3 rounded-md font-bold hover:border-purple-700 border"
                >
                  {complete?.docs}
                </a>
              ))}
            </div>
            <div className="mx-5 mb-5">
              <form onSubmit={handleSubmit(onSubmit)} className="lg:flex gap-5">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text font-semibold"></span>
                  </label>
                  <input
                    type="text"
                    {...register("docs", { required: true })}
                    placeholder="Assignment Live Link"
                    className="input input-bordered"
                  />
                  {errors.docs && (
                    <span className="text-red-600">Docs is required</span>
                  )}
                </div>
                <button className="bg-green-600 mt-4 text-center text-white py-3 lg:py-0 px-3 rounded-md hover:bg-blue-800  duration-300 text-sm w-full lg:w-3/12 bg-gradient-to-r from-green-500 to-blue-700  font-semibold   hover:from-blue-700 hover:to-purple-900 transition-all">
                  Submit Assignment
                </button>
              </form>
            </div>
          </div>
        ))}
      </div>
    );
};

export default JobTaskAlert;