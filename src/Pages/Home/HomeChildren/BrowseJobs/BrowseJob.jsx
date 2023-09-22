import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import useAxioSequre from '../../../../Hooks/useAxiosSequre';
import Lottie from "lottie-react";
import image from '../../../../assets/images/zdlHZdquQN.json'

const BrowseJob = () => {
  const [countOn, setCountOn] = useState(false);
  const [axiosSecure] = useAxioSequre();
  const { data: stats = {} } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure("/admin-stats");
      return res.data;
    },
  });
  return (
    <div className="max-w-screen-xl mx-auto px-5  dark:bg-gradient-to-r from-gray-700 via-gray-900 to-black">
      <div className="grid md:grid-cols-2 gap-5 justify-start items-center ">
        {/* left site */}
        <div className="w-full h-full  px-3 lg:px-0">
          <Lottie
            animationData={image}
            loop={true}
          />
        </div>
        {/* right site */}
        <div className="px-3 md:px-0 ">
          <h1 className="lg:text-[32px] text-2xl font-bold  ">
            Trusted & Popular Job and Career Link up site
          </h1>
          <p className="mt-7  text-[18px] md:text-justify">
            Welcome to Job-Stack, your trusted and popular destination for
            connecting with exciting job opportunities and advancing your
            career. Join our thriving community of professionals, where you can
            network, explore, and thrive in your chosen field. Discover the path
            to your dream job today!
          </p>
          <div className="flex mt-10 flex-col md:flex-row justify-center items-center gap-4 md:justify-evenly md:mt-5">
            <div className="text-center bg-[#09867E] text-white rounded-lg p-1 w-44 ">
              <ScrollTrigger
                className="text-3xl font-bold "
                onEnter={() => setCountOn(true)}
                onExit={() => setCountOn(false)}
              >
                {countOn && (
                  <CountUp start={0} end={stats.job} duration={3} delay={0} />
                )}
                +
              </ScrollTrigger>
              <h1 className="">Job Available</h1>
            </div>

            <div className="text-center bg-[#09867E] text-white rounded-lg p-1 w-44 ">
              <ScrollTrigger
                className="text-3xl font-bold "
                onEnter={() => setCountOn(true)}
                onExit={() => setCountOn(false)}
              >
                {countOn && (
                  <CountUp start={0} end={17} duration={3} delay={0} />
                )}
                +
              </ScrollTrigger>
              <h1 className="">Submitted CV</h1>
            </div>

            <div className="text-center bg-[#09867E] text-white rounded-lg p-1 w-44 ">
              <ScrollTrigger
                className="text-3xl font-bold "
                onEnter={() => setCountOn(true)}
                onExit={() => setCountOn(false)}
              >
                {countOn && (
                  <CountUp start={0} end={14} duration={3} delay={0} />
                )}
                +
              </ScrollTrigger>
              <h1 className="">Company</h1>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row justify-center items-center gap-4 md:gap-0 md:justify-evenly mt-5">
            <div className="text-center bg-[#09867E] text-white  rounded-lg p-1 w-44 ">
              <ScrollTrigger
                className="text-3xl font-bold "
                onEnter={() => setCountOn(true)}
                onExit={() => setCountOn(false)}
              >
                {countOn && (
                  <CountUp start={0} end={stats.users} duration={3} delay={0} />
                )}
                +
              </ScrollTrigger>
              <h1 className="">Registered Member</h1>
            </div>

            <div className="text-center bg-[#09867E] text-white rounded-lg p-1 w-44 ">
              <ScrollTrigger
                className="text-3xl font-bold "
                onEnter={() => setCountOn(true)}
                onExit={() => setCountOn(false)}
              >
                {countOn && (
                  <CountUp start={0} end={29} duration={3} delay={0} />
                )}
                +
              </ScrollTrigger>
              <h1 className="">Appointed to Job</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrowseJob;
