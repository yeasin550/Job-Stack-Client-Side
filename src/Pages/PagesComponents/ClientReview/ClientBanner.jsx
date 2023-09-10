import React from "react";
import { useLocation } from "react-router-dom";
import UseScrollTop from "../../../Hooks/UseScrollTop";

const ClientBanner = () => {
  const { pathname } = useLocation();
  UseScrollTop(pathname);
  return (
    <div
      className="relative h-80 bg-cover bg-no-repeat bg-center"
      style={{
        backgroundImage: `url(https://i.ibb.co/Sv6Ww7F/review.jpg)`,
      }}
    >
      <div className="absolute inset-0 banner opacity-60"></div>
      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-white text-4xl font-bold">Review</h1> <br />
      </div>
    </div>
  );
};

export default ClientBanner;
