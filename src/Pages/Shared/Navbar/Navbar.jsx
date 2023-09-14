import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../assets/logo/Colorful_Modern_K_Letter_Free_Logo-removebg-preview (2).png";
import { AuthContext } from "../../../Providers/AuthProvider";
import {
  FaAngleDown,
  FaBell,
  FaHome,
  FaSun,
  FaMoon,
  FaRegCommentDots,
  FaShoppingBag,
  FaUserAlt,
  FaUserFriends,

} from "react-icons/fa";
import useSingleUser from "../../../Hooks/useSingleUser";
import useAdmin from "../../../Hooks/useAdmin";
import { useEffect } from "react";

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
  // dark theme
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme : "light";
  });
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };


  return (
    <nav className="w-full banner text-white sticky lg:px-8 z-40 top-0 left-0">
      <div className="justify-between px-5 mx-auto lg:max-w-screen-xl md:items-center md:flex sticky ">
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <div className="navbar-start flex justify-center items-center  ml-0">
            <img className="w-12 md:w-12" src={logo} alt="logo" />
            <p className="text-[20px]  font-bold font-sans">JOBSTACK</p>
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
          className={` pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
            }`}
        >
          <ul className="items-center justify-center text-center text-lg space-y-8 md:flex md:space-x-6 md:space-y-0">
            <li className="flex justify-center ">
              <Link to="/">
                <FaHome className="mx-auto" />
                Home
              </Link>
            </li>

            {user ? (
              <li className="">
                <Link to="/myNetwork">
                  <FaUserFriends className="mx-auto" />
                  My Networks
                </Link>
              </li>
            ) : (
              ""
            )}

            {user ? (
              <li className="flex justify-center">
                <Link to="/jobsroute">
                  <FaShoppingBag className="mx-auto" />
                  Jobs
                </Link>
              </li>
            ) : (
              ""
            )}
            {user ? (
              <li className="flex justify-center">
                <Link to="/massageroute">
                  <FaRegCommentDots className="mx-auto" /> Messaging
                </Link>
              </li>
            ) : (
              ""
            )}
            {user && (
              <li className="flex justify-center">
                <Link to="/notification">
                  <FaBell className="mx-auto" /> Notifications
                </Link>
              </li>
            )}
            {/* pages  */}
            <li>
              <div className="dropdown dropdown-hover">
                <label tabIndex={0}>
                  <FaAngleDown className="mx-auto" />
                  Pages
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
                  <li>
                    <Link to="review">Review</Link>
                  </li>
                  <li>
                    <Link to="faq">FAQ</Link>
                  </li>
                  <li>
                    <Link to="articles-news">Articles</Link>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>

        <div
          className={` pb-3 mt-8  md:block md:pb-0 md:mt-0  ${navbar ? "block" : "hidden"
            }`}
        >
          <div className="dropdown dropdown-end flex justify-center items-center gap-3">
            {user ? (
              <div>
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  {single?.image ? (
                    <div className="w-20 rounded-full border border-blue-500">
                      <img src={single?.image} alt="logo" />
                    </div>
                  ) : (
                    <div className="w-20 rounded-full text-yellow-400 shadow-xl border-2  bg-gray-600 border-gray-500">
                      <FaUserAlt className="w-full h-full"></FaUserAlt>
                    </div>
                  )}
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <button
                      onClick={() => navigate("/profile")}
                      className="btn btn-sm w-full mb-1"
                    >
                      Profile
                    </button>
                  </li>
                  {
                    isAdmin && <li>
                      <button
                        onClick={() => navigate("/dashbord/adminhome")}
                        className="btn btn-sm w-full  mb-1"
                      >
                        DashBoard
                      </button>
                    </li>
                  }
                  <li>
                    <button
                      onClick={() => navigate("/profile")}
                      className="btn btn-sm w-full  mb-1"
                    >
                      settings
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={handleLogOut}
                      className="btn btn-sm w-full  mb-1"
                    >
                      LogOut
                    </button>
                  </li>
                </ul>
              </div>
            ) : (
              <button
                className="btn btn-sm hover:bg-gray-400 hover:text-white  border-none"
                onClick={() => navigate("/login")}
              >
                Login
              </button>
            )}

            <div onClick={handleTheme}>
              {theme === "dark" ? (
                <FaMoon
                  className="transform scale-x-[-1] bg-gray-800 text-white rounded-full p-2"
                  size={32}
                />
              ) : (
                <FaSun
                  className="bg-white text-yellow-500 rounded-full p-2"
                  size={32}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

