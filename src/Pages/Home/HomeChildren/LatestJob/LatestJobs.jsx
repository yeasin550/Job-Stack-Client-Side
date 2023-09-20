import React, { useState } from "react";
import { useParams } from "react-router-dom";
import JobCard from "./JobCard";
import useJobs from "../../../../Hooks/useJobs";
import "./job.css";

const LatestJobs = () => {
  const [activeTab, setActiveTab] = useState(1);
  const categories = ["Remote", "Onsite"];
  const { workplace } = useParams();
  const [job] = useJobs();
  const initialIndex = categories.indexOf(workplace);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const remote = job.filter((item) => item.workplace === "Remote");
  const onsite = job.filter((item) => item.workplace === "Onsite");
  const Internship = job.filter((item) => item.workplace === "Internship");
  const handleTabClick = (id) => {
    setActiveTab(id);
  };
  return (
    <div className=" max-w-screen-xl px-5 mx-auto ">
      <div className=" dark:bg-gradient-to-r from-gray-700 via-gray-900 to-black ">
        <div className="text-center dark:bg-gradient-to-r from-gray-700 via-gray-900 to-black  ">
          <h1 className="text-4xl uppercase font-bold ">Latest Jobs</h1>
          <p className="mt-2 mb-4 text-white lg:px-0 text-lg">
            Discover a world of career possibilities with our latest job
            openings.
          </p>
        </div>
        <div className=" dark:bg-gradient-to-r from-gray-700 via-gray-900 to-black">
          <ul
            className="tabs text-xl  dark:bg-gradient-to-r from-gray-700 via-gray-900 to-black font-semibold"
            defaultIndex={tabIndex}
            onSelect={(index) => setTabIndex(index)}
          >
            <li
              className={activeTab === 1 ? "active " : "tabbuttonactive"}
              onClick={() => handleTabClick(1)}
            >
              Remote
            </li>
            <li
              className={activeTab === 2 ? "active " : "tabbuttonactive"}
              onClick={() => handleTabClick(2)}
            >
              Onsite
            </li>
            <li
              className={activeTab === 3 ? "active " : "tabbuttonactive"}
              onClick={() => handleTabClick(3)}
            >
              Internship
            </li>
          </ul>
          <div className="tab-content  dark:bg-gradient-to-r from-gray-700 via-gray-900 to-black py-8">
            {activeTab === 1 && (
              <div className="tab_panel  dark:bg-gradient-to-r from-gray-700 via-gray-900 to-black">
                <JobCard items={remote}></JobCard>
              </div>
            )}
            {activeTab === 2 && (
              <div className="tab_panel  dark:bg-gradient-to-r from-gray-700 via-gray-900 to-black">
                <JobCard items={onsite}></JobCard>
              </div>
            )}
            {activeTab === 3 && (
              <div className="tab_panel  dark:bg-gradient-to-r from-gray-700 via-gray-900 to-black">
                <JobCard items={Internship}></JobCard>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestJobs;
