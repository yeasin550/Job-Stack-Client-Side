import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import { useForm } from 'react-hook-form';
import useAxioSequre from '../../../Hooks/useAxiosSequre';
import { useQuery } from '@tanstack/react-query';

const ReviewFrom = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
    const { user } = useContext(AuthContext);
    const [axiosSequre] = useAxioSequre();

 const onSubmit = (data) => {
   const review = {
     reviewtext: data?.message,
     userName: user?.displayName,
     userPhoto: user?.photoURL,
     userEamil: user?.email,
   };
   console.log(review);
   axiosSequre.post("/review", review).then((data) => {
     if (data?.data?.insertedId) {
       reset();
     }
   });
 };
    
  return (
    <div className="max-w-7xl px-5 mx-auto md:w-1/2 md:mx-auto">
      <h1 className="text-center font-bold text-3xl mb-5 pt-10">Review Form</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="card-body bg-slate-200  rounded-lg mb-20"
      >
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              {...register("name", { required: true })}
              placeholder="Your Name"
              className="input input-bordered w-full"
              defaultValue={user?.displayName}
            />
            {errors.name && (
              <span className="text-red-800">Name is required</span>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              {...register("eamil", { required: true })}
              placeholder="Your Email"
              className="input input-bordered w-full"
              defaultValue={user?.email}
            />
            {errors.name && (
              <span className="text-red-800">Email is required</span>
            )}
          </div>
        </div>
        <div className="">
          <label className="label">
            <span className="label-text">Message</span>
          </label>
          <textarea
            {...register("message", { required: true })}
            rows="3"
            placeholder="Message"
            className="rounded-md px-3 w-full "
          ></textarea>
          {errors.message && (
            <span className="text-red-800">Message is required</span>
          )}
        </div>
        <div className="form-control mt-6">
          <input className="btn btn-primary" type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
};

export default ReviewFrom;