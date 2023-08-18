import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './UserInfo.css'

const UserInfo = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [active, setActive] = useState("");
  const clickactive = (active) => {
    setActive(active);
  };

  return (
    <div>
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <div className='flex gap-1'>
          <div className='profile-shadow border w-80 h-full'>
            <TabList className="flex flex-col justify-center items-start pl-5 py-10 gap-6">
              <Tab onClick={() => clickactive("post")} className={` cursor-pointer text ${active == 'post' ? 'active cursor-pointer' : ''}`}>Overview</Tab>
              <Tab onClick={() => clickactive("jobpost")} className={` cursor-pointer text ${active == 'jobpost' ? 'active cursor-pointer' : ''}`}>Education</Tab>
              <Tab onClick={() => clickactive("about")} className={` cursor-pointer text ${active == 'about' ? 'active cursor-pointer' : ''}`}>Work Experians</Tab>
              <Tab onClick={() => clickactive("connect")} className={` cursor-pointer text ${active == 'connect' ? 'active cursor-pointer' : ''}`}>Skills</Tab>
              <Tab onClick={() => clickactive("group")} className={` cursor-pointer text ${active == 'group' ? 'active cursor-pointer' : ''}`}>career break</Tab>
              <Tab onClick={() => clickactive("more")} className={` cursor-pointer text ${active == 'more' ? 'active cursor-pointer' : ''}`}>More</Tab>

            </TabList>
          </div>
          <div className='w-full profile-shadow border'>
            <TabPanel>
              nissansd

            </TabPanel>
            <TabPanel>

              nissandsf
            </TabPanel>
            <TabPanel>
              nissan
            </TabPanel>
            <TabPanel>

              boksdfasdf
            </TabPanel>
            <TabPanel>

              nissan=-iij
            </TabPanel>
            <TabPanel>

              bokadsdfs
            </TabPanel>
          </div>
        </div>
      </Tabs>
    </div>


  );
};

export default UserInfo;