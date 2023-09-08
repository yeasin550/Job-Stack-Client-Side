import React from "react";
import Categories from "./HomeChildren/Categories/Categories";
import LatestJobs from "./HomeChildren/LatestJob/LatestJobs";
import ChooseWork from "./ChooseWork/ChooseWork";
import BrowseJob from "./HomeChildren/BrowseJobs/BrowseJob";
import Banner from "./HomeChildren/Banner/Banner";
import PromotingCareer from "./HomeChildren/PromotingCareer/PromotingCareer";
import NewsInsights from "./HomeChildren/NewsInsights/NewsInsights";
import GoToTop from "../Shared/GoToTop/GoToTop";
import Testimonial from "./HomeChildren/Testimonial/Testimonial";

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
      <Testimonial/>
      <GoToTop />
    </div>
  );
};

export default Home;
