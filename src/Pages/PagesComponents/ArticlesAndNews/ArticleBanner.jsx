import React from "react";
import { useLocation } from "react-router-dom";
import UseScrollTop from "../../../Hooks/UseScrollTop";

const ArticleBanner = () => {
  const { pathname } = useLocation();
  UseScrollTop(pathname);
  return (
    <div
      className="relative h-80 bg-cover bg-no-repeat bg-center"
      style={{
        backgroundImage: `url(https://goupte.com/wp-content/uploads/2016/02/contact-banner.png)`,
      }}
    >
      <div className="absolute inset-0 banner opacity-60"></div>
      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-white text-4xl font-bold">Article And News</h1>
      </div>
    </div>
  );
};

export default ArticleBanner;
