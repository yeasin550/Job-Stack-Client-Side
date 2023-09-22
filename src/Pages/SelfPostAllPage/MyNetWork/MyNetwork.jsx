import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import SelfPostDesign from "../../Components/SelfPostDesign/SelfPostDesign";
import useSelfPost from "../../../Hooks/useSelfPost";
import ConnectedAllUser from "../../Components/ConnectedAllUsers/ConnectedAllUser";
import AllUsers from "../AllUsers/AllUsers";
import ConfirmRequset from "../../ConfirmRequest/ConfirmRequset";
import UserFollowing from "../../UserConnectedFunctionality/UserFollowing";
import AllEvents from "./AllEvents/AllEvents";
import UserArticle from "./UserArticle/UserArticle";
const MyNetwork = () => {
  const [allselfdata] = useSelfPost();
  const [tabIndex, setTabIndex] = useState(0);
  const [active, setActive] = useState("");
  const clickactive = (active) => {
    setActive(active);
  };
  return (
    <div className="max-w-screen-xl  mx-auto pb-10 dark:bg-gradient-to-r from-gray-700 via-gray-900 to-black">
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <div className="lg:flex gap-1">
          <div className="shadowdiv border bg-[#09867E] dark:bg-gradient-to-r from-gray-700 via-gray-900 to-black text-white rounded-md lg:w-80 w-full h-100%">
            <TabList className="flex flex-col justify-center items-start px-5 py-10 gap-6">
              <Tab
                onClick={() => clickactive("post")}
                className={` cursor-pointer  userinfotext ${
                  active == "post" ? "activetab  cursor-pointer" : "tab-color"
                }`}
              >
                Activities
              </Tab>
              <Tab
                onClick={() => clickactive("activities")}
                className={` cursor-pointer userinfotext ${
                  active == "activities" ? "activetab cursor-pointer" : ""
                }`}
              >
                Connections
              </Tab>
              <Tab
                onClick={() => clickactive("jobpost")}
                className={` cursor-pointer userinfotext ${
                  active == "jobpost" ? "activetab cursor-pointer" : ""
                }`}
              >
                Find Connect
              </Tab>
              <Tab
                onClick={() => clickactive("group")}
                className={` cursor-pointer userinfotext ${
                  active == "group" ? "activetab cursor-pointer" : ""
                }`}
              >
                Connect Request
              </Tab>
              <Tab
                onClick={() => clickactive("about")}
                className={` cursor-pointer userinfotext ${
                  active == "about" ? "activetab cursor-pointer" : ""
                }`}
              >
                Event
              </Tab>
              <Tab
                onClick={() => clickactive("connect")}
                className={` cursor-pointer userinfotext ${
                  active == "connect" ? "activetab cursor-pointer" : ""
                }`}
              >
                Following
              </Tab>
              <Tab
                onClick={() => clickactive("more")}
                className={` cursor-pointer userinfotext ${
                  active == "more" ? "activetab cursor-pointer" : ""
                }`}
              >
                User Article
              </Tab>
            </TabList>
          </div>
          <div className="w-full  rounded-md shadowdiv border">
            {/* user Activities */}
            <TabPanel>
              {allselfdata ? (
                <div className="grid  place-items-center h-screen gap-10 overflow-auto">
                  {allselfdata?.map((selfpost) => (
                    <SelfPostDesign
                      key={selfpost?._id}
                      selfpost={selfpost}
                    ></SelfPostDesign>
                  ))}
                </div>
              ) : (
                <div className="flex justify-center items-center mt-10 ">
                  <span className="loading loading-spinner w-14 text-success"></span>
                </div>
              )}
            </TabPanel>
            {/* user Connections  */}
            <TabPanel>
              <ConnectedAllUser></ConnectedAllUser>
            </TabPanel>
            {/* user fllowing and flowers */}
            <TabPanel>
              <AllUsers />
            </TabPanel>
            {/* user Connect Request */}
            <TabPanel>
              <ConfirmRequset></ConfirmRequset>
            </TabPanel>
            {/* User Event*/}
            <TabPanel>
              <AllEvents />
            </TabPanel>
            {/* user Pages  */}
            <TabPanel>
              <UserFollowing></UserFollowing>
            </TabPanel>
            {/* user Newslater */}
            <TabPanel>
              <UserArticle />
            </TabPanel>
          </div>
        </div>
      </Tabs>
    </div>
  );
};

export default MyNetwork;
