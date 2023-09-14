import React from "react";
import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import UserOverview from "./UserOverview";
import useAxioSequre from "../../Hooks/useAxiosSequre";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { FaGraduationCap, FaUserAlt } from "react-icons/fa";
import WorkExprience from "./WorkExprience";

const UserAbout = () => {
  const { id } = useParams();
  console.log(id);
  const [axiosSequre] = useAxioSequre();
  const [tabIndex, setTabIndex] = useState(0);
  const [active, setActive] = useState("");
  const clickactive = (active) => {
    setActive(active);
  };

  const { data: dynamicuser = [] } = useQuery(["dynamicuser", id], async () => {
    const res = await axiosSequre.get(`/dynamicuser/${id}`);
    return res.data;
  });
  console.log(dynamicuser);

  const { data: userEducations = [] } = useQuery(
    ["userEducations", dynamicuser?.email],
    async () => {
      const res = await axiosSequre.get(`/education/${dynamicuser?.email}`);
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

  return (
    <div>
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <div className="flex gap-1">
          <div className="profile-shadow border w-80 h-100%">
            <TabList className="flex flex-col justify-center items-start px-5 py-10 gap-6">
              <Tab
                onClick={() => clickactive("post")}
                className={` cursor-pointer userinfotext ${
                  active == "post" ? "userinfo cursor-pointer" : ""
                }`}
              >
                Intro
              </Tab>
              <Tab
                onClick={() => clickactive("jobpost")}
                className={` cursor-pointer userinfotext ${
                  active == "jobpost" ? "userinfo cursor-pointer" : ""
                }`}
              >
                Education
              </Tab>
              <Tab
                onClick={() => clickactive("group")}
                className={` cursor-pointer userinfotext ${
                  active == "group" ? "userinfo cursor-pointer" : ""
                }`}
              >
                Work Experience
              </Tab>
            </TabList>
          </div>
          <div className="w-full profile-shadow border">
            {/* user OverView  */}
            <TabPanel>
              <div>
                {" "}
                <UserOverview />
              </div>
            </TabPanel>
            {/* user Education  */}

            <TabPanel>
              <div className="shadowdiv border p-4  rounded-md">
                <div className="py-4">
                  <h1>University</h1>
                  {universitys?.map((university) => (
                    <div
                      key={university?._id}
                      className="flex justify-between items-center"
                    >
                      <div className="flex gap-4">
                        <FaGraduationCap className="text-2xl"></FaGraduationCap>
                        <h1>{university?.university}</h1>
                        <div className="flex">
                          <p>{university?.startyear}</p>-
                          <p>{university?.endyear}</p>-
                          <p>{university?.studentStatus}</p>
                        </div>
                        <p>{university?.degree}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="py-4">
                  <h1>Collages</h1>
                  {collages?.map((university) => (
                    <div
                      key={university?._id}
                      className="flex justify-between items-center"
                    >
                      <div className="flex gap-4">
                        <FaGraduationCap className="text-2xl"></FaGraduationCap>
                        <h1>{university?.collage}</h1>
                        <div className="flex">
                          <p>{university?.startyear}</p>-
                          <p>{university?.endyear}</p>-
                          <p>{university?.studentStatus}</p>
                        </div>
                        <p>{university?.degree}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="py-4">
                  <h1>Schools</h1>
                  {schools?.map((university) => (
                    <div
                      key={university?._id}
                      className="flex justify-between items-center"
                    >
                      <div className="flex gap-4">
                        <FaGraduationCap className="text-2xl"></FaGraduationCap>
                        <h1>{university?.school}</h1>
                        <div className="flex">
                          <p>{university?.startyear}</p>-
                          <p>{university?.endyear}</p>-
                          <p>{university?.studentStatus}</p>
                        </div>
                        <p>{university?.degree}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabPanel>
            {/* user Work experience */}
            <TabPanel>
              <div>
                <WorkExprience />
              </div>
            </TabPanel>
          </div>
        </div>
      </Tabs>
    </div>
  );
};

export default UserAbout;
