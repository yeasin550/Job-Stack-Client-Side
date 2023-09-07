import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../assets/logo/logo.png";
import { AuthContext } from "../../../Providers/AuthProvider";
import {
  FaAngleDown,
  FaBell,
  FaHome,
  FaRegCommentDots,
  FaShoppingBag,
  FaUserAlt,
  FaUserFriends,
} from "react-icons/fa";
import useSingleUser from "../../../Hooks/useSingleUser";
import useAdmin from "../../../Hooks/useAdmin";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  const [singleUser, refetch] = useSingleUser();
  const single = singleUser[0];
  const navigate = useNavigate();
  const [isAdmin] = useAdmin();
  // user logout function
  const handleLogOut = () => {
    logOut()
      .then((result) => {
        console.log(result);
      })
      .catch((error) => console.log(error));
  };

  return (
    <nav className="w-full banner text-white sticky z-50 top-0 left-0">
      <div className="justify-between px-5 mx-auto lg:max-w-screen-xl md:items-center md:flex sticky ">
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <div className="navbar-start ml-0">
            <Link to="/">
              <img className="h-10 md:h-full" src={logo} alt="logo" />
            </Link>
          </div>

          <div className="md:hidden">
            <button
              className="p-2 text-white rounded-md outline-none focus:border-gray-400 focus:border"
              onClick={() => setNavbar(!navbar)}
            >
              {navbar ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        <div
          className={` pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
            navbar ? "block" : "hidden"
          }`}
        >
          <ul className="items-center justify-center text-center text-lg space-y-8 md:flex md:space-x-6 md:space-y-0">
            <li className="flex justify-center">
              <Link className="flex items-center gap-1" to="/">
                Home <FaHome />
              </Link>
            </li>

            {user ? (
              <li className="flex justify-center">
                <Link className="flex items-center gap-1" to="/mynetwork">
                  My Networks
                  <FaUserFriends />
                </Link>
              </li>
            ) : (
              ""
            )}

            {user ? (
              <li className="flex justify-center">
                <Link className="flex items-center gap-1" to="/jobsroute">
                  Jobs <FaShoppingBag />
                </Link>
              </li>
            ) : (
              ""
            )}
            {user ? (
              <li className="flex justify-center">
                <Link className="flex items-center gap-1" to="/massageroute">
                  Messaging
                  <FaRegCommentDots />
                </Link>
              </li>
            ) : (
              ""
            )}
            {user && (
              <li className="flex justify-center">
                <Link className="flex items-center gap-1" to="/notifications">
                  Notifications
                  <FaBell />
                </Link>
              </li>
            )}
            {/* pages  */}
            <li>
              <div className="dropdown dropdown-hover">
                <label className="flex items-center gap-1" tabIndex={0}>
                  Pages <FaAngleDown />
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu p-2 bg-blue-500 rounded-box w-52"
                >
                  <li>
                    <Link to="about">About Us</Link>
                  </li>
                  <li>
                    <Link to="contact">Contact</Link>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>

        <div
          className={` pb-3 mt-8  md:block md:pb-0 md:mt-0  ${
            navbar ? "block" : "hidden"
          }`}
        >
          {user ? (
            ""
          ) : (
            <Link to="/login">
              <button className="relative flex items-center justify-center text-lg mr-4 gap-2 px-5 py-2.5  bg-green-500 rounded-lg shadow-md transition-all hover:shadow-lg border-2 text-white hover:border-green-500">
                Login
              </button>
            </Link>
          )}

          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              {single?.image ? (
                <div className="w-20 rounded-full border border-blue-500">
                  <img src={single?.image} alt="logo" />
                </div>
              ) : (
                <FaUserAlt className="w-20 rounded-full border border-blue-500"></FaUserAlt>
              )}
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
           
              <li>
                <button
                  onClick={() => navigate("/profile")}
                  className="btn btn-sm w-full bg-green-600 text-white hover:bg-green-500 hover:text-white"
                >
                  Profile
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("/profile")}
                  className="btn btn-sm w-full bg-blue-600 text-white hover:bg-blue-500 hover:text-white"
                >
                  settings
                </button>
              </li>
              <li>
                <button
                  onClick={handleLogOut}
                  className="btn btn-sm w-full bg-rose-600 text-white hover:bg-rose-500 hover:text-white"
                >
                  LogOut
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
