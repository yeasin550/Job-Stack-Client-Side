import React from "react";
import { Link, useRouteError } from "react-router-dom";


import Lottie from "lottie-react";
import animationData from "../../../assets/animation/error animation.json";

const ErrorPage = () => {
  const { error } = useRouteError();

  return (
      <div className=" justify-center text-center">
        <Lottie
          animationData={animationData}
          loop={true}
          autoplay={true}
          className="flex mx-auto"
          style={{ width: "600px", height: "600px" }}
        />
        <p className="text-2xl font-semibold md:text-3xl mb-8">
          {/* {error?.message} */}
          Page Not Pound!
        </p>
        <button className="py-3 px-4 rounded-lg hover:bg-green-700  bg-green-600 text-white transform transition-transform hover:scale-110 hover:shadow-lg">
          <Link to="/">Back to homepage</Link>
        </button>
      </div>
  );
};

export default ErrorPage;
