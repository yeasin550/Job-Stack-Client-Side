import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
const PromotingCareer = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabClickHandler = (index) => {
    setActiveTab(index);
  };
  return (
    <div className="md:flex justify-center px-5 md:px-28 gap-12 py-20 bg-green-50">
      <div className="w-full justify-center items-center mt-20 md:w-1/2 space-y-9 py-4">
        <h1 className="text-5xl font-bold">Promoting Career</h1>
        <p>
          There are many variations of passages of Lorem <br /> Ipsum Fasts
          There are many variations of passages <br /> of Lorem Ipsum Fastsby
          injected humour fasts there
        </p>
        <button className="bg-green-500 py-2 px-8 rounded-sm text-white hover:bg-white hover:text-black border border-green-500 text-lg duration-1000">
          Browse Job
        </button>
      </div>
      <div className="w-full md:w-1/2">
        <Tabs>
          <div className="flex justify-center ">
            <hr className=" border-[1px] border-green-500 w-full mt-8"></hr>
            <TabList className="flex">
              <Tab
                className={`py-2 px-4 border-2 border-transparent bg-green-500 text-black cursor-pointer ${
                  activeTab === 0
                    ? "bg-green-500 border-green-500 text-white"
                    : "hover:border-green-600"
                }`}
                onClick={() => tabClickHandler(0)}
              >
                Step One
              </Tab>
              <Tab
                className={`py-2 px-4 border-2 border-transparent bg-green-500 text-black cursor-pointer ${
                  activeTab === 1
                    ? "bg-green-500 border-green-500 text-white"
                    : "hover:border-green-600"
                }`}
                onClick={() => tabClickHandler(1)}
              >
                Step Two
              </Tab>
              <Tab
                className={`py-2 px-4 border-2 border-green-600 border-transparent bg-green-500 text-blackcursor-pointer ${
                  activeTab === 2
                    ? "bg-green-500 border-green-500 text-white"
                    : "hover:border-green-600"
                }`}
                onClick={() => tabClickHandler(2)}
              >
                Step Three
              </Tab>
            </TabList>
            <hr className=" border-[1px] border-green-500 w-full mt-8"></hr>
          </div>

          <div className="mt-9">
            <TabPanel>
              <div className="relative rounded-xl bg-white px-10 py-20 h-full shadow-sm text-center">
                <button className="bg-white  -mt-12 top-8 py3 px-4  border text-lg border-gray-700 absolute btn-circle">
                  1
                </button>
                <a href="/templates" className="group">
                  <img
                    src="https://i.ibb.co/PMsYbX6/step-1.png"
                    alt=""
                    className="mx-auto h-24 w-24"
                  />
                  <h3 className="my-3 text-2xl font-bold group-hover:text-primary-500">
                    Set Up Your Profile All
                  </h3>
                  <p className="mt-1.5 text-lg leading-6 text-secondary-500">
                    After signing up to TechCareer, you start to set up your
                    profile and find the hottest & latest tech jobs.
                  </p>
                </a>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="relative rounded-xl bg-white px-10 py-20 shadow-sm text-center">
                <button className="bg-white  -mt-12 top-8 py3 px-4  border text-lg border-gray-700 absolute btn-circle">
                  2
                </button>
                <a href="/templates" className="group">
                  <img
                    src="https://i.ibb.co/TWZn8Vd/step-2.png"
                    alt=""
                    className="mx-auto h-24 w-24"
                  />
                  <h3 className="my-3 text-2xl font-bold group-hover:text-primary-500">
                    Create A Pro CV
                  </h3>
                  <p className="mt-1.5 text-lg leading-6 text-secondary-500">
                    Techcareer gives you more than 500 pre-made CV samples for
                    candidates to personalize their CVs.
                  </p>
                </a>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="relative rounded-xl bg-white px-10 py-20 shadow-sm text-center">
                <button className="bg-white  -mt-12 top-8 py3 px-4  border text-lg border-gray-700 absolute btn-circle">
                  3
                </button>
                <a href="/templates" className="group">
                  <img
                    src="https://i.ibb.co/5R7bq8h/step-3.png"
                    alt=""
                    className="mx-auto h-24 w-24"
                  />
                  <h3 className="my-3 text-2xl font-bold group-hover:text-primary-500">
                    Get Applied
                  </h3>
                  <p className="mt-1.5 text-lg leading-6 text-secondary-500">
                    When owning a CV, don't hesitate to submit your CV to easily
                    apply for a job from Tech companies.
                  </p>
                </a>
              </div>
            </TabPanel>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default PromotingCareer;
