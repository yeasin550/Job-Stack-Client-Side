import React, { useState } from "react";
import { FaHandPointRight, FaRegCommentDots, FaUserAlt } from "react-icons/fa";
import { BiRightArrowAlt } from "react-icons/bi";
// aso animation
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import images from '../../../../assets/images/home-banner.png'
import Articles from "../../../PagesComponents/ArticlesAndNews/Articles";

const NewsInsights = () => {
  // aos annimation
  useEffect(() => {
    Aos.init();
  }, []);
    const [allData, setAllData] = useState([]);
    const [articles, setCollage] = useState([]);

    const handleSeeAll = () => {
      setCollage(allData);
    };
    const handleSeeLess = () => {
      setCollage(allData.slice(0, 3));
    };
    useEffect(() => {
      fetch("https://jobstack-backend-teal.vercel.app/news-article")
        .then((res) => res.json())
        .then((data) => {
          setCollage(data.slice(0, 3));
          setAllData(data);
        });
    }, []);
  return (
    <div className="banner dark:bg-gradient-to-r from-gray-700 via-gray-900 to-black py-16 lg:px-14 px-3">
      <div className="text-center mb-14">
        <h1 className="md:text-4xl text-2xl uppercase text-transparent bg-clip-text  bg-gradient-to-r from-white to-yellow-400 font-bold">
          Recent News Articles
        </h1>
        <p className="md:text-lg text-[16px] text-white mt-4">
          Explore our carefully curated collection of recent news articles
          <br />
          thoughtfully selected to keep you informed and inspired.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-7">
        {articles.map((article) => (
          <Articles key={article._id} article={article}></Articles>
        ))}
      </div>

      <div className={`flex justify-center mt-10`}>
        {articles.length === 3 ? (
          <button onClick={handleSeeAll} className="px-4 py-2 ">
            {/* See all Team */}
          </button>
        ) : (
          <button
            onClick={handleSeeLess}
            className="px-4 py-2 bg-primary text-white rounded-md"
          >
            See Less
          </button>
        )}
      </div>
    </div>
  );
};

export default NewsInsights;
