import { useState } from "react";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
const PromotingCareer = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabClickHandler = (index) => {
    setActiveTab(index);
  };
  return (
    <div className="grid lg:grid-cols-2 px-5 lg:px-16 gap-12 lg:py-8 banner py-4">
      <div className="w-full justify-center items-center lg:mt-28  space-y-9">
        <h1 className="lg:text-5xl  text-transparent bg-clip-text  bg-gradient-to-r from-white via-yellow-400 to-white text-3xl font-bold">Promoting Career</h1>
        <p className="text-white text-lg">
         
          We believe in your potential, and we're here to support your journey towards a rewarding career.
          Take the first step today and transform your aspirations into achievements.
        </p>

        <Link to="jobsroute">
          <button className="banner-button mt-6">
            Browse Job
          </button>
        </Link>
      </div>
      <div className="w-full">
        <Tabs>
          <div className="flex gap-2 justify-center mt-6 ">
            <hr className="md:block hidden border-[1px] w-full mt-4"></hr>
            <TabList className="flex justify-center items-center gap-2">
              <Tab
                className={`active ${activeTab === 0
                    ? "activetab"
                    : ""
                  }`}
                onClick={() => tabClickHandler(0)}
              >
                Step1
              </Tab>
              <Tab
                className={`active ${activeTab === 1
                    ? "activetab "
                    : ""
                  }`}
                onClick={() => tabClickHandler(1)}
              >
                Step2
              </Tab>
              <Tab
                className={`active ${activeTab === 2
                    ? "activetab "
                    : ""
                  }`}
                onClick={() => tabClickHandler(2)}
              >
                Step3
              </Tab>
            </TabList>
            <hr className="md:block hidden border-[1px] w-full mt-4"></hr>
          </div>

          <div className="mt-9">
            <TabPanel>
              <div className="relative bg-white flex flex-col justify-center items-center lg:px-10 py-12 px-3 mt-12 rounded-md  space-y-6 ">
                <button className="border-2 border-gray-600 rounded-full absolute md:-top-8 -top-6  md:w-16 w-12 h-12 md:h-16 text-yellow-400 bg-white text-center text-xl font-bold">1</button>
                  <img
                    src="https://i.ibb.co/PMsYbX6/step-1.png"
                    alt="images"
                  />
                  <h3 className="md:text-2xl text-lg font-bold">
                    Set Up Your Profile All
                  </h3>
                  <p className="md:text-lg text-center">
                    After signing up to TechCareer, you start to set up your
                    profile and find the hottest & latest tech jobs.
                  </p>
              </div>
            </TabPanel>
           
            <TabPanel>
              <div className="relative bg-white flex flex-col justify-center items-center lg:px-10 py-12 mt-12 rounded-md  space-y-6 ">
                <button className="border-2 border-gray-600 rounded-full absolute md:-top-8 -top-6  md:w-16 w-12 h-12 md:h-16 text-yellow-400 bg-white text-center text-xl font-bold">2</button>
                  <img
                    src="https://i.ibb.co/TWZn8Vd/step-2.png"
                    alt="images"
                  />
                  <h3 className=" md:text-2xl text-lg font-bold">
                  Create A Pro CV
                  </h3>
                  <p className="md:text-lg text-center">
                  Techcareer gives you more than 500 pre-made CV samples for
                    candidates to personalize their CVs.
                  </p>
              </div>
            </TabPanel>
           
            <TabPanel>
              <div className="relative bg-white flex flex-col justify-center items-center lg:px-10  py-12 mt-12 rounded-md  space-y-6 ">
                <button className="border-2 border-gray-600 rounded-full absolute md:-top-8 -top-6 md:w-16 w-12 h-12 md:h-16 text-yellow-400 bg-white text-center md:text-xl font-bold">3</button>
                  <img
                    src="https://i.ibb.co/5R7bq8h/step-3.png"
                    alt="images"
                  />
                  <h3 className="md:text-2xl text-lg font-bold">
                  Get Applied
                  </h3>
                  <p className="md:text-lg text-center">
                  When owning a CV, don't hesitate to submit your CV to easily
                    apply for a job from Tech companies.
                  </p>
              </div>
            </TabPanel>
           
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default PromotingCareer;
