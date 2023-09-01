import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useContext, useState } from "react";
import useAxioSequre from "../../../Hooks/useAxiosSequre";
import { AuthContext } from "../../../Providers/AuthProvider";
const img_hosting_token = import.meta.env.VITE_Image_Upload_Token;

const JobPostForm = ({ refetch }) => {
  const { user } = useContext(AuthContext)
  const [axiosSequre] = useAxioSequre();
  const [userEroor, setUserError] = useState("");
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data)
    const formData = new FormData();
    formData.append("image", data?.image[0]);
    //image host on imgbb.com
    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageResponse) => {
        console.log(imageResponse);
        if (imageResponse?.success) {
          const imgURL = imageResponse.data.display_url;
          const {
            jobDescription,
            jobTitle,
            workplace,
            jobCategory,
            location,
            salary,
            companyName,
          } = data;
          const saveUser = {
            image: imgURL,
            email: user?.email,
            userPhoto: user.photoURL,
            jobDescription,
            jobTitle,
            companyName,
            workplace,
            jobCategory,
            location,
            salary,
          };
          axiosSequre .post("/job", saveUser)
            .then((response) => {
              if (response.data.insertedId) {
                reset();
                refetch();
                // Display success toast
                Swal.fire({
                  icon: "success",
                  title: "Job post successfully",
                  showConfirmButton: false,
                  timer: 3000,
                });
                // Reset the for
              }
            })
            .catch((error) => {
              setUserError(error.message);
            });
        } else {
          setUserError("Image response not successful");
        }
      })
      .catch((error) => {
        setUserError(error.message);
      });
  };

  return (
    <div className="">
      <div className="flex justify-center items-center gap-3 border border-gray-300 shadow-sm bg-gray-50 rounded-md py-5 px-3  w-full">
        <img
          className="w-14 h-14 rounded-full"
          src="https://i.ibb.co/0fZvJMk/364805402-265317659588730-4531070019685307614-n.jpg"
          alt=""
        />
        <label
          htmlFor="my_modal_6"
          className="text-left flex items-center gap-5 w-full md:w-8/12 cursor-pointer text-green-500 font-semibold"
        >
          <h1 className="px-3 w-full h-12 rounded-full bg-gray-200 hover:bg-gray-300 text-black flex justify-center items-center text-lg">
            Job post
          </h1>
        </label>
      </div>
      <div className="mx-5 md:w-1/2 md:mx-auto px-5 py-10">
        <input type="checkbox" id="my_modal_6" className="modal-toggle" />
        <div className="modal py-0">
          <div className="absolute modal-box">
            <div className="relative -top-12 left-6 modal-action">
              <label
                htmlFor="my_modal_6"
                className="btn text-white absolute top-3 right-3 btn-outline btn-circle bg-green-600 rounded-full hover:bg-green-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </label>
            </div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-full lg:px-2 px-4 border-bg-white rounded-lg text-black"
            >
              {/* job descriptions */}
              <div className="relative w-full">
                <h1 className="font-semibold">Job-Descriptions</h1>
                <textarea
                  {...register("jobDescription", {
                    required: "Job description is required",
                  })}
                  className={`pl-3 pt-3 border ${errors.jobDescription
                      ? "border-red-500"
                      : "border-green-500"
                    } resize-none w-full sm:w-1/2 md:w-2/3 lg:w-full`}
                  cols="54"
                  rows="3"
                  placeholder="Type job description"
                ></textarea>
                {errors.jobDescription && (
                  <p className="text-red-500">
                    {errors.jobDescription.message}
                  </p>
                )}
              </div>
              {/* image hoisting usrl */}
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Upload Image</span>
                </label>
                <input
                  type="file"
                  required
                  {...register("image")}
                  className="file-input file-input-success file-input-bordered w-full"
                />
                {errors.image && (
                  <span className="text-red-600 animate-pulse">
                    Image is required
                  </span>
                )}
              </div>
            

              {/* job Title */}
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Job Title</span>
                </label>
                <input
                  type="text"
                  {...register("jobTitle", { required: true })}
                  placeholder="type here"
                  className="input input-bordered"
                />
                {errors.jobTitle && (
                  <span className="text-red-600">Job Title is required</span>
                )}
              </div>
              {/* company name */}
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Company Name</span>
                </label>
                <input
                  type="text"
                  {...register("companyName", { required: true })}
                  placeholder="type here"
                  className="input input-bordered"
                />
                {errors.companyName && (
                  <span className="text-red-600">Company Name is required</span>
                )}
              </div>

              {/* Workplace */}
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-semibold">Workplace </span>
                </label>
                <select
                  {...register("workplace", { required: true })}
                  required
                  className="select input input-bordered w-full border border-green-500"
                >
                  <option disabled selected>
                    Select Workplace
                  </option>
                  <option>Remote</option>
                  <option>Onsite</option>
                </select>
                {errors.workplace && (
                  <span className="text-red-600">Workplace is required</span>
                )}
              </div>
              {/* jobCategory */}
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-semibold">JobCategory</span>
                </label>
                <select
                  {...register("jobCategory", { required: true })}
                  required
                  className="select input input-bordered w-full border border-green-500"
                >
                  <option disabled selected>
                    Select JobCategory
                  </option>
                  <option>Web Development</option>
                  <option>Front-end Development</option>
                  <option>Back-end Development</option>
                  <option>Full Stack Development</option>
                  <option>IT Software</option>
                  <option>Sales Marketing</option>
                  <option>Software Making</option>
                  <option>UI Designer</option>
                  <option>IOS Developer</option>
                  <option>Finance Manager</option>
                  <option>Account Manager</option>
                  <option>Marketing Director</option>
                  <option>Digital Marketing</option>
                </select>
                {errors.jobCategory && (
                  <span className="text-red-600">SobCategory is required</span>
                )}
              </div>

              {/* location */}
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-semibold">Location</span>
                </label>
                <select
                  {...register("location", { required: true })}
                  required
                  className="select input input-bordered w-full border border-green-500"
                >
                  <option disabled selected>
                    Select Location
                  </option>
                  <option>Bangladesh</option>
                  <option>India</option>
                  <option>Canada</option>
                  <option>United State</option>
                  <option>Pakistan</option>
                </select>
                {errors.location && (
                  <span className="text-red-600">SobCategory is required</span>
                )}
              </div>
              {/* Salary Range */}
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-semibold">Salary Range</span>
                </label>
                <input
                  type="number"
                  {...register("salary", { required: true })}
                  placeholder="Enter your salary"
                  className="input input-bordered border border-green-500"
                />
                {errors.salary && (
                  <span className="text-rose-500 animate-pulse">
                    Salary is required
                  </span>
                )}
              </div>
              <button className="my-btn w-full mt-5 p-2 text-lg rounded-md text-white bg-green-600 hover:bg-green-700">
                POST
              </button>
              {/* {userEroor && <p className="mt-2">{userEroor}</p>} */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobPostForm;
