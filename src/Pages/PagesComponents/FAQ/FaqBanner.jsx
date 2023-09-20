import React from "react";
import { useLocation } from "react-router-dom";
import UseScrollTop from "../../../Hooks/UseScrollTop";

const FaqBanner = () => {
  const { pathname } = useLocation();
  UseScrollTop(pathname);
  return (
    <div
      className="relative w-full bg-center bg-cover h-80"
      style={{
        backgroundImage: `url(https://cdn.shopify.com/app-store/listing_images/be8e18fe7fd62b265563360c2986633d/promotional_image/CLHpktmI5_QCEAE=.jpeg?height=720&quality=90&width=1280)`,
      }}
    >
      <div className="absolute inset-0 bg-[#09867E] opacity-60"></div>
      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-white text-4xl font-bold">FAQ</h1> <br />
      </div>
    </div>
  );
};

export default FaqBanner;
