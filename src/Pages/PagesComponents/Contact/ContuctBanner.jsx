import React from 'react';
import { useLocation } from 'react-router-dom';
import UseScrollTop from '../../../Hooks/UseScrollTop';

const ContuctBanner = () => {
   const { pathname } = useLocation();
   UseScrollTop(pathname);
    return (
      <div
        className="relative bg-cover bg-no-repeat bg-center h-80"
        style={{
          backgroundImage: `url(https://www.vtdesignz.com/wp-content/uploads/2016/06/about-us-banner.jpg)`,
        }}
      >
        <div className="absolute inset-0 banner opacity-60"></div>
        {/* Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold">Contact Us</h1> <br />
        </div>
      </div>
    );
};

export default ContuctBanner;