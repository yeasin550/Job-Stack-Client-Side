
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useContext, useState } from "react";
import useAxioSequre from "../../../Hooks/useAxiosSequre";
import { AuthContext } from "../../../Providers/AuthProvider";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
const img_hosting_token = import.meta.env.VITE_Image_Upload_Token;
const JobApplyForm = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const [axiosSequre] = useAxioSequre();
  const [userEroor, setUserError] = useState("");
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

  const { data: userApply = [], refetch } = useQuery( ["userApply", id],
    async () => {
      const res = await axiosSequre.get(`/job/${id}`);
      return res.data;
    }
  );
  console.log(userApply);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

const onSubmit = (data) => {
  console.log(data);
  const formData = new FormData();
  formData.append("image", data.resumeImage[0]);

  fetch(img_hosting_url, {
    method: "POST",
    body: formData,
  })
    .then((res) => res.json())
    .then((imageResponse) => {
      console.log(imageResponse);

      if (imageResponse.success) {
        const imgURL = imageResponse.data.display_url;
        const { number, questions } = data;
        const currentDate = new Date();
        const day = currentDate.getDate();
        const month = currentDate.getMonth() + 1;
        const year = currentDate.getFullYear();
        const formattedDay = day < 10 ? `0${day}` : day.toString();
        const formattedMonth = month < 10 ? `0${month}` : month.toString();
        const formattedDate = `${year}-${formattedMonth}-${formattedDay}`;
        const saveUser = {
          resumeImage: imgURL,
          name: user.displayName,
          applyEmail: user.email,
          number,
          postId: id,
          questions,
          jobPostEmail: userApply[0]?.email,
          jobTitle: userApply[0]?.jobTitle,
          companyName: userApply[0]?.companyName,
          jobCategory: userApply[0]?.jobCategory,
          jobDescription: userApply[0]?.jobDescription,
          salary: userApply[0]?.salary,
          userPhoto: userApply[0]?.userPhoto,
          workplace: userApply[0]?.workplace,
          postDate: formattedDate,
          companyphoto: userApply[0]?.image,
        };
        console.log(saveUser);
        axiosSequre
          .post("/jobapply", saveUser)
          .then((response) => {
                if (response.data.insertedId) {
                  reset();
                  Swal.fire({
                    icon: "success",
                    title: "Job apply successfully",
                    showConfirmButton: false,
                    timer: 3000,
                  });
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
    <div className="w-2/3 mx-auto my-12 border border-green-300 shadow-lg shadow-green-50 px-5 py-5 rounded-md">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full lg:px-2 px-4 border-bg-white rounded-lg text-black"
      >
        {/* name */}
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text font-bold dark:text-white">
              User Name
            </span>
          </label>
          <input
            type="text"
            readOnly
            defaultValue={user?.displayName}
            placeholder="type here"
            className="input input-bordered"
          />
        </div>
        {/* emails */}
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text font-bold dark:text-white">
              User Apply Email
            </span>
          </label>
          <input
            type="email"
            readOnly
            defaultValue={user?.email}
            placeholder="Enter Your Email"
            autoComplete="email"
            className="appearance-none input input-bordered"
          />
        </div>

        {/* number */}
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text font-bold dark:text-white">
              User Apply Phone
            </span>
          </label>
          <input
            {...register("number", {
              required: true,
              pattern: /^[0-9]+$/,
            })}
            id="number"
            type="number"
            placeholder="Enter Your Number"
            autoComplete="number"
            className="appearance-none input input-bordered"
          />
          {errors.number && (
            <span className="text-red-600">
              Please enter a active phone number?
            </span>
          )}
        </div>

        {/* why should you hire? */}
        <div className="relative w-full">
          <h1 className="my-2 font-bold dark:text-white">
            Why should you hire?
          </h1>
          <textarea
            {...register("questions", {
              required: "Job description is required",
            })}
            className={`pl-3 pt-3 border ${
              errors.questions ? "border-red-500" : "border-green-500"
            } resize-none w-full sm:w-1/2 md:w-2/3 lg:w-full`}
            cols="54"
            rows="3"
            placeholder="Type job description"
          ></textarea>
          {errors.questions && (
            <p className="text-red-500">{errors.questions.message}</p>
          )}
        </div>

        <div className="form-control w-full">
          <label className="label">
            <span className="label-text font-bold dark:text-white">
              Upload Resume Image
            </span>
          </label>
          <input
            type="file"
            {...register("resumeImage")}
            className="file-input file-input-success file-input-bordered w-full"
          />
          {errors.resumeImage && (
            <span className="text-red-600 animate-pulse">
              Resume is required
            </span>
          )}
        </div>

        <button className="my-btn w-full mt-5 p-2 text-lg rounded-md text-white bg-green-600 text-center  px-6  hover:bg-blue-800  duration-300   bg-gradient-to-r from-green-500 to-blue-700  font-semibold   hover:from-blue-700 hover:to-purple-900 transition-all ">
          Apply Jobs
        </button>
      </form>
    </div>
  );
};

export default JobApplyForm;
