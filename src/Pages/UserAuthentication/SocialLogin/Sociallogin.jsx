import React, { useContext, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import useAxioSequre from "../../../Hooks/useAxiosSequre";

const Sociallogin = () => {
  const [error, setError] = useState();
  const { googleSignIn, gitHubSighIn } = useContext(AuthContext);
  const [axiosSequre] = useAxioSequre();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();
  // handle google login or sign in  and data save server
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        const saveUser = {
          name: loggedInUser?.displayName,
          email: loggedInUser?.email,
          image: loggedInUser?.photoURL,
        };
        axiosSequre.post("/users", saveUser).then(() => {
          Swal.fire({
            icon: "success",
            title: "Login successfully.",
            timer: 1500,
          });
          navigate(from, { replace: true });
        });
      })
      .catch((err) => {
        setError(err.message);
      })
      .catch((err) => {
        setError(err.message);
      });
  };
  // handle Facebook login or sign in  and data save server
  const handleGitHubSignIn = () => {
    gitHubSighIn()
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        const saveUser = {
          name: loggedInUser?.displayName,
          email: loggedInUser?.email,
          image: loggedInUser?.photoURL,
        };
        axiosSequre.post("/users", saveUser).then(() => {
          Swal.fire({
            icon: "success",
            title: "Login successfully.",
            timer: 1500,
          });
          navigate(from, { replace: true });
        });
      })
      .catch((err) => {
        setError(err.message);
      })
      .catch((err) => {
        setError(err.message);
      });
  };
  return (
    <div>
      <div className="flex justify-center items-center gap-6 mt-4">
        <div
          onClick={handleGoogleSignIn}
          className="bg-[#09867E] py-3 text-white  cursor-pointer flex justify-center items-center gap-2 w-full "
        >
          <p className="text-2xl text-yellow-400">
            <FaGoogle />
          </p>
          <p>Google</p>
        </div>
        <div
          onClick={handleGitHubSignIn}
          className="cursor-pointer bg-[#09867E] py-3 text-white  flex justify-center items-center gap-2 w-full "
        >
          <p className="text-2xl text-black">
            <FaGithub />
          </p>
          <p>GitHub</p>
        </div>
      </div>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Sociallogin;
