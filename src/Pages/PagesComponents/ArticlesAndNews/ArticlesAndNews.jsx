import React from 'react';
import ArticleBanner from './ArticleBanner';
import GoToTop from '../../Shared/GoToTop/GoToTop';
import AllArticles from './AllArticles';

const ArticlesAndNews = () => {
    return (
      <div className="dark:bg-gradient-to-r from-gray-700 via-gray-900 to-black dark:text-white">
        <ArticleBanner />
        <AllArticles />
        <GoToTop />
      </div>
    );
};

export default ArticlesAndNews;