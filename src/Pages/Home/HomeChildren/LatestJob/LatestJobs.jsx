import React, { useState } from "react";
import './job.css'
import JobCard from "./JobCard";
import apple from "../../../../assets/Jobs/apple.png";
import google from "../../../../assets/Jobs/google.png";
import starbuck from "../../../../assets/Jobs/starbuck.png";
import volkswagen from "../../../../assets/Jobs/volkswagen.png";
import nike from "../../../../assets/Jobs/nike.png";
import meta from "../../../../assets/Jobs/meta.png";

const LatestJobs = () => {
     const [activeTab, setActiveTab] = useState(1);

     const handleTabClick = (id) => {
       setActiveTab(id);
     };
  return (
    <div className="max-w-screen-xl px-5 mx-auto pt-28 mb-20">
      <div className="text-center mb-9">
        <h1 className="text-5xl font-bold ">Latest Jobs</h1>
        <p className="mt-5 text-lg">
          Mauris ut cursus nunc. Morbi eleifend, ligula at consectetur vehicula
        </p>
      </div>

      <div>
        <ul className="tabs text-xl font-semibold">
          <li
            className={activeTab === 1 ? "active" : ""}
            onClick={() => handleTabClick(1)}
          >
            All
          </li>
          <li
            className={activeTab === 2 ? "active" : ""}
            onClick={() => handleTabClick(2)}
          >
            Full Time
          </li>
          <li
            className={activeTab === 3 ? "active" : ""}
            onClick={() => handleTabClick(3)}
          >
            Part Time
          </li>
          <li
            className={activeTab === 4 ? "active" : ""}
            onClick={() => handleTabClick(4)}
          >
            Remort
          </li>
        </ul>

        <div className="tab_content">
          {activeTab === 1 && (
            <>
              <div className="tab_panel md:flex items-center gap-8">
                <JobCard
                  image={apple}
                  title={"IOS Developer"}
                  company={"Apple"}
                  Technology={"React js"}
                  address={"Cupertino, USA"}
                  price={"$35000 - $40000"}
                  time={"Full Time"}
                />
                <JobCard
                  image={google}
                  title={"Web Developer"}
                  company={"Google"}
                  Technology={"Font-end"}
                  address={"Mountain, USA"}
                  price={"$35000 - $40000"}
                  time={"Part Time"}
                />
              </div>
              <div className="tab_panel md:flex items-center gap-8 mt-6">
                <JobCard
                  image={starbuck}
                  title={"Finance Manager"}
                  company={"Starbucks"}
                  Technology={"Back-end"}
                  address={"Seattle, USA"}
                  price={"$35000 - $40000"}
                  time={"Part Time"}
                />
                <JobCard
                  image={volkswagen}
                  title={"Account Manager"}
                  company={"Volkswagen"}
                  Technology={"Mern Stack"}
                  address={"Wolfsburg, DE"}
                  price={"$35000 - $40000"}
                  time={"Full Time"}
                />
              </div>
              <div className="tab_panel md:flex items-center gap-8 mt-6">
                <JobCard
                  image={nike}
                  title={"Marketing Director"}
                  company={"nike"}
                  Technology={"Full stack"}
                  address={"Beaverton, USA"}
                  price={"$35000 - $40000"}
                  time={"Full Time"}
                />
                <JobCard
                  image={meta}
                  title={"Digital Marketing"}
                  company={"meta"}
                  Technology={"SEO"}
                  address={"Menlo Park, USA"}
                  price={"$35000 - $40000"}
                  time={"Part Time"}
                />
              </div>
            </>
          )}
          {activeTab === 2 && (
            <div className="tab_panel">
              <div className="tab_panel md:flex items-center gap-8 mt-6">
                <JobCard
                  image={google}
                  title={"Web Developer"}
                  company={"Google"}
                  Technology={"Font-end"}
                  address={"Mountain, USA"}
                  price={"$35000 - $40000"}
                  time={"Full Time"}
                />
                <JobCard
                  image={apple}
                  title={"IOS Developer"}
                  company={"Apple"}
                  Technology={"React js"}
                  address={"Cupertino, USA"}
                  price={"$35000 - $40000"}
                  time={"Full Time"}
                />
              </div>
              <div className="tab_panel md:flex items-center gap-8 mt-6">
                <JobCard
                  image={nike}
                  title={"Marketing Director"}
                  company={"nike"}
                  Technology={"Full stack"}
                  address={"Beaverton, USA"}
                  price={"$35000 - $40000"}
                  time={"Full Time"}
                />
                <JobCard
                  image={volkswagen}
                  title={"Account Manager"}
                  company={"Volkswagen"}
                  Technology={"Mern Stack"}
                  address={"Wolfsburg, DE"}
                  price={"$35000 - $40000"}
                  time={"Full Time"}
                />
              </div>
            </div>
          )}
          {activeTab === 3 && (
            <div className="tab_panel">
              {" "}
              <div className="tab_panel md:flex items-center gap-8 mt-6">
                <JobCard
                  image={starbuck}
                  title={"Finance Manager"}
                  company={"Starbucks"}
                  Technology={"Back-end"}
                  address={"Seattle, USA"}
                  price={"$35000 - $40000"}
                  time={"Part Time"}
                />
                <JobCard
                  image={meta}
                  title={"Digital Marketing"}
                  company={"meta"}
                  Technology={"SEO"}
                  address={"Menlo Park, USA"}
                  price={"$35000 - $40000"}
                  time={"Part Time"}
                />
              </div>
            </div>
          )}
          {activeTab === 4 && (
            <div className="tab_panel">
              {" "}
              <div className="tab_panel md:flex items-center gap-8 mt-6">
                <JobCard
                  image={apple}
                  title={"IOS Developer"}
                  company={"Apple"}
                  Technology={"React js"}
                  address={"Cupertino, USA"}
                  price={"$35000 - $40000"}
                  time={"Remort"}
                />
                <JobCard
                  image={volkswagen}
                  title={"Account Manager"}
                  company={"Volkswagen"}
                  Technology={"Mern Stack"}
                  address={"Wolfsburg, DE"}
                  price={"$35000 - $40000"}
                  time={"Remort"}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LatestJobs;
