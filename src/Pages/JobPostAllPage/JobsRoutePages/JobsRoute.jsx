import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useJobPost from '../../../Hooks/useJobPost';
import JobPostDesign from '../../Components/JobPostDesign/JobPostDesign';

const JobsRoute = () => {
    const [jobposts] = useJobPost();
    const [tabIndex, setTabIndex] = useState(0);
    const [active, setActive] = useState("");
    const clickactive = (active) => {
        setActive(active);
    };

    return (
        <div className='px-16 py-12 '>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <div className='flex gap-1'>
                    <div className='shadowdiv border rounded-md w-80 h-100%'>
                        <TabList className="flex flex-col justify-center items-start px-5 py-10 gap-6">
                            <Tab onClick={() => clickactive("post")} className={` cursor-pointer userinfotext ${active == 'post' ? 'activetab cursor-pointer' : ''}`}>Activities</Tab>
                            <Tab onClick={() => clickactive("activities")} className={` cursor-pointer userinfotext ${active == 'activities' ? 'activetab cursor-pointer' : ''}`}>Connections</Tab>
                            <Tab onClick={() => clickactive("jobpost")} className={` cursor-pointer userinfotext ${active == 'jobpost' ? 'activetab cursor-pointer' : ''}`}>Flowing & Flowars</Tab>
                            <Tab onClick={() => clickactive("group")} className={` cursor-pointer userinfotext ${active == 'group' ? 'activetab cursor-pointer' : ''}`}>Group</Tab>
                            <Tab onClick={() => clickactive("about")} className={` cursor-pointer userinfotext ${active == 'about' ? 'activetab cursor-pointer' : ''}`}>Event</Tab>
                            <Tab onClick={() => clickactive("connect")} className={` cursor-pointer userinfotext ${active == 'connect' ? 'activetab cursor-pointer' : ''}`}>Pages</Tab>
                            <Tab onClick={() => clickactive("more")} className={` cursor-pointer userinfotext ${active == 'more' ? 'activetab cursor-pointer' : ''}`}>NewsLater</Tab>
                        </TabList>
                    </div>
                    <div className='w-full rounded-md shadowdiv border'>
                        {/* user Activities */}
                        <TabPanel>
                            <div className='grid lg:grid-cols-2  gap-5 px-5 py-4'>
                                {
                                    jobposts?.map(posts => <JobPostDesign key={posts._id} posts={posts}></JobPostDesign>)
                                }
                            </div>
                        </TabPanel>
                        {/* user Connections  */}
                        <TabPanel>
                            connections
                        </TabPanel>
                        {/* user fllowing and flowers */}
                        <TabPanel>
                            Fllowing and Fllowers
                        </TabPanel>
                        {/* user Group */}
                        <TabPanel>
                            Group
                        </TabPanel>
                        {/* User Event*/}
                        <TabPanel>
                            Event
                        </TabPanel>
                        {/* user Pages  */}
                        <TabPanel>
                            Pages
                        </TabPanel>
                        {/* user Newslater */}
                        <TabPanel>
                            NewsLater
                        </TabPanel>
                    </div>
                </div>
            </Tabs>
        </div>
    );
};

export default JobsRoute;