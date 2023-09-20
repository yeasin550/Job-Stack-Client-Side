import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { getCurrentTimeStamp } from "../../../../Hooks/useMonent";
import { useLocation } from "react-router-dom";
import UseScrollTop from "../../../../Hooks/UseScrollTop";
const imgae_hosting = import.meta.env.VITE_Image_Upload_Token;

const NewsArticles = () => {

    const { pathname } = useLocation();
    UseScrollTop(pathname);

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
          const {
            title,
            details,
            pointone,
            pointtwo,
            pointthree,
            pointfour,
            pointfive,
            pointsix,
            pointseven,
            pointeight,
            pointnine,
            pointten,
          } = data;
          const newsandarticles = {
            title,
            details,
            pointone,
            pointtwo,
            pointthree,
            pointfour,
            pointfive,
            pointsix,
            pointseven,
            pointeight,
            pointnine,
            pointten,
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
    <div className="w-full ">
      <h1 className="text-center font-bold text-3xl">News Articles Publish </h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="card-body bg-slate-200  rounded-lg mb-20 mt-7"
      >
        {/* Articles Title */}
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
          {errors.title && (
            <span className="text-red-800">Articles Title is required</span>
          )}
        </div>
        {/* Articles Photo */}
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
        <div className="grid md:grid-cols-2 gap-7">
          {/* Point One */}
          <div className="form-control">
            <label className="label">
              <span className="label-text"> Point One</span>
            </label>
            <input
              type="text"
              {...register("pointone")}
              placeholder="Enter Your Articles Point One"
              className="input input-bordered w-full"
            />
          </div>
          {/* Point Two */}
          <div className="form-control">
            <label className="label">
              <span className="label-text"> Point Two</span>
            </label>
            <input
              type="text"
              {...register("pointtwo")}
              placeholder="Enter Your Articles Point Two"
              className="input input-bordered w-full"
            />
          </div>
          {/* Point Three */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Point Three</span>
            </label>
            <input
              type="text"
              {...register("pointthree")}
              placeholder="Enter Your Articles Point Three"
              className="input input-bordered w-full"
            />
          </div>
          {/* Point Four */}
          <div className="form-control">
            <label className="label">
              <span className="label-text"> Point Three</span>
            </label>
            <input
              type="text"
              {...register("pointfour")}
              placeholder="Enter Your Articles Title"
              className="input input-bordered w-full"
            />
          </div>
          {/* Point Five */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Point Five</span>
            </label>
            <input
              type="text"
              {...register("pointfive")}
              placeholder="Enter Your Articles Title"
              className="input input-bordered w-full"
            />
          </div>
          {/* Point Six */}
          <div className="form-control">
            <label className="label">
              <span className="label-text"> Point Six</span>
            </label>
            <input
              type="text"
              {...register("pointsix")}
              placeholder="Enter Your Articles Point Six"
              className="input input-bordered w-full"
            />
          </div>
          {/* Point Seven */}
          <div className="form-control">
            <label className="label">
              <span className="label-text"> Point Seven</span>
            </label>
            <input
              type="text"
              {...register("pointseven")}
              placeholder="Enter Your Articles Point Seven"
              className="input input-bordered w-full"
            />
          </div>
          {/* Point Eight */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Point Eight</span>
            </label>
            <input
              type="text"
              {...register("pointeight")}
              placeholder="Enter Your Articles Point Eight"
              className="input input-bordered w-full"
            />
          </div>
          {/* Point Nine */}
          <div className="form-control">
            <label className="label">
              <span className="label-text"> Point Nine</span>
            </label>
            <input
              type="text"
              {...register("pointnine")}
              placeholder="Enter Your Articles Point Nine"
              className="input input-bordered w-full"
            />
          </div>
          {/* Point Ten */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Point Ten</span>
            </label>
            <input
              type="text"
              {...register("pointten")}
              placeholder="Enter Your Articles Point Ten"
              className="input input-bordered w-full"
            />
          </div>
        </div>
        <div className="">
          <label className="label">
            <span className="label-text">Articles Details</span>
          </label>
          <textarea
            {...register("details")}
            rows="5"
            placeholder="Details Your Articles"
            className="rounded-md p-3 w-full "
          ></textarea>
        </div>
        <div className="form-control mt-6">
          <input
            className="btn bg-[#09867E] text-white hover:bg-[#09867E]"
            type="submit"
            value="Submit"
          />
        </div>
      </form>
    </div>
  );
};

export default NewsArticles;
