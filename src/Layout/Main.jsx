import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const Main = () => {
    return (
      <div className="dark:bg-black dark:text-white text-black duration-500">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    );
};

export default Main;