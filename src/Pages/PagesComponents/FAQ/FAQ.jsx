import React from 'react';
import FaqBanner from './FaqBanner';
import FaqQuestionAnswer from './FaqQuestionAnswer';
import GoToTop from '../../Shared/GoToTop/GoToTop';

const FAQ = () => {
    return (
        <div>
            <FaqBanner />
            <FaqQuestionAnswer />
            <GoToTop/>
        </div>
    );
};

export default FAQ;