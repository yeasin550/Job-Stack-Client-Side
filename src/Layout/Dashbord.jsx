import React, { useContext } from "react";
import { AiFillHome, AiFillMessage, AiFillShopping } from "react-icons/ai";
import { FaUserCircle, FaUserFriends, FaUsers } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import useAdmin from "../Hooks/useAdmin";

const Dashbord = () => {
  const { user } = useContext(AuthContext);
 const [isAdmin] = useAdmin();
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
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

          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-xl font-semibold">
            <div className="flex flex-col items-center mt-6 mb-5 -mx-2">
              <img
                className="object-cover w-24 h-24 mx-2 rounded-full"
                src={user?.photoURL}
                alt="avatar"
                draggable="false"
              />
              <Link to="/profile">
                <h4 className="mx-2 mt-2 font-medium text-gray-800  hover:underline">
                  {user?.displayName}
                </h4>
              </Link>
              <p className="mx-2 mt-1 text-sm font-medium text-gray-600  hover:underline">
                {user?.email}
              </p>
            </div>
            {/* Sidebar content here */}
            <>
              <Link to="/dashbord/alluser">
                <li>
                  <a>
                    <FaUsers />
                    All User
                  </a>
                </li>
              </Link>
            </>
            <hr className="border-t-stone-950 mt-5 mb-5" />
            <>
              <Link to="/">
                <li>
                  <a>
                    <AiFillHome />
                    Home
                  </a>
                </li>
              </Link>
              <Link to="/mynetwork">
                <li>
                  <a>
                    <FaUserFriends />
                    My Networks
                  </a>
                </li>
              </Link>
              <Link to="/jobsroute">
                <li>
                  <a>
                    <AiFillShopping />
                    Jobs
                  </a>
                </li>
              </Link>
              <Link to="/massageroute">
                <li>
                  <a>
                    <AiFillMessage />
                    Messaging
                  </a>
                </li>
              </Link>
              <Link to="/profile">
                <li>
                  <a>
                    <FaUserCircle />
                    Profile
                  </a>
                </li>
              </Link>
            </>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashbord;
