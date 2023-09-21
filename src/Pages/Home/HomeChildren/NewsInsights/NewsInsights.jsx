import React, { useState } from "react";
// aso animation
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Articles from "../../../PagesComponents/ArticlesAndNews/Articles";

const NewsInsights = () => {
  // aos annimation
  useEffect(() => {
    Aos.init();
  }, []);

  const [articles, setCollage] = useState([]);

  useEffect(() => {
    fetch("https://jobstack-backend-teal.vercel.app/news-article")
      .then((res) => res.json())
      .then((data) => {
        setCollage(data.slice(0, 3));
      });
  }, []);
  return (
    <div className="max-w-screen-xl mx-auto px-5">
      <div className=" dark:bg-gradient-to-r from-gray-700 via-gray-900 to-black py-16 duration-1000">
        <div className="text-center mb-14">
          <h1 className="md:text-4xl text-2xl uppercas font-bold">
            Recent News Articles
          </h1>
          <p className="md:text-lg mt-4">
            Explore our carefully curated collection of recent news articles
            <br />
            thoughtfully selected to keep you informed and inspired!
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-7">
          {articles.map((article) => (
            <Articles key={article._id} article={article}></Articles>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsInsights;
