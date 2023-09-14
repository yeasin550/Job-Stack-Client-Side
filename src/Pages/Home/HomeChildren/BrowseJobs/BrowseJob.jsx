import React, { useState } from 'react';
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const BrowseJob = () => {
   const [countOn, setCountOn] = useState(false);
  return (
    <div className="lg:px-14 banner">
      <div className="grid md:grid-cols-2 gap-5 justify-center ">
        {/* left site */}
        <div className="w-full px-3 lg:px-0">
            <img
              className="rounded-md  w-full"
              src="https://i.ibb.co/BqMBCGR/populer-job.jpg"
              
              alt="img"
            />
        </div>
        {/* right site */}
        <div className="px-3 md:px-0 ">
          <h1 className="lg:text-[32px] text-2xl   text-transparent bg-clip-text  bg-gradient-to-r from-white via-yellow-400 to-white font-bold  ">
            Trusted & Popular Job and Career Link up site
          </h1>
          <p className="mt-7  text-[18px] text-white md:text-justify">
            Welcome to Job-Stack, your trusted and popular destination for
            connecting with exciting job opportunities and advancing your
            career. Join our thriving community of professionals, where you can
            network, explore, and thrive in your chosen field. Discover the path
            to your dream job today!
          </p>
          <div className="flex mt-10 flex-col md:flex-row justify-center items-center gap-4 md:justify-evenly md:mt-5">
            <div className="text-center  shadowform rounded-lg p-1 w-44  text-white">
              <ScrollTrigger
                className="text-3xl font-bold"
                onEnter={() => setCountOn(true)}
                onExit={() => setCountOn(false)}
              >
                {countOn && (
                  <CountUp start={0} end={1200} duration={3} delay={0} />
                )}
                +
              </ScrollTrigger>
              <h1 className="">Job Available</h1>
            </div>

            <div className="text-center   shadowform rounded-lg p-1 w-44  text-white">
              <ScrollTrigger
                className="text-3xl font-bold "
                onEnter={() => setCountOn(true)}
                onExit={() => setCountOn(false)}
              >
                {countOn && (
                  <CountUp start={0} end={970} duration={3} delay={0} />
                )}
                +
              </ScrollTrigger>
              <h1 className="">Submitted CV</h1>
            </div>

            <div className="text-center  shadowform rounded-lg p-1 w-44  text-white">
              <ScrollTrigger
                className="text-3xl font-bold "
                onEnter={() => setCountOn(true)}
                onExit={() => setCountOn(false)}
              >
                {countOn && (
                  <CountUp start={0} end={140} duration={3} delay={0} />
                )}
                +
              </ScrollTrigger>
              <h1 className="">Company</h1>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row justify-center items-center gap-4 md:gap-0 md:justify-evenly mt-5">
            <div className="text-center   shadowform rounded-lg p-1 w-44  text-white">
              <ScrollTrigger
                className="text-3xl font-bold "
                onEnter={() => setCountOn(true)}
                onExit={() => setCountOn(false)}
              >
                {countOn && (
                  <CountUp start={0} end={1700} duration={3} delay={0} />
                )}
                +
              </ScrollTrigger>
              <h1 className="">Registered Member</h1>
            </div>

            <div className="text-center  shadowform rounded-lg p-1 w-44  text-white">
              <ScrollTrigger
                className="text-3xl font-bold "
                onEnter={() => setCountOn(true)}
                onExit={() => setCountOn(false)}
              >
                {countOn && (
                  <CountUp start={0} end={1290} duration={3} delay={0} />
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
