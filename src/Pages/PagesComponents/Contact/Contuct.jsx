import React from 'react';
import Contact from './ContactFrom';
import ContuctBanner from './ContuctBanner';
import GoToTop from '../../Shared/GoToTop/GoToTop';

const Contuct = () => {
    return (
        <div>
            <ContuctBanner/>
            <Contact />
            <GoToTop/>
        </div>
    );
};

export default Contuct;