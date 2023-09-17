import React from "react";
import { TailSpin } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className=" flex justify-center items-center h-[100vh]">
      <div className="flex justify-center items-center animate-bounce duration-200">
        <img className="w-24" src="https://i.ibb.co/xM0cGwL/Colorful-Modern-K-Letter-Free-Logo-removebg-preview-2.png" alt="img" />
        <h1 className="text-2xl font-bold font-sans">JOBSTACK</h1>
      </div>
    </div>
  );
};

export default Loading;
