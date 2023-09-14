import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import SelfPostDesign from "../../Components/SelfPostDesign/SelfPostDesign";
import useSelfPost from "../../../Hooks/useSelfPost";
import ConnectedAllUser from "../../Components/ConnectedAllUsers/ConnectedAllUser";
import AllUsers from "../AllUsers/AllUsers";
const MyNetwork = () => {
  const [allselfdata] = useSelfPost();
  const [tabIndex, setTabIndex] = useState(0);
  const [active, setActive] = useState("");
  const clickactive = (active) => {
    setActive(active);
  };
  return (
    <div className="lg:px-24 px-2 py-10">
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <div className="lg:flex gap-1">
          <div className="shadowdiv border rounded-md lg:w-80 w-full h-100%">
            <TabList className="flex  flex-col justify-center items-start px-5 py-10 gap-6">
              <Tab
                onClick={() => clickactive("post")}
                className={` cursor-pointer userinfotext ${
                  active == "post" ? "activetab cursor-pointer" : ""
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
                Group
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
                Pages
              </Tab>
              <Tab
                onClick={() => clickactive("more")}
                className={` cursor-pointer userinfotext ${
                  active == "more" ? "activetab cursor-pointer" : ""
                }`}
              >
                NewsLater
              </Tab>
            </TabList>
          </div>
          <div className="w-full rounded-md shadowdiv border">
            {/* user Activities */}
            <TabPanel>
              <div className="grid lg:grid-cols-2 place-items-center h-screen gap-10 overflow-auto">
                {allselfdata?.map((selfpost) => (
                  <SelfPostDesign
                    key={selfpost?._id}
                    selfpost={selfpost}
                  ></SelfPostDesign>
                ))}
              </div>
            </TabPanel>
            {/* user Connections  */}
            <TabPanel>
              <ConnectedAllUser></ConnectedAllUser>
            </TabPanel>
            {/* user fllowing and flowers */}
            <TabPanel>
              <AllUsers />
            </TabPanel>
            {/* user Group */}
            <TabPanel>this is a group Pages</TabPanel>
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

export default MyNetwork;
