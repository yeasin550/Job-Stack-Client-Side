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

  const Remote = job.filter((item) => item.workplace === "Remote");
  const Onsite = job.filter((item) => item.workplace === "Onsite");

  const handleTabClick = (id) => {
    setActiveTab(id);
  };
  return (
    <div className="max-w-screen-xl px-5 mx-auto my-16">
      <div className="text-center mb-5">
        <h1 className="text-3xl font-bold ">Latest Jobs</h1>
        <p className="mt-2 text-lg">
          Mauris ut cursus nunc. Morbi eleifend, ligula at consectetur vehicula
        </p>
      </div>

      <div>
        <ul
          className="tabs text-xl font-semibold"
          defaultIndex={tabIndex}
          onSelect={(index) => setTabIndex(index)}
        >
          <li
            className={activeTab === 1 ? "active" : ""}
            onClick={() => handleTabClick(1)}
          >
            Remote
          </li>
          <li
            className={activeTab === 2 ? "active" : ""}
            onClick={() => handleTabClick(2)}
          >
            Onsite
          </li>
        </ul>

        <div className="tab_content">
          {activeTab === 1 && (
            <div className="tab_panel">
              <div className="tab_panel md:flex items-center gap-8 mt-6">
                <JobCard items={Remote}></JobCard>
              </div>
            </div>
          )}
          {activeTab === 2 && (
            <div className="tab_panel">
              <div className="tab_panel md:flex items-center gap-8 mt-6">
                <JobCard items={Onsite}></JobCard>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LatestJobs;
