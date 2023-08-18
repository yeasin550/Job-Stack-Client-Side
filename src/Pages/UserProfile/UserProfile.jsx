import React, { useContext, useState } from 'react';
import useAxioSequre from '../../Hooks/useAxioSequre';
import { AuthContext } from '../../Providers/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import './UserProfile.css'
import { FaPen } from 'react-icons/fa';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import UserInfo from '../UserDetails/UserInfo/UserInfo';
import SelfInfromPost from '../../Components/SelfInfromPost/SelfInfromPost';

const UserProfile = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [axiosSequre] = useAxioSequre();
    const { user } = useContext(AuthContext);
    const { data: userprofile = [], } = useQuery(['userprofile'], async () => {
        const res = await axiosSequre.get(`/users/${user?.email}`)
        return res.data;
    });
    console.log(userprofile);
    //set active tab design function
    const [active, setActive] = useState("");
    const clickactive = (active) => {
        setActive(active);
    };
    return (
        //div main container
        <div className='mt-6 mb-24 lg:px-44'>
            {/* second container */}
            <div>

                <div className='border profile-shadow rounded-md'>
                    {/* background image*/}
                    <div className='w-full h-[300px] relative'>
                        <img className='rounded-t-md w-full h-full' src="https://i.ibb.co/4g9QMky/description.jpg" alt="background image" />
                        <button htmlFor="my_modal_9" className='btn btn-circle border-none btn-md hover:bg-green-600 text-white text-[18px] bg-blue-500 absolute bottom-2 right-2'><FaPen></FaPen></button>
                    </div>
                    {/* user picture and details  */}
                    <div className='flex justify-start ml-4 gap-5'>
                        <div className='w-48 h-48  relative '>
                            <img className='w-48 h-48 border rounded-full relative -top-12' src="https://i.ibb.co/0fZvJMk/364805402-265317659588730-4531070019685307614-n.jpg" alt="" />
                            <button htmlFor="my_modal_11" className='btn btn-circle btn-sm border-none  text-white text-[14px] bg-blue-500 absolute top-24 right-4'><FaPen></FaPen></button>
                        </div>
                        <div className='mt-5'>
                            <div>
                                <p className='text-3xl font-bold font-sans'>Munimul Islam</p>
                                <p className='text-[18px] font-sans font-semibold'> InterNational University of Scholars</p>
                                <p>Dhaka, Dhaka, Bangladesh</p>
                                <p className='link text-blue-500'>32  Connection</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-end relative mr-4 -top-24'>
                        <button className='flex justify-center items-center gap-2 hover:bg-green-500 btn bg-green-500 text-white btn-sm'><FaPen></FaPen> Edit Profile</button>
                    </div>
                </div>
                <div className='mt-1'>
                    <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                        <TabList className="flex justify-center items-center border py-2 profile-shadow  gap-6 mb-8">
                            <Tab onClick={() => clickactive("post")} className={` cursor-pointer text ${active == 'post' ? 'active cursor-pointer' : ''}`}>Post</Tab>
                            <Tab onClick={() => clickactive("jobpost")} className={` cursor-pointer text ${active == 'jobpost' ? 'active cursor-pointer' : ''}`}>Job Post</Tab>
                            <Tab onClick={() => clickactive("about")} className={` cursor-pointer text ${active == 'about' ? 'active cursor-pointer' : ''}`}>About</Tab>
                            <Tab onClick={() => clickactive("connect")} className={` cursor-pointer text ${active == 'connect' ? 'active cursor-pointer' : ''}`}>Connect</Tab>
                            <Tab onClick={() => clickactive("group")} className={` cursor-pointer text ${active == 'group' ? 'active cursor-pointer' : ''}`}>Group</Tab>
                            <Tab onClick={() => clickactive("more")} className={` cursor-pointer text ${active == 'more' ? 'active cursor-pointer' : ''}`}>More</Tab>

                        </TabList>
                         {/* userSelfPost */}
                        <TabPanel>
                            <SelfInfromPost></SelfInfromPost>
                        </TabPanel>
                        <TabPanel>

                          
                        </TabPanel>
                        <TabPanel>
                            <UserInfo></UserInfo>
                        </TabPanel>
                        <TabPanel>

                            
                        </TabPanel>
                        <TabPanel>

                          
                        </TabPanel>
                        <TabPanel>

                           
                        </TabPanel>
                    </Tabs>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;