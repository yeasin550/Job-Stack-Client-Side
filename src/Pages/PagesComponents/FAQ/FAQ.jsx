import React from 'react';
import FaqBanner from './FaqBanner';
import FaqQuestionAnswer from './FaqQuestionAnswer';
import GoToTop from '../../Shared/GoToTop/GoToTop';
// import TopCompanies from '../../Home/HomeChildren/TopCompany/TopCompanies';

const FAQ = () => {
    return (
        <div>
            <FaqBanner />
            <FaqQuestionAnswer />
            {/* <TopCompanies/> */}
            <GoToTop/>
            
        </div>
    );
};

export default FAQ;