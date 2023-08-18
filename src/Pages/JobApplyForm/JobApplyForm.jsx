import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useState } from "react";
import useAxioSequre from "../../Hooks/useAxiosSequre";
const img_hosting_token = import.meta.env.VITE_Image_Upload_Token;

const JobApplyForm = () => {
  const [text, setText] = useState("");
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
    console.log(data);
    const formData = new FormData();
    formData.append("image", data.image[0]);

    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageResponse) => {
        console.log(imageResponse);

        if (imageResponse.success) {
          const imgURL = imageResponse.data.display_url;
          const {
            jobDescription,
            position,
            workplace,
            jobCategory,
            location,
            salary,
          } = data;
          const saveUser = {
            image: imgURL,
            jobDescription,
            position,
            workplace,
            jobCategory,
            location,
            salary,
          };
          console.log(saveUser);
          axiosSequre
            .post("/job", saveUser)
            .then((response) => {
              console.log(response);

              if (response.data.insertedId) {
                // Reset the form
                reset();

                // Display success toast
                Swal.fire({
                  icon: "success",
                  title: "Job post successfully",
                  showConfirmButton: false,
                  timer: 3000,
                });

                // Optionally navigate after some time
                // setTimeout(() => {
                //   navigate("/");
                // }, 2000);
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
      <div className="flex justify-start items-center gap-3 w-full">
        <label
          htmlFor="my_modal_6"
          className="text-left flex items-center gap-5 w-full cursor-pointer text-green-500 font-semibold"
        >
          <h1
            // onClick={handleJobPost}
            className="bg-green-500 text-center mt-5 text-white py-2 px-6 rounded-md hover:bg-green-600 transition duration-300 w-full"
          >
            Apply Now
          </h1>
        </label>
      </div>
      <div className="mx-5 my-10 md:w-1/2 md:mx-auto px-5">
        <input type="checkbox" id="my_modal_6" className="modal-toggle" />
        <div className="modal py-0">
          <div className="absolute modal-box">
            <div className="modal-action">
              <h1 className="mr-20 font-semibold text-3xl">
                Applications
              </h1>

              <label
                htmlFor="my_modal_6"
                className="relative -top-12 left-6 btn text-white btn-outline btn-circle bg-green-600 rounded-full hover:bg-green-700"
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
                  className={`pl-3 pt-3 border ${
                    errors.jobDescription
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
              {/* <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Upload Image</span>
                </label>
                <input
                  type="file"
                  {...register("image")}
                  className="file-input file-input-success file-input-bordered w-full"
                />
                {errors.image && (
                  <span className="text-red-600 animate-pulse">
                    Image is required
                  </span>
                )}
              </div> */}

              {/* Position */}
              {/* <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-semibold">Position </span>
                </label>
                <select
                  {...register("position", { required: true })}
                  required
                  className="select input input-bordered border border-green-500 w-full "
                >
                  <option disabled selected>
                    Select Position
                  </option>
                  <option>Full Time</option>
                  <option>Part Time</option>
                  <option>InternShip</option>
                </select>
                {errors.position && (
                  <span className="text-red-600">SobCategory is required</span>
                )}
              </div> */}

              <button className="my-btn w-full mt-5 p-2 text-lg rounded-md text-white bg-green-600 hover:bg-green-700">
                Post
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobApplyForm;
