import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import loginanimation from "../../../assets/animation_ll1yt389.json";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../../../Providers/AuthProvider";
import Swal from "sweetalert2";
import Sociallogin from "../SocialLogin/Sociallogin";
import { sendEmailVerification } from "@firebase/auth";

const Login = () => {

  // Authcontext import auth info and 2 hokks
  const { resetPassword } = useContext(AuthContext);
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [error, setError] = useState();

  // visible and hidden function implement password field
  const [show, setShow] = useState();
  const handleShow = () => {
    setShow(!show);
  };
  /// login form data collect and user login
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // const onSubmit = (data) => {
  //   const email = data?.email;
  //   const password = data?.password;
  //   signIn(email, password)
  //     .then((result) => {
  //       const user = result.user;
  //       reset();
  //       console.log(user);
  //       Swal.fire({
  //         icon: "success",
  //         title: "Login successfully.",
  //         showConfirmButton: false,
  //         timer: 1500,
  //       });
  //       navigate(from, { replace: true });
  //     })
  //     .catch((err) => {
  //       setError(err.message);
  //       console.log(err.message);
  //     });
  // };
  
    const onSubmit = async (data) => {
      try {
        // console.log(data);
        const result = await signIn(data.email, data.password);
        const loggedUser = result.user;

        // You should import the `sendEmailVerification` function and use it here
        await sendEmailVerification(loggedUser);

        Swal.fire({
          title: "Email verification sent!",
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
        });

        Swal.fire("Good job!", "Login successfully", "success");
        navigate(from, { replace: true });
      } catch (error) {
        console.error("Error logging in:", error);
      }
    };

  // handle reset password
  const handleResetPassword = (event) => {
    setError(null);
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;

    resetPassword(email)
      .then((result) => {
        Swal.fire({
          position: "top",
          icon: "success",
          title: "Check your email to reset password",
          showConfirmButton: false,
          timer: 1500,
        });
        // toast.success("Check your email to reset password");
        form.reset();
        navigate("/login");
      })
      .catch((error) => {
        setError(error.message);
        console.log(error);
      });
  };



  return (
    <div>
      <div className="flex flex-col lg:flex-row justify-center items-center mt-5 px-2 lg:gap-5 gap-5 lg:px-20">
        {/* Login div start */}
        <div className="w-full lg:px-10">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full lg:p-10 p-3 border border-green-500 bg-white rounded-lg text-black"
          >
            <h3 className="text-2xl text-center font-bold mb-5">Login Here</h3>
            {/* Email Inpurt Field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                {...register("email", { required: true })}
                placeholder="Enter your email"
                className="input input-bordered"
              />
              {errors.email && (
                <span className="text-rose-500 animate-pulse">
                  please provide your email
                </span>
              )}
            </div>
            {/* Password INput Field */}
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={show ? "text" : "password"}
                {...register("password", { required: true })}
                placeholder="Enter your password"
                className="input input-bordered"
              />
              <span
                onClick={handleShow}
                className="absolute top-12 right-4 text-[22px]"
              >
                {show ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}
              </span>
              {errors.password && (
                <span className="text-rose-500 animate-pulse">
                  please provide your password
                </span>
              )}

              <label htmlFor="my_modal_6" className="text-left cursor-pointer text-green-500 font-semibold">
                Forgot Password?
              </label>
            </div>
            {/* submit button */}
            <div className="form-control mt-6 mb-4">
              <input
                type="submit"
                value="Login"
                className="btn bg-green-500 hover:bg-green-600 text-[20px] border-0 text-white"
              />
            </div>
            {error && <p className="text-center text-error mb-2">{error}</p>}
            <p className="text-center">
              Don't have an account?{" "}
              <Link to="/signup" className="text-green-500 underline">
                Create an account
              </Link>
            </p>
          </form>
          {/* social login google and facebook */}
          <Sociallogin></Sociallogin>
        </div>
        {/* Login div End */}
        <div className=" w-full flex justify-center items-center">
          <div className="lg:py-24">
            <Lottie
              className="w-full"
              animationData={loginanimation}
              loop={true}
            />
            ;
          </div>
        </div>
      </div>
      {/* forgot password modal */}
      <div className="mx-5 my-10 md:w-1/2 md:mx-auto px-5 py-10">
        <input type="checkbox" id="my_modal_6" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box">
            <form onSubmit={handleResetPassword}>
              <h4 className="text-green-700 text-2xl font-bold mb-5 text-center">
                Forgot Password?
              </h4>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg text-green-700 font-semibold">
                    Your Email :
                  </span>
                </label>
                <label className="">
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter Your Email"
                    className='input input-bordered border-green-700 w-full max-w-xs"'
                    required
                  />
                </label>
              </div>
              <button className="my-btn w-full mt-5 p-2 text-lg rounded-md text-white bg-green-600 hover:bg-green-700">
                Send Email
              </button>
              <p className="text-error text-center mt-2">{error}</p>
            </form>
            <div className="modal-action">
              <label
                htmlFor="my_modal_6"
                className="btn text-white bg-green-600 hover:bg-green-700"
              >
                close
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
