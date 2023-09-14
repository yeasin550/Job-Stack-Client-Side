import React, { useState } from "react";
import useAxioSequre from "../../../../Hooks/useAxiosSequre";
import { useQuery } from "@tanstack/react-query";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { FaUsers } from "react-icons/fa";
import { BsBagFill } from "react-icons/bs";
import { TfiWrite } from "react-icons/tfi";
import { MdOutlineContactPage } from "react-icons/md";
import UserChart from "./UserChart";
import JobChats from "./JobCharts";
import JobapplyChats from "./JobapplyChats";
import PostChart from "./PostCharts";

const AdminHome = () => {
  const [axiosSecure] = useAxioSequre();
  const [countOn, setCountOn] = useState(false);

  const { data: stats = {} } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure("/admin-stats");
      return res.data;
    },
  });

  return (
    <div className="mt-10">
      <div className="grid md:grid-cols-4 gap-10">
        {/* user */}
        <div className="px-10 py-4 shadow banner text-white rounded-xl">
          <ScrollTrigger
            className="text-3xl font-bold "
            onEnter={() => setCountOn(true)}
            onExit={() => setCountOn(false)}
          >
            <div className="flex items-center justify-center text-5xl">
              <div className="flex justify-start -ml-5">
                <FaUsers className="text-3xl" />
              </div>
              <div className="ml-2">
                <div className=" text-center text-5xl">
                  {countOn && (
                    <CountUp
                      start={0}
                      end={1579}
                      duration={3}
                      delay={0}
                    />
                  )}
                </div>
                <div className=" text-white text-center text-2xl">Users</div>
              </div>
            </div>
          </ScrollTrigger>
        </div>
        {/* Job */}
        <div className="px-10 py-4 shadow banner text-white rounded-xl">
          <ScrollTrigger
            className="text-3xl font-bold "
            onEnter={() => setCountOn(true)}
            onExit={() => setCountOn(false)}
          >
            <div className="flex items-center justify-center text-5xl">
              <div className="flex justify-start -ml-5">
                <BsBagFill className="text-3xl" />
              </div>
              <div className="ml-2">
                <div className=" text-center text-5xl">
                  {countOn && (
                    <CountUp start={0} end={1328} duration={3} delay={0} />
                  )}
                </div>
                <div className=" text-white text-center text-2xl">Jobs</div>
              </div>
            </div>
          </ScrollTrigger>
        </div>

        {/* selfpost */}
        <div className="px-10 py-4 shadow banner text-white rounded-xl">
          <ScrollTrigger
            className="text-3xl font-bold "
            onEnter={() => setCountOn(true)}
            onExit={() => setCountOn(false)}
          >
            <div className="flex items-center justify-center text-5xl">
              <div className="flex justify-start -ml-5">
                <TfiWrite className="text-3xl" />
              </div>
              <div className="ml-2">
                <div className=" text-center text-5xl">
                  {countOn && (
                    <CountUp
                      start={0}
                      end={1183}
                      duration={3}
                      delay={0}
                    />
                  )}
                </div>
                <div className=" text-white text-center text-2xl">Post</div>
              </div>
            </div>
          </ScrollTrigger>
        </div>
        {/* job apply */}
        <div className="px-10 py-4 shadow banner text-white rounded-xl">
          <ScrollTrigger
            className="text-3xl font-bold "
            onEnter={() => setCountOn(true)}
            onExit={() => setCountOn(false)}
          >
            <div className="flex items-center justify-center text-5xl">
              <div className="flex justify-start -ml-5">
                <MdOutlineContactPage className="text-3xl" />
              </div>
              <div className="ml-2">
                <div className=" text-center text-5xl">
                  {countOn && (
                    <CountUp
                      start={0}
                      end={1294}
                      duration={3}
                      delay={0}
                    />
                  )}
                </div>
                <div className=" text-white text-center text-2xl">Jobapply</div>
              </div>
            </div>
          </ScrollTrigger>
        </div>
      </div>
      {/* Charts */}
      <div className="flex flex-col gap-14 mt-24">
        <UserChart />
        <JobChats />
        <PostChart/>
      <JobapplyChats />
      </div>
    </div>
  );
};

export default AdminHome;
