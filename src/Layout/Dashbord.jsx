import React, { useContext } from "react";
import { AiFillHome, AiFillMessage, AiFillShopping, AiTwotoneStar } from "react-icons/ai";
import {
  FaUserCircle,
  FaUserFriends,
  FaUsers,
  FaUserAstronaut,
  FaUsersSlash,
} from "react-icons/fa";
import { TbBrandGooglePhotos, TbMessageReport } from "react-icons/tb";
import { MdDashboard } from "react-icons/md";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import useAdmin from "../Hooks/useAdmin";
import images from '../assets/logo/Colorful_Modern_K_Letter_Free_Logo-removebg-preview (2).png'
import ActiveLink from "../Hooks/ActiveLink";
import { BiBookReader } from "react-icons/bi";

const Dashbord = () => {
  const { user } = useContext(AuthContext);
 const [isAdmin] = useAdmin();
  return (
    <div>
      <div
        className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content px-10 py-5">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open Dashbord
          </label>
          <Outlet />
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

          <ul className="menu p-4 w-64 bg-[#09867E]  min-h-full text-white text-lg">
            <div className="flex flex-col items-center mt-6 mb-5 -mx-2">
              <img
                className="object-cover w-24 h-24 mx-2 rounded-full"
                src={images}
                alt="avatar"
                draggable="false"
              />
              <ActiveLink to="/profile">
                <h4 className="mx-2 text-center font-medium text-white hover:underline">
                  JOSTACK Dashbord
                </h4>
                <h1 className=" text-center font-sans text-xl">
                  {user?.displayName}(Admin)
                </h1>
              </ActiveLink>
            </div>
            {/* Sidebar content here */}
            <>
              <ActiveLink to="/dashbord/adminhome/">
                <li>
                  <a>
                    <MdDashboard />
                    Dashboard
                  </a>
                </li>
              </ActiveLink>
              <ActiveLink to="/dashbord/alluser">
                <li>
                  <a>
                    <FaUsers />
                    Manage User
                  </a>
                </li>
              </ActiveLink>
              <ActiveLink to="/dashbord/all-articles">
                <li>
                  <a>
                    <BiBookReader />
                    All Articles
                  </a>
                </li>
              </ActiveLink>
              <ActiveLink to="/dashbord/post-report">
                <li>
                  <a>
                    <TbMessageReport />
                    Post Report
                  </a>
                </li>
              </ActiveLink>
              <ActiveLink to="/dashbord/user-report">
                <li>
                  <a>
                    <FaUsersSlash />
                    User Report
                  </a>
                </li>
              </ActiveLink>
              <ActiveLink to="/dashbord/all-review">
                <li>
                  <a>
                    <AiTwotoneStar />
                    Review
                  </a>
                </li>
              </ActiveLink>
              <ActiveLink to="/dashbord/news-articles">
                <li>
                  <a>
                    <TbBrandGooglePhotos />
                    News Articles
                  </a>
                </li>
              </ActiveLink>
            </>
            <hr className="bg-gray-400 my-5" />
            <>
              <ActiveLink to="/">
                <li>
                  <a>
                    <AiFillHome />
                    Home
                  </a>
                </li>
              </ActiveLink>
              <ActiveLink to="/mynetwork">
                <li>
                  <a>
                    <FaUserFriends />
                    My Networks
                  </a>
                </li>
              </ActiveLink>
              <ActiveLink to="/jobsroute">
                <li>
                  <a>
                    <AiFillShopping />
                    Jobs
                  </a>
                </li>
              </ActiveLink>
              <ActiveLink to="/massageroute">
                <li>
                  <a>
                    <AiFillMessage />
                    Messaging
                  </a>
                </li>
              </ActiveLink>
              <ActiveLink to="/profile">
                <li>
                  <a>
                    <FaUserCircle />
                    Profile
                  </a>
                </li>
              </ActiveLink>
            </>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashbord;
