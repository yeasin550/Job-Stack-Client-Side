import React from 'react';
import Contact from './ContactFrom';
import ContuctBanner from './ContuctBanner';
import GoToTop from '../../Shared/GoToTop/GoToTop';

const Contuct = () => {
    return (
      <div className="dark:bg-gradient-to-r from-gray-700 via-gray-900 to-black dark:text-white">
        <ContuctBanner />
        <Contact />
        <GoToTop />
      </div>
    );
};

export default Contuct;