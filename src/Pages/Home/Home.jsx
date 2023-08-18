import React from "react";
import Categories from "./HomeChildren/Categories/Categories";
import LatestJobs from "./HomeChildren/LatestJob/LatestJobs";
import ChooseWork from "./ChooseWork/ChooseWork";
import Contact from "./HomeChildren/Contact/Contact";
import BrowseJob from "./HomeChildren/BrowseJobs/BrowseJob";
import Banner from "./HomeChildren/Banner/Banner";
import PromotingCareer from "./HomeChildren/PromotingCareer/PromotingCareer";
import NewsInsights from "./HomeChildren/NewsInsights/NewsInsights";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <BrowseJob></BrowseJob>
      <Categories />
      <LatestJobs />
      <ChooseWork></ChooseWork>
      <PromotingCareer />
      <NewsInsights />
      <Contact/>
    </div>
  );
};

export default Home;
