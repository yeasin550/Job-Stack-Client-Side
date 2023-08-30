import React, { useState } from "react";
import "./UserProfile.css";
import { FaPen } from "react-icons/fa";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import UserInfo from "../UserDetails/UserInfo/UserInfo";
import JobPostForm from "../JobPostAllPage/JobPostForm/JobPostForm";
import SelfPostForm from "../SelfPostAllPage/SelfPostForm/SelfPostForm";
import SelfPostDesign from "../Components/SelfPostDesign/SelfPostDesign";
import useJobPosFindEmail from "../../Hooks/useJobPosFindEmail";
import JobPostDesign from "../Components/JobPostDesign/JobPostDesign";
import useSelfPostfindEmail from "../../Hooks/useSelfPostfindEmail";
import ConfirmRequset from "../ConfirmRequest/ConfirmRequset";
import ConnectedAllUser from "../Components/ConnectedAllUsers/ConnectedAllUser";

const UserProfile = () => {
  const [jobposts] = useJobPosFindEmail();

  const [singleSelfPost, refetch] = useSelfPostfindEmail();
  


  //  activie tabindex set this state 
  const [tabIndex, setTabIndex] = useState(0);
  //set active tab design function
  const [active, setActive] = useState("");
  const clickactive = (active) => {
    setActive(active);
  };
  return (
    //div main container
    <div className="mt-6 mb-24 lg:px-44">
      {/* second container */}
      <div>
        <div className="border profile-shadow rounded-md">
          {/* background image*/}
          <div className="w-full h-[300px]">
            <img
              className="rounded-t-md w-full h-full"
              src="https://i.ibb.co/4g9QMky/description.jpg"
              alt="background image"
            />
          </div>
          {/* user picture and details  */}
          <div className="flex justify-start ml-4  gap-5">
            <div className="w-48 h-48 ">
              <img
                className="w-48 h-48 border rounded-full relative -top-12"
                src="https://i.ibb.co/0fZvJMk/364805402-265317659588730-4531070019685307614-n.jpg"
                alt=""
              />
            </div>
            <div className="mt-5">
              <div>
                <p className="text-3xl font-bold font-sans">Munimul Islam</p>
                <p className="text-[18px] font-sans font-semibold">
                  {" "}
                  InterNational University of Scholars
                </p>
                <p>Dhaka, Dhaka, Bangladesh</p>
                <p className="link text-blue-500">32 Connection</p>
              </div>
            </div>
          </div>
          <div className="flex justify-end relative mr-4 -top-24">
            <button className="flex justify-center items-center gap-2 hover:bg-green-500 btn bg-green-500 text-white btn-sm">
              <FaPen></FaPen> Edit Profile
            </button>
          </div>
        </div>
        <div className="mt-1">
          <Tabs
            defaultIndex={tabIndex}
            onSelect={(index) => setTabIndex(index)}
          >
            <TabList className="flex justify-center items-center border py-2 profile-shadow  gap-6 mb-8">
              <Tab
                onClick={() => clickactive("post")}
                className={` cursor-pointer text ${
                  active == "post" ? "active cursor-pointer" : ""
                }`}
              >
                Post
              </Tab>

              <Tab
                onClick={() => clickactive("jobpost")}
                className={` cursor-pointer text ${
                  active == "jobpost" ? "active cursor-pointer" : ""
                }`}
              >
                Job Post
              </Tab>
              <Tab
                onClick={() => clickactive("about")}
                className={` cursor-pointer text ${
                  active == "about" ? "active cursor-pointer" : ""
                }`}
              >
                About
              </Tab>
              <Tab
                onClick={() => clickactive("connect")}
                className={` cursor-pointer text ${
                  active == "connect" ? "active cursor-pointer" : ""
                }`}
              >
                Connect
              </Tab>
              <Tab
                onClick={() => clickactive("Connection request")}
                className={` cursor-pointer text ${active == "Connection request" ? "active cursor-pointer" : ""
                  }`}
              >
                Connection request
              </Tab>
              <Tab
                onClick={() => clickactive("more")}
                className={` cursor-pointer text ${
                  active == "more" ? "active cursor-pointer" : ""
                }`}
              >
                More
              </Tab>
            </TabList>
            {/* users self  post */}
            <TabPanel>
              <SelfPostForm refetch={refetch}></SelfPostForm>
              <div className="grid md:grid-cols-2 px-10 gap-10 mt-10 ">
                {singleSelfPost?.map((selfpost) => (
                  <SelfPostDesign
                    key={selfpost?._id}
                    selfpost={selfpost}
                    singleSelfPost={singleSelfPost}
                  ></SelfPostDesign>
                ))}
              </div>
            </TabPanel>
            {/* user job post job post */}
            <TabPanel>
              <JobPostForm refetch={refetch}></JobPostForm>
              <div>
                {jobposts?.map((posts) => (
                  <JobPostDesign key={posts?._id} posts={posts}></JobPostDesign>
                ))}
              </div>
            </TabPanel>
            {/* user about  */}
            <TabPanel>
              <UserInfo></UserInfo>
            </TabPanel>
            {/* user connect   */}
            <TabPanel>
              <ConnectedAllUser/>
            </TabPanel>
            {/* user Connect request */}
            <TabPanel>
              <ConfirmRequset/>
            </TabPanel>
            {/* user more featuesr add  */}
            <TabPanel></TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
