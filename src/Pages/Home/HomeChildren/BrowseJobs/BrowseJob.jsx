import React, { useState } from 'react';
import banner from '../../../../assets/images/populer-job.jpg';
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import LazyLoad from 'react-lazy-load';

const BrowseJob = () => {
   const [countOn, setCountOn] = useState(false);
  return (
    <div className="max-w-screen-xl mx-auto px-5 py-10">
      <div className="grid md:grid-cols-2 gap-5 items-center">
        {/* left site */}
        <div className="">
          <LazyLoad offset={300}>
            <img
              className="rounded-md"
              src={banner}
              alt="banner"
              draggable="false"
            />
          </LazyLoad>
        </div>
        {/* right site */}
        <div className="">
          <h1 className="text-4xl font-bold">
            Trusted & Popular Job and Career Link up site
          </h1>
          <p className="mt-7 text-lg text-justify">
            Welcome to Job-Stack, your trusted and popular destination for
            connecting with exciting job opportunities and advancing your
            career. Join our thriving community of professionals, where you can
            network, explore, and thrive in your chosen field. Discover the path
            to your dream job today!
          </p>
          <div className="flex justify-evenly mt-5">
            <div className="text-center ">
              <ScrollTrigger
                className="text-3xl font-bold text-blue-600"
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

            <div className="text-center">
              <ScrollTrigger
                className="text-3xl font-bold text-blue-600"
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

            <div className="text-center">
              <ScrollTrigger
                className="text-3xl font-bold text-blue-600"
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
          <div className="flex justify-evenly mt-5">
            <div className="text-center">
              <ScrollTrigger
                className="text-3xl font-bold text-blue-600"
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

            <div className="text-center">
              <ScrollTrigger
                className="text-3xl font-bold text-blue-600"
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
