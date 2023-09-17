import React, { useState } from "react";
import { BiCommentError, BiMessage } from "react-icons/bi";
import { FaSlack, FaUserAlt } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useAxioSequre from "../../Hooks/useAxiosSequre";
import { useQuery } from "@tanstack/react-query";
import SelfPostDesign from "../Components/SelfPostDesign/SelfPostDesign";
import UserAbout from "./UserAbout";
import { BsThreeDots } from "react-icons/bs";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import toast from "react-hot-toast";
const UserDynamicProfile = () => {
  const { id } = useParams();
  // console.log(id);
  const [axiosSequre] = useAxioSequre();
  const { user } = useContext(AuthContext);
  //  activie tabindex set this state
  const [tabIndex, setTabIndex] = useState(0);
  //set active tab design function
  const [active, setActive] = useState("");
  const clickactive = (active) => {
    setActive(active);
  };

  const { data: dynamicuser = [] } = useQuery(["dynamicuser", id], async () => {
    const res = await axiosSequre.get(`/dynamicuser/${id}`);
    return res.data;
  });

  const { data: userEducations = [] } = useQuery(
    ["userEducations", dynamicuser?.email],
    async () => {
      const res = await axiosSequre.get(`/education/${dynamicuser?.email}`);
      return res.data;
    }
  );

  const { data: selfPost = [] } = useQuery(
    ["selfPost", dynamicuser?.email],
    async () => {
      const res = await axiosSequre.get(`/selfpost/${dynamicuser?.email}`);
      return res.data;
    }
  );

  const { data: skills = [] } = useQuery(
    ["skills", dynamicuser?.email],
    async () => {
      const res = await axiosSequre.get(`/skills/${dynamicuser?.email}`);
      return res.data;
    }
  );

  const { data: projects = [] } = useQuery(
    ["projects", dynamicuser?.email],
    async () => {
      const res = await axiosSequre.get(`/project/${dynamicuser?.email}`);
      return res.data;
    }
  );

  const universitys = userEducations?.filter(
    (usereducation) => usereducation?.category === "university"
  );
  const collages = userEducations?.filter(
    (usereducation) => usereducation?.category === "collage"
  );
  const schools = userEducations?.filter(
    (usereducation) => usereducation?.category === "school"
  );

  // Post Report Modla funcation
  const [reportModal, setreportModal] = useState(false);
  const openModal = () => {
    setreportModal(true);
  };
  const closeModal = () => {
    setreportModal(false);
  };

    const [selectedReasons, setSelectedReasons] = useState([]);

    const handleCheckboxChange = (reason) => {
      if (selectedReasons.includes(reason)) {
        // If the reason is already selected, remove it
        setSelectedReasons(selectedReasons.filter((item) => item !== reason));
      } else {
        // If the reason is not selected, add it
        setSelectedReasons([...selectedReasons, reason]);
      }
    };

  const handleReport = () => {
     const userreport = {
       selectedReasons,
       id,
       userName: user?.displayName,
       userPhoto: user?.photoURL,
     };
      axiosSequre.post("/user-report", userreport).then((data) => {
        if (data?.data?.insertedId) {
          toast.success("User Report Successfully");
        }
      });
    };

  const PostReport = (id) => {
    openModal();
  };


  return (
    //div main container
    <div className="mt-6 mb-24 lg:px-28">
      {/* second container */}
      <div>
        <div className="border profile-shadow rounded-md">
          {/* background image*/}
          <div className="w-full h-[300px] relative">
            {dynamicuser?.image ? (
              <img
                className="rounded-t-md w-full h-full"
                src={dynamicuser?.image}
                alt="logo"
              />
            ) : (
              <img
                className="rounded-t-md w-full h-full"
                src="https://i.ibb.co/3vVkcNV/download-2.jpg"
                alt="logo"
              />
            )}
          </div>
          {/* user picture and details  */}
          <div className="flex justify-start px-4 relative  gap-5">
            <div className="w-48 h-48  relative">
              {dynamicuser?.image ? (
                <img
                  className="w-44  h-44 border border-blue-300 rounded-full absolute -top-14 bg-gray-300  "
                  src={dynamicuser?.image}
                  alt="logo"
                />
              ) : (
                <FaUserAlt className="w-44 p-2 h-44 border rounded-full absolute -top-14 bg-gray-300"></FaUserAlt>
              )}
            </div>
            <div className="mt-5">
              <div>
                <p className="text-3xl font-bold font-sans">
                  {dynamicuser?.name}
                </p>
                <p className="text-[18px] font-sans font-semibold">
                  Inter National university of Schoolars
                </p>
                <p>Dhaka Bangladesh</p>
                <p className="text-blue-500">Connection 502</p>
              </div>
            </div>
            <div className="flex absolute bottom-2 right-2  gap-4">
              <button className="btn border-none  btn-md hover:bg-blue-700 hover:text-white">
                <FaUserAlt></FaUserAlt>Add Connect
              </button>
              <Link to="/massageroute">
                <button className="btn flex items-center bg-blue-500 text-white btn-md  hover:border-blue-500 hover:bg-none hover:text-black">
                  <BiMessage /> Massage
                </button>
              </Link>
              <button onClick={() => PostReport()} className=" ">
                <BsThreeDots />
              </button>
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
                className={` cursor-pointer text ${
                  active == "post" ? "active cursor-pointer" : ""
                }`}
              >
                Post
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
                onClick={() => clickactive("jobpost")}
                className={` cursor-pointer text ${
                  active == "jobpost" ? "active cursor-pointer" : ""
                }`}
              >
                Skills
              </Tab>
              <Tab
                onClick={() => clickactive("Project")}
                className={` cursor-pointer text ${
                  active == "Project" ? "active cursor-pointer" : ""
                }`}
              >
                Project
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
              <div className="grid lg:grid-cols-2 gap-5">
                {selfPost?.map((selfpost) => (
                  <SelfPostDesign selfpost={selfpost} key={selfpost._id} />
                ))}
              </div>
            </TabPanel>
            {/* user job post job post */}

            <TabPanel>
              <UserAbout />
            </TabPanel>

            <TabPanel>
              <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-5 justify-center">
                {skills?.map((skill) => (
                  <div className="card w-full bg-base-200 shadow-xl">
                    <div className="justify-items-center mx-auto mt-10">
                      <FaSlack className="text-4xl text-rose-500"></FaSlack>
                    </div>
                    <div className="card-body mx-auto">
                      <h2 className="card-title">{skill?.skill}</h2>
                      <p>{skill?.skillrate}</p>
                    </div>
                  </div>
                ))}
              </div>
            </TabPanel>

            {/* user about  */}
            <TabPanel>
              <div>
                {projects?.map((project) => (
                  <div
                    key={project?._id}
                    className="profile-shadow border px-4 py-4 mt-2 rounded-lg"
                  >
                    <div className="flex flex-col justify-start items-start">
                      <h1 className="font bold font-sans text-2xl">
                        {project?.projectTitle}
                      </h1>
                      <h1 className="link text-blue-500 font-bold font-sans">
                        <span>{project?.workduration}-</span>
                        {project?.duration}
                      </h1>
                      <p>{project?.projectDescription}</p>
                      <h1 className="link text-blue-500 font-bold font-sans">
                        {project?.liveLink}
                      </h1>
                      <h1 className="link text-blue-500 font-bold font-sans">
                        {project?.codeLink}
                      </h1>
                    </div>
                  </div>
                ))}
              </div>
            </TabPanel>
            {/* user connect   */}

            {/* user more featuesr add  */}
            <TabPanel></TabPanel>
            <TabPanel></TabPanel>
          </Tabs>
        </div>
      </div>
      {/* modal */}
      {reportModal && (
        <dialog
          id="my_modal_5"
          className="modal modal-bottom sm:modal-middle"
          open
        >
          <div method="dialog" className="modal-box">
            <h1 className="text-center text-2xl font-bold -mt-3 mb-3">
              Report
            </h1>
            <p className="text-center">Please select a problem</p>
            <hr />
            <div className="">
              <ul>
                <li>
                  <input
                    type="checkbox"
                    checked={selectedReasons.includes("Fakeaccount")}
                    onChange={() => handleCheckboxChange("Fakeaccount")}
                  />
                  Fake account
                </li>
                <li>
                  <input
                    type="checkbox"
                    checked={selectedReasons.includes("Fakename")}
                    onChange={() => handleCheckboxChange("Fakename")}
                  />
                  Fake name
                </li>
                <li>
                  <input
                    type="checkbox"
                    checked={selectedReasons.includes("Harassment")}
                    onChange={() => handleCheckboxChange("Harassment")}
                  />
                  Harassment
                </li>
                <li>
                  <input
                    type="checkbox"
                    checked={selectedReasons.includes("Somethingelse")}
                    onChange={() => handleCheckboxChange("Somethingelse")}
                  />
                  Something else
                </li>
              </ul>
              <button onClick={handleReport}>Report</button>
            </div>
            <div className="modal-action">
              <button
                onClick={closeModal}
                className="text-white btn btn-sm btn-circle btn-ghost absolute right-2 top-2 bg-green-500"
              >
                X
              </button>
            </div>
          </div>
        </dialog>
      )}
    </div>
  );
};

export default UserDynamicProfile;
