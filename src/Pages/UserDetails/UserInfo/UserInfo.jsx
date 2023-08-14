import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './UserInfo.css'
import UserOverView from '../UserOverView/UserOverView';
import UserEducation from '../UserEducation/UserEducation';
import UserWork from '../UserWork/UserWork';
import UserSkills from '../UserSkills/UserSkills';
import ContactBasicInfo from '../ContactBasicInfo/ContactBasicInfo';

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
          <div className='profile-shadow border w-80 h-100%'>
            <TabList className="flex flex-col justify-center items-start px-5 py-10 gap-6">
              <Tab onClick={() => clickactive("post")} className={` cursor-pointer userinfotext ${active == 'post' ? 'userinfo cursor-pointer' : ''}`}>Overview</Tab>
              <Tab onClick={() => clickactive("jobpost")} className={` cursor-pointer userinfotext ${active == 'jobpost' ? 'userinfo cursor-pointer' : ''}`}>Education</Tab>
              <Tab onClick={() => clickactive("about")} className={` cursor-pointer userinfotext ${active == 'about' ? 'userinfo cursor-pointer' : ''}`}>Work Experians</Tab>
              <Tab onClick={() => clickactive("connect")} className={` cursor-pointer userinfotext ${active == 'connect' ? 'userinfo cursor-pointer' : ''}`}>Skills</Tab>
              <Tab onClick={() => clickactive("group")} className={` cursor-pointer userinfotext ${active == 'group' ? 'userinfo cursor-pointer' : ''}`}>Contact & Basic Info</Tab>
              <Tab onClick={() => clickactive("more")} className={` cursor-pointer userinfotext ${active == 'more' ? 'userinfo cursor-pointer' : ''}`}>More</Tab>

            </TabList>
          </div>
          <div className='w-full profile-shadow border'>
            {/* user OverView  */}
            <TabPanel>
             <UserOverView></UserOverView>
            </TabPanel>
            {/* user Educatio  */}
            <TabPanel>
              <UserEducation></UserEducation>
            </TabPanel>
            {/* user work Experians  */}
            <TabPanel>
               <UserWork></UserWork>
            </TabPanel>
             {/* User Skills  */}
            <TabPanel>
              <UserSkills></UserSkills>
            </TabPanel>
            {/* user contact and basic info  */}
            <TabPanel>
              <ContactBasicInfo></ContactBasicInfo>
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