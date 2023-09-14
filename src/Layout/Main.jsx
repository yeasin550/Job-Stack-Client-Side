import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";

const Main = () => {
  const location = useLocation();
   const noHeaderfooter = location.pathname.includes('login') ||  location.pathname.includes('signup') || location.pathname.includes('massageroute') || location.pathname.includes('companyregister')  || location.pathname.includes('termsandconditions');
    return (
      <div className="dark:bg-black dark:text-white text-black duration-500">
        <Navbar />
        <Outlet />
        {noHeaderfooter || <Footer />}
      </div>
    );
};

export default Main;
