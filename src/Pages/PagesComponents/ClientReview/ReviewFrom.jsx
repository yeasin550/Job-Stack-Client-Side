import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import { useForm } from 'react-hook-form';
import useAxioSequre from '../../../Hooks/useAxiosSequre';
import toast from 'react-hot-toast';

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
        toast.success(`${user?.displayName} Review Add Successfully!`);
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

        <div className="">
          <label className="label">
            <span className="label-text">Review</span>
          </label>
          <textarea
            {...register("message", { required: true })}
            rows="5"
            placeholder="Write Review text"
            className="rounded-md p-3 w-full "
          ></textarea>
          {errors.message && (
            <span className="text-red-800">Review Text is required</span>
          )}
        </div>
        <div className="form-control mt-6">
          <input
            className="btn btn-primary"
            type="submit"
            value="Submit"
          />
        </div>
      </form>
    </div>
  );
};

export default ReviewFrom;