import React from 'react';
import AboutBanner from './AboutBanner';
import MostPopular from './MostPopular';
import GoToTop from '../../Shared/GoToTop/GoToTop';
import QuestionsAnswers from './QuestionsAnswers';
import Subscribe from './Subscribe';

const AboutPage = () => {
    return (
      <div className="dark:bg-gradient-to-r from-gray-700 via-gray-900 to-black duration-1000 dark:text-white">
        <AboutBanner />
        <MostPopular />
        <QuestionsAnswers />
        <Subscribe />
        <GoToTop />
      </div>
    );
};

export default AboutPage;