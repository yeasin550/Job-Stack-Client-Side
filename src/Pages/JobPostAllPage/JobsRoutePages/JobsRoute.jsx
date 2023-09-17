import React, { useContext, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useJobPost from "../../../Hooks/useJobPost"
import JobPostDesign from "../../Components/JobPostDesign/JobPostDesign";
import { FaBell, FaBookmark, FaFile, FaHouseDamage, FaRegBookmark, FaSearch, FaShoppingBag, FaYoutube } from "react-icons/fa";
import { AiFillSetting } from "react-icons/ai";
import AppliedJobs from "../JobApplyForm/AppliedJobs";
import { AuthContext } from "../../../Providers/AuthProvider";
 import { BsPersonCheckFill } from 'react-icons/bs';
import AppliedMember from "../AppliedMember/AppliedMember";
import JobGuidance from "../JobGuidance/JobGuidance";
import BookMarkJobs from "../BookMarkJobs/BookMarkJobs";
import getBookMarkJobs from "../../../Hooks/getBookMarkJobs";
import { useLocation } from "react-router";
import UseScrollTop from "../../../Hooks/UseScrollTop";
import JobTaskAlert from "../JobTaskAlert/JobTaskAlert";
import CompleteTask from "../JobApplyForm/CompleteTask";
import { MdNotificationsPaused } from "react-icons/md";
import { BiTask } from "react-icons/bi";
const JobsRoute = () => {
  const { user } = useContext(AuthContext);
  const [active, setActive] = useState("All");
  const [searchText, setSearchText] = useState("");
  const [jobposts] = useJobPost();
  const [bookMarkJobs] = getBookMarkJobs();
  const [tabIndex, setTabIndex] = useState(0);

  const bookJobs = bookMarkJobs[0];
  
  const clickactive = (active) => {
    if (active === "post") {
      setActive("All");
    } else {
      setActive(active);
    }
  };
  
  const getUniqueData = (data, property) => {
    let newVal = data.map((curElem) => {
      return curElem[property];
    });
    return (newVal = ["All", ...new Set(newVal)]);
  };
  
  const categoryOnlyData = getUniqueData(jobposts, "jobCategory");
  const handleFilter = (posts) => {
    if (searchText) {
      if (posts?.jobTitle?.toLowerCase()?.includes(searchText?.toLowerCase())) {
        return true;
      } else {
        return false;
      }
    } else return true;
  };
const { pathname } = useLocation();
UseScrollTop(pathname);

  return (
    <div className="lg:px-10 py-12 dark:bg-gradient-to-r from-gray-700 via-gray-900 to-black">
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <div className="lg:flex gap-1">
          <div className="shadowdiv border rounded-md lg:w-80 h-100%">
            <TabList className="flex sticky top-24 flex-col justify-center items-start px-5 py-10 gap-6">
              <Tab
                onClick={() => clickactive("post")}
                className={` flex items-center gap-2 cursor-pointer userinfotext ${
                  active == "post" ? "activetab cursor-pointer" : ""
                }`}
              >
                <FaHouseDamage /> All Jobs
              </Tab>
             
              <Tab
                onClick={() => clickactive("jobTask")}
                className={` flex items-center gap-3 cursor-pointer userinfotext ${
                  active == "jobTask" ? "activetab cursor-pointer" : ""
                }`}
              >
                <MdNotificationsPaused className="text-xl" /> Job Task Alerts
              </Tab>
              <Tab
                onClick={() => clickactive("completeJobTask")}
                className={` flex items-center gap-3 cursor-pointer userinfotext ${
                  active == "completeJobTask" ? "activetab cursor-pointer" : ""
                }`}
              >
                <BiTask /> Complete Job Task
              </Tab>
              <Tab
                onClick={() => clickactive("appliedJobs")}
                className={` flex items-center gap-3 cursor-pointer userinfotext ${
                  active == "appliedJobs" ? "activetab cursor-pointer" : ""
                }`}
              >
                <FaShoppingBag />
                Applied Member
              </Tab>
              <Tab
                onClick={() => clickactive("appliedMember")}
                className={` flex items-center gap-3 cursor-pointer userinfotext ${
                  active == "appliedMember" ? "activetab cursor-pointer" : ""
                }`}
              >
                <BsPersonCheckFill /> Applied Jobs
              </Tab>
              <Tab
                onClick={() => clickactive("bookmarkJobs")}
                className={` flex items-center gap-3 cursor-pointer userinfotext ${
                  active == "bookmarkJobs" ? "activetab cursor-pointer" : ""
                }`}
              >
                <FaRegBookmark /> Favorites Jobs
              </Tab>
              <Tab
                onClick={() => clickactive("about")}
                className={` flex items-center gap-3 cursor-pointer userinfotext ${
                  active == "about" ? "activetab cursor-pointer" : ""
                }`}
              >
                <FaFile /> Resume Builder
              </Tab>
              <Tab
                onClick={() => clickactive("connect")}
                className={` flex items-center gap-3 cursor-pointer userinfotext ${
                  active == "connect" ? "activetab cursor-pointer" : ""
                }`}
              >
                <FaYoutube /> Job Seeker Guidance
              </Tab>
              <Tab
                onClick={() => clickactive("more")}
                className={` flex items-center gap-3 cursor-pointer userinfotext ${
                  active == "more" ? "activetab cursor-pointer" : ""
                }`}
              >
                <AiFillSetting />
                Application Settings
              </Tab>
            </TabList>
          </div>
          <div className="w-full rounded-md shadowdiv border">
            {/* user Activities */}
            <TabPanel>
              <div>
                {/* job category ways filter */}
                <form className="flex flex-col-reverse  lg:mx-0 mx-5 justify-center md:flex-row gap-3 mt-7">
                  <div className="flex relative">
                    <input
                      onChange={(e) => setSearchText(e.target.value)}
                      value={searchText}
                      type="text"
                      placeholder="Search your jobs title"
                      className="w-full md:w-80 px-3 h-10 dark:text-black border-2 dark:border-red-600 border-blue-500 focus:outline-none focus:blue-green-700 rounded-full"
                    />
                    <FaSearch className="absolute top-3 text-gray-400 right-2" />
                  </div>

                  <div>
                    <select
                      id="jobCategory"
                      name="jobCategory"
                      className="h-10 border-2 cursor-pointer dark:border-red-600 border-blue-500 dark:text-black focus:outline-none focus:blue-green-500 rounded px-2 md:px-2 py-0 md:py-1 tracking-wider"
                      onChange={(e) => setActive(e.target.value)}
                      value={active}
                    >
                      {categoryOnlyData.map((category, index) => (
                        <option value={category} key={index}>
                          {category}
                        </option>
                      ))}
                    </select>
                  </div>
                </form>

                {/* job data display */}
                <div className="gap-5 px-5 py-4">
                  {jobposts
                    .filter(handleFilter)
                    .filter((post) => {
                      if (active === "All") {
                        return true;
                      }
                      return post.jobCategory === active;
                    })
                    .map((posts) => (
                      <JobPostDesign
                        key={posts._id}
                        posts={posts}
                      ></JobPostDesign>
                    ))}
                </div>
              </div>
            </TabPanel>
            {/* Job Task tab */}
            <TabPanel>
              <h1 className="text-center font-bold text-3xl text-blue-700 mt-3">
                {" "}
                Job Task
              </h1>
              <JobTaskAlert />
            </TabPanel>
            <TabPanel>
              <h1 className="text-center font-bold text-3xl text-blue-700 mt-3">
                Employer Complete Job Task
              </h1>
              <CompleteTask />
            </TabPanel>
            {/* user appliedJobs */}
            <TabPanel>
              <h1 className="text-center font-bold text-3xl my-5 text-green-600 dark:text-white">
                My Jobs
              </h1>
              <AppliedJobs />
            </TabPanel>
            {/* user appliedJobs */}
            <TabPanel>
              <h1 className="text-center font-bold text-3xl my-5 text-green-600 dark:text-white">
                Applied Job
              </h1>
              <AppliedMember />
            </TabPanel>
            {/* baokmark jobs */}
            <TabPanel>
              <h1 className="text-center font-bold text-3xl my-5 text-blue-800 dark:text-white">
                Favorite Jobs
              </h1>

              <BookMarkJobs bookJobs={bookJobs} />
            </TabPanel>
            {/* User Event*/}
            <TabPanel>
              <h1 className="text-center my-3 font-bold text-4xl text-blue-800 dark:text-white">
                Craft Your Career Story
              </h1>
              <div className="container mx-auto mt-8 pb-3 lg:w-11/12 rounded-md">
                <div className="aspect-w-16 aspect-h-9">
                  <iframe
                    src="https://www.youtube.com/embed/Ll62YIkEvs8?si=d0gSnZMq_Ss5lU4n"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            </TabPanel>
            {/* user Pages  */}
            <TabPanel>
              <JobGuidance />
            </TabPanel>
            {/* user Newslater */}
            <TabPanel>NewsLater</TabPanel>
          </div>
        </div>
      </Tabs>
    </div>
  );
};

export default JobsRoute;
