import React, { useContext, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import Swal from "sweetalert2";

import { FaFacebook, FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import useAxioSequre from "../../../Hooks/useAxiosSequre";

const Sociallogin = () => {
  const [error, setError] = useState();
  const { googleSignIn } = useContext(AuthContext);
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
        Swal.fire({
          icon: "success",
          title: "Login successfully.",
          timer: 1500,
        });
        const saveUser = {
          name: loggedInUser?.displayName,
          email: loggedInUser?.email,
          image: loggedInUser?.photoURL,
        };
        axiosSequre("/users", saveUser).then(() => {
          navigate(from, { replace: true });
        });
      })
      .catch((err) => {
        setError(err.message);
      });
  };
  // handle Facebook login or sign in  and data save server
  const handleFaceBookSignIn = () => {};
  return (
    <div>
      <div className="flex justify-center items-center gap-6 mt-4">
        <div
          onClick={handleGoogleSignIn}
          className="border cursor-pointer flex justify-center items-center gap-2 w-full py-2 border-green-500"
        >
          <p className="text-2xl text-yellow-400">
            <FaGoogle />
          </p>
          <p>Google</p>
        </div>
        <div
          onClick={handleFaceBookSignIn}
          className="border cursor-pointer flex justify-center items-center gap-2 w-full py-2 border-green-500"
        >
          <p className="text-2xl text-blue-400">
            <FaFacebook />
          </p>
          <p>Facebook</p>
        </div>
      </div>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Sociallogin;
