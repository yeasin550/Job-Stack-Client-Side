import React from "react";
import useAxioSequre from "../../../../Hooks/useAxiosSequre";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { getCurrentTimeStamp } from "../../../../Hooks/useMonent";
const imgae_hosting = import.meta.env.VITE_Image_Upload_Token;

const NewsArticles = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const image_hostin_url = `https://api.imgbb.com/1/upload?key=${imgae_hosting}`;

  const onSubmit = (data) => {
    const imgdata = new FormData();
    imgdata.append("image", data.image[0]);
    fetch(image_hostin_url, {
      method: "POST",
      body: imgdata,
    })
      .then((res) => res.json())
      .then((uploadImage) => {
        if (uploadImage.success) {
          const imgUrl = uploadImage.data.display_url;
          const { title, details } = data;
          const newsandarticles = {
            title,
            details,
            timeStamp: getCurrentTimeStamp("LLL"),
            image: imgUrl,
          };
          console.log(newsandarticles);
          fetch("https://jobstack-backend-teal.vercel.app/news-article", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(newsandarticles),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
                reset();
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "Articles add successfully",
                  showConfirmButton: false,
                  timer: 1500,
                });
              }
            });
        }
      });
  };

  return (
    <div className="w-full">
      <h1 className="text-center font-bold text-3xl mt-14">
        News Articles Publish{" "}
      </h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="card-body bg-slate-200  rounded-lg mb-20 mt-20"
      >
        <div className="form-control">
          <label className="label">
            <span className="label-text">Articles Title</span>
          </label>
          <input
            type="text"
            {...register("title", { required: true })}
            placeholder="Enter Your Articles Title"
            className="input input-bordered w-full"
          />
          {errors.name && (
            <span className="text-red-800">Articles Title is required</span>
          )}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Articles Photo</span>
          </label>

          <input
            type="file"
            {...register("image", { required: true })}
            className="file-input file-input-bordered w-full "
          />
          {errors.image && (
            <span className="text-red-800">Articles Photo is required</span>
          )}
        </div>
        <div className="">
          <label className="label">
            <span className="label-text">Articles Details</span>
          </label>
          <textarea
            {...register("details", { required: true })}
            rows="5"
            placeholder="Details Your Articles"
            className="rounded-md p-3 w-full "
          ></textarea>
          {errors.message && (
            <span className="text-red-800">Details is required</span>
          )}
        </div>
        <div className="form-control mt-6">
          <input className="btn btn-primary" type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
};

export default NewsArticles;
