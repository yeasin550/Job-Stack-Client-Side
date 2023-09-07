import React from 'react';
import AboutBanner from './AboutBanner';
import MostPopular from './MostPopular';
import GoToTop from '../../Shared/GoToTop/GoToTop';
import QuestionsAnswers from './QuestionsAnswers';
import Subscribe from './Subscribe';

const AboutPage = () => {
    return (
        <div>
            <AboutBanner />
            <MostPopular />
            <QuestionsAnswers />
            <Subscribe/>
            <GoToTop/>
        </div>
    );
};

export default AboutPage;