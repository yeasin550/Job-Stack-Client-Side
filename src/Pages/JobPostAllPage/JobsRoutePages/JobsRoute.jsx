import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
<<<<<<< HEAD
import { FaSearch } from "react-icons/fa";
import "react-tabs/style/react-tabs.css";
import useJobPost from "../../../Hooks/useJobPost";
import JobPostDesign from "../../Components/JobPostDesign/JobPostDesign";
import { FaBell, FaFile, FaRegBookmark, FaYoutube } from "react-icons/fa";
import JobsCategory from "../JobsCategory/JobsCategory";
=======
import "react-tabs/style/react-tabs.css";
import useJobPost from "../../../Hooks/useJobPost";
import JobPostDesign from "../../Components/JobPostDesign/JobPostDesign";
import { FaBell, FaFile, FaRegBookmark, FaSearch, FaYoutube } from "react-icons/fa";
>>>>>>> 3da1e6074032581bf874a0ee4ae6a56d79d94504

const JobsRoute = () => {
  const [searchText, setSearchText] = useState("");
  const [jobposts] = useJobPost();
  const [tabIndex, setTabIndex] = useState(0);
  const [active, setActive] = useState("");
  const clickactive = (active) => {
    setActive(active);
  };
<<<<<<< HEAD

  // filtering data job name wyais
  // const handleSearch = (event) => {
  //   event.preventDefault();
  // };

  const handleFilter = (posts) => {
=======
  console.log(jobposts);
  const getUniqueData = (data, property) => {
    let newVal = data.map((curElem) => {
      return curElem[property];
    });
    return (newVal = ["All", ...new Set(newVal)]);
    // console.log(newVal);
  };

  const categoryOnlyData = getUniqueData(jobposts, "jobCategory");
const handleFilter = (posts) => {
>>>>>>> 3da1e6074032581bf874a0ee4ae6a56d79d94504
    if (searchText) {
      if (posts?.jobTitle?.toLowerCase()?.includes(searchText?.toLowerCase())) {
        return true;
      } else {
        return false;
      }
    } else return true;
  };

  return (
    <div className="px-16 py-12 ">
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <div className="flex gap-1">
          <div className="shadowdiv border rounded-md w-80 h-100%">
<<<<<<< HEAD
            <TabList className="flex  flex-col justify-center items-start px-5 py-10 gap-6">
=======
            <TabList className="flex flex-col justify-center items-start px-5 py-10 gap-6">
>>>>>>> 3da1e6074032581bf874a0ee4ae6a56d79d94504
              <Tab
                onClick={() => clickactive("post")}
                className={` flex items-center gap-2 cursor-pointer userinfotext ${
                  active == "post" ? "activetab cursor-pointer" : ""
                }`}
              >
                <FaRegBookmark /> All Jobs
              </Tab>
<<<<<<< HEAD
              <Tab
                onClick={() => clickactive("activities")}
                className={` cursor-pointer userinfotext ${
                  active == "activities" ? "activetab cursor-pointer" : ""
                }`}
              >
                Jobs Category
              </Tab>
=======
              
>>>>>>> 3da1e6074032581bf874a0ee4ae6a56d79d94504
              <Tab
                onClick={() => clickactive("group")}
                className={` flex items-center gap-3 cursor-pointer userinfotext ${
                  active == "group" ? "activetab cursor-pointer" : ""
                }`}
              >
                <FaBell /> Job Alerts
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
                className={` cursor-pointer userinfotext ${
                  active == "more" ? "activetab cursor-pointer" : ""
                }`}
              >
                Application Settings
              </Tab>
            </TabList>
          </div>
          <div className="w-full rounded-md shadowdiv border">
            {/* user Activities */}
            <TabPanel>
              <div>
<<<<<<< HEAD
                {/* <div className="search-box p-2 mt-5 text-center">
                  <input
                    onChange={(e) => setSearchText(e.target.value)}
                    type="text"
                    className="p-1 border-2 border-gray-600"
                  />
                  <button
                    className="bg-green-700 text-white py-2 ml-3 px-4"
                    onClick={handleSearch}
                  >
                    <FaSearch></FaSearch>
                  </button>
                </div> */}
                {/* job category ways filter */}
                <form className="flex flex-col-reverse justify-center md:flex-row gap-3 mt-7">
                  <div className="flex">
=======
                {/* job category ways filter */}
                <form className="flex flex-col-reverse justify-center md:flex-row gap-3 mt-7">
                  <div className="flex relative">
>>>>>>> 3da1e6074032581bf874a0ee4ae6a56d79d94504
                    <input
                      onChange={(e) => setSearchText(e.target.value)}
                      value={searchText}
                      type="text"
                      placeholder="Search your jobs title"
                      className="w-full md:w-80 px-3 h-10 rounded-l border-2 border-green-500 focus:outline-none focus:border-green-700"
                    />
<<<<<<< HEAD
                    <button
                      // onClick={handleSearch}
                      type="button"
                      className="bg-green-500 text-white rounded-r ml-1 px-2 md:px-3 py-0 md:py-1"
                    >
                      Search
                    </button>
                  </div>
                  <div>
                    <select
                      id="pricingType"
                      name="pricingType"
                      className="h-10 border-2 border-green-500 focus:outline-none focus:border-green-500 rounded px-2 md:px-2 py-0 md:py-1 tracking-wider"
                    >
                      <option value="All" selected="">
                        All Jobs
                      </option>
                      <option value="Freemium">Front-End</option>
                      <option value=">Back-End">Back-End</option>
                      <option value="Full Stack">Full Stack</option>
                      <option value="IT Software">IT Software</option>
                      <option value="Sales Market">Sales Market</option>
                      <option value="Tutor/Teacher">Tutor/Teacher</option>
                      <option value="Theme Build">Theme Build</option>
                      <option value="UI Designer">UI Designer</option>
                      <option value="Software Making">Software Making</option>
                    </select>
                  </div>
                </form>

                {/* job data send  */}
                <div className=" gap-5 px-5 py-4">
                  {jobposts?.filter(handleFilter).map((posts) => (
                    <JobPostDesign
                      key={posts._id}
                      posts={posts}
                    ></JobPostDesign>
                  ))}
                </div>
              </div>
            </TabPanel>
            {/* job category  */}
            <TabPanel>
              <JobsCategory />
            </TabPanel>
            {/* user fllowing and flowers */}
=======
                   <FaSearch className="absolute top-3 text-gray-400 right-2"/>
                  </div>
                 
                    <div>
                      <select
                        id="jobCategory"
                        name="jobCategory"
                        className="h-10 border-2 cursor-pointer border-green-500 focus:outline-none focus:border-green-500 rounded px-2 md:px-2 py-0 md:py-1 tracking-wider"
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
           
>>>>>>> 3da1e6074032581bf874a0ee4ae6a56d79d94504

            {/* user Group */}
            <TabPanel>Group</TabPanel>
            {/* User Event*/}
            <TabPanel>Event</TabPanel>
            {/* user Pages  */}
            <TabPanel>Pages</TabPanel>
            {/* user Newslater */}
            <TabPanel>NewsLater</TabPanel>
          </div>
        </div>
      </Tabs>
    </div>
  );
};

export default JobsRoute;
