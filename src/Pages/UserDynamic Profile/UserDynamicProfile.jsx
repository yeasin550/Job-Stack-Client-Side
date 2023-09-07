import React, { useState } from "react";
import { BiMessage } from "react-icons/bi";
import { FaGraduationCap, FaUserAlt } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useAxioSequre from "../../Hooks/useAxiosSequre";
import { useQuery } from "@tanstack/react-query";
const UserDynamicProfile = () => {

    const { id } = useParams();
    console.log(id);
    const [axiosSequre] = useAxioSequre();
    //  activie tabindex set this state 
    const [tabIndex, setTabIndex] = useState(0);
    //set active tab design function
    const [active, setActive] = useState("");
    const clickactive = (active) => {
        setActive(active);
    };

    const { data: dynamicuser = [] } = useQuery(['dynamicuser', id], async () => {
        const res = await axiosSequre.get(`/dynamicuser/${id}`)
        return res.data;
    })

    const { data: userEducations = [] } = useQuery(['userEducations',dynamicuser?.email], async () => {
        const res = await axiosSequre.get(`/education/${dynamicuser?.email}`)
        return res.data;
    })

    const { data: selfPost = [] } = useQuery(['selfPost',dynamicuser?.email], async () => {
        const res = await axiosSequre.get(`/selfpost/${dynamicuser?.email}`)
        return res.data;
    })

    const universitys = userEducations?.filter(usereducation => usereducation?.category === 'university');
    const collages = userEducations?.filter(usereducation => usereducation?.category === 'collage');
    const schools = userEducations?.filter(usereducation => usereducation?.category === 'school');



    return (
        //div main container
        <div className="mt-6 mb-24 lg:px-44">
            {/* second container */}
            <div>
                <div className="border profile-shadow rounded-md">
                    {/* background image*/}
                    <div className="w-full h-[300px] relative">
                        {dynamicuser?.image ? <img className="rounded-t-md w-full h-full" src={dynamicuser?.image} alt="logo" /> :
                            <img className="rounded-t-md w-full h-full" src="https://i.ibb.co/3vVkcNV/download-2.jpg" alt="logo" />
                        }
                    </div>
                    {/* user picture and details  */}
                    <div className="flex justify-start px-4 relative  gap-5">
                        <div className="w-48 h-48  relative">
                            {
                                dynamicuser?.image ? <img className="w-44  h-44 border border-blue-300 rounded-full absolute -top-14 bg-gray-300  " src={dynamicuser?.image} alt="logo" /> :
                                    <FaUserAlt className="w-44 p-2 h-44 border rounded-full absolute -top-14 bg-gray-300"></FaUserAlt>
                            }
                        </div>
                        <div className="mt-5">
                            <div>
                                <p className="text-3xl font-bold font-sans">{dynamicuser?.name}</p>
                                <p className="text-[18px] font-sans font-semibold">Inter National university of Schoolars</p>
                                <p>Dhaka Bangladesh</p>
                                <p className="text-blue-500">Connection  502</p>
                            </div>
                        </div>
                        <div className="flex absolute bottom-2 right-2  gap-4">
                            <button className="btn border-none  btn-md hover:bg-blue-700 hover:text-white"><FaUserAlt></FaUserAlt>Add Connect</button>
                            <button className="btn bg-blue-500 text-white btn-md  hover:border-blue-500 hover:bg-none hover:text-black"><BiMessage></BiMessage> Massage</button>
                        </div>
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
                                className={` cursor-pointer text ${active == "post" ? "active cursor-pointer" : ""
                                    }`}
                            >
                                Post
                            </Tab>
                            <Tab
                                onClick={() => clickactive("about")}
                                className={` cursor-pointer text ${active == "about" ? "active cursor-pointer" : ""
                                    }`}
                            >
                                About
                            </Tab>
                            <Tab
                                onClick={() => clickactive("jobpost")}
                                className={` cursor-pointer text ${active == "jobpost" ? "active cursor-pointer" : ""
                                    }`}
                            >
                                Skills
                            </Tab>
                            <Tab
                                onClick={() => clickactive("Project")}
                                className={` cursor-pointer text ${active == "Project" ? "active cursor-pointer" : ""
                                    }`}
                            >
                                Project
                            </Tab>
                            <Tab
                                onClick={() => clickactive("workexperians")}
                                className={` cursor-pointer text ${active == "workexperians" ? "active cursor-pointer" : ""
                                    }`}
                            >
                                Work Experians
                            </Tab>
                            <Tab
                                onClick={() => clickactive("more")}
                                className={` cursor-pointer text ${active == "more" ? "active cursor-pointer" : ""
                                    }`}
                            >
                                More
                            </Tab>
                        </TabList>
                        {/* users self  post */}
                        <TabPanel>

                        </TabPanel>
                        {/* user job post job post */}
                        <TabPanel>
                            <div className="grid grid-cols-2 gap-4">
                                <div className='shadowdiv border p-4  rounded-md'>
                                    <h1>Intro</h1>
                                    <div></div>

                                </div>
                                <div className='shadowdiv border p-4  rounded-md'>
                                    <h1>Education</h1>
                                    <div>
                                        <h1>University</h1>
                                        {
                                            universitys?.map(university => <div key={university?._id} className='flex justify-between items-center'>
                                                <div className='flex gap-4'>

                                                    <FaGraduationCap className='text-2xl'></FaGraduationCap>
                                                    <h1>{university?.university}</h1>
                                                    <div className='flex'>
                                                        <p>{university?.startyear}</p>-
                                                        <p>{university?.endyear}</p>-
                                                        <p>{university?.studentStatus}</p>
                                                    </div>
                                                    <p>{university?.degree}</p>
                                                </div>
                                            </div>)
                                        }
                                    </div>
                                    <div>
                                        <h1>University</h1>
                                        {
                                            universitys?.map(university => <div key={university?._id} className='flex justify-between items-center'>
                                                <div className='flex gap-4'>

                                                    <FaGraduationCap className='text-2xl'></FaGraduationCap>
                                                    <h1>{university?.university}</h1>
                                                    <div className='flex'>
                                                        <p>{university?.startyear}</p>-
                                                        <p>{university?.endyear}</p>-
                                                        <p>{university?.studentStatus}</p>
                                                    </div>
                                                    <p>{university?.degree}</p>
                                                </div>
                                            </div>)
                                        }
                                    </div>
                                    <div>
                                        <h1>University</h1>
                                        {
                                            universitys?.map(university => <div key={university?._id} className='flex justify-between items-center'>
                                                <div className='flex gap-4'>

                                                    <FaGraduationCap className='text-2xl'></FaGraduationCap>
                                                    <h1>{university?.university}</h1>
                                                    <div className='flex'>
                                                        <p>{university?.startyear}</p>-
                                                        <p>{university?.endyear}</p>-
                                                        <p>{university?.studentStatus}</p>
                                                    </div>
                                                    <p>{university?.degree}</p>
                                                </div>
                                            </div>)
                                        }
                                    </div>
                                </div>

                            </div>

                        </TabPanel>
                        {/* user about  */}
                        <TabPanel>

                        </TabPanel>
                        {/* user connect   */}
                        <TabPanel>

                        </TabPanel>
                        {/* user Connect request */}
                        <TabPanel>

                        </TabPanel>
                        {/* user more featuesr add  */}
                        <TabPanel>

                        </TabPanel>
                    </Tabs>
                </div>
            </div>
        </div>
    );
};

export default UserDynamicProfile;



