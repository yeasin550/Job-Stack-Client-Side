import { useForm } from "react-hook-form";
import { AuthContext } from "../../../Providers/AuthProvider";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Lottie from "lottie-react";
import signupanimation from "../../../assets/animation/105639-signup.json";
import { sendEmailVerification } from "firebase/auth";
import useAxioSequre from "../../../Hooks/useAxiosSequre";

const img_hosting_token = import.meta.env.VITE_Image_Upload_Token;

const Register = () => {
  const [show, setShow] = useState(false);
  const [shows, setShows] = useState(false);
  const [error, setError] = useState("");
  const [userEroor, setUserError] = useState("");
  const navigate = useNavigate();
  const [axiosSequre] = useAxioSequre();
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

  //password text toogle
  const handleVisiblePasswordFirst = () => {
    setShows(!shows);
  };

  //password text toogle
  const handleVisiblePassword = () => {
    setShow(!show);
  };

  // react hooks from
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // main form

  const onSubmit = (data) => {
    console.log(data);
    if (data.password == data.confirmPassword) {
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
            createUser(data.email, data.password)
              .then((result) => {
                const loggedUser = result.user;
                console.log(loggedUser);
                sendEmailVerification(loggedUser);

                updateUserProfile(data.name, imgURL);
                console.log(loggedUser);
                const saveUser = {
                  name: data.name,
                  email: data.email,
                  image: imgURL,
                  gender: data.gender,
                };
                axiosSequre.post("/users", saveUser).then((data) => {
                  console.log(data);
                  if (data.data.insertedId) {
                    reset();
                    Swal.fire({
                      icon: "success",
                      title: "User created successfully.",
                      timer: 1500,
                    });
                    setTimeout(() => {
                      navigate("/"); // Use navigate to navigate
                    }, 2000);
                  }
                });
              })
              .catch((error) => {
                setUserError(error.message);
              });
          } else {
            setUserError("Image response not success");
          }
        });
    } else {
      setError("Wrong password. Please re-type your password.");
    }
  };

  return (
    <div className="flex flex-col lg:flex-row justify-center items-center lg:gap-10 lg:px-20 px-2 mb-24">
      <div className="w-full lg:w-3/4">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full  mt-32   mb-10 lg:p-8 p-4 border border-green-500 bg-white rounded-lg text-black"
        >
          <h3 className="text-2xl text-center font-bold mb-5">Sign up now!</h3>
          <div className="flex gap-5 flex-col lg:flex-row">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                {...register("name", { required: true })}
                placeholder="type here"
                className="input input-bordered"
              />
              {errors.name && (
                <span className="text-red-600">First Name is required</span>
              )}
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Gender</span>
              </label>
              <select
                {...register("gender", { required: true })}
                required
                className="select input input-bordered w-full "
              >
                <option disabled selected>
                  select gender
                </option>
                <option>Female</option>
                <option>Male</option>
                <option>Other</option>5432
              </select>
              {errors.gender && (
                <span className="text-red-600">Gender is required</span>
              )}
            </div>
          </div>
          <div className="flex gap-5 flex-col lg:flex-row">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text"> Email</span>
              </label>
              <input
                {...register("email", {
                  required: true,
                  pattern: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/,
                })}
                id="email"
                type="email"
                placeholder="Enter Your Email"
                autoComplete="email"
                className="appearance-none input input-bordered"
              />
              {errors.email && (
                <span className="text-red-600">
                  {" "}
                  Please enter a valid email address
                </span>
              )}
            </div>
            <div className="form-control w-full">
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
            </div>
          </div>
          <div className="flex gap-5 flex-col lg:flex-row">
            <div className="form-control relative w-full">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={shows ? "text" : "password"}
                {...register("password", {
                  required: true,
                  pattern: /(?=.*[A-Z])/,
                  minLength: 6,
                })}
                placeholder="password"
                className="input input-bordered"
              />
              <span
                onClick={handleVisiblePasswordFirst}
                className="absolute  top-[50px] right-4 text-[18px]"
              >
                {shows ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}
              </span>
              {errors.password?.type === "required" && (
                <p className="text-red-600">Password is required</p>
              )}
              {errors.password?.type === "minLength" && (
                <p className="text-red-600">Password must be 6 characters</p>
              )}
              {errors.password?.type === "pattern" && (
                <p className="text-red-600">
                  Password must have one Uppercase.
                </p>
              )}
            </div>
            <div className="form-control relative w-full">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type={show ? "text" : "password"}
                {...register("confirmPassword", { required: true })}
                placeholder="Re type password"
                className="input input-bordered"
              ></input>
              <span
                onClick={handleVisiblePassword}
                className="absolute top-[50px] right-4 text-[18px]"
              >
                {show ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}
              </span>
              {errors.confirmPassword?.type === "required" && (
                <p className="text-red-600">Confirm Password is required</p>
              )}
              {error && <p className="text-error mb-2">{error}</p>}
            </div>
          </div>
          <div className="form-control mt-6">
            <input
              type="submit"
              value="Sign Up"
              className="btn bg-green-500 hover:bg-green-600 text-[20px] border-0 text-white"
            />
          </div>
          {userEroor && (
            <p className="text-center text-error mb-2">{userEroor}</p>
          )}
        </form>
      </div>
      <div className="w-full lg:w-2/4 lg:pt-36">
        <Lottie animationData={signupanimation} loop={true} />;
      </div>
    </div>
  );
};

export default Register;
