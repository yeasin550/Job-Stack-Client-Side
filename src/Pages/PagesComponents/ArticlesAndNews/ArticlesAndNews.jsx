import React from 'react';
import ArticleBanner from './ArticleBanner';
import GoToTop from '../../Shared/GoToTop/GoToTop';
import AllArticles from './AllArticles';

const ArticlesAndNews = () => {
    return (
      <div>
            <ArticleBanner />
            <AllArticles/>
        <GoToTop />
      </div>
    );
};

export default ArticlesAndNews;