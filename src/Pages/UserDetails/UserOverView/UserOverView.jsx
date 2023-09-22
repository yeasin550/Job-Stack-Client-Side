import React from "react";
import {
  FaGraduationCap,
  FaHome,
  FaShoppingBag,
  FaPhone,
  FaCloudversify,
  FaBirthdayCake,
} from "react-icons/fa";
import useSingleUser from "../../../Hooks/useSingleUser";
import { FcLike } from "react-icons/fc";
import useWorkExperians from "../../../Hooks/useWorkExperians";
import useEducation from "../../../Hooks/useEducation";
const UserOverView = () => {
  const [singleUser] = useSingleUser();
  const user = singleUser[0];
  console.log(user);
  const [workexperians] = useWorkExperians();
  const [userEducations] = useEducation();
  const userVersity = userEducations?.filter(
    (edu) => edu.category === "university"
  );

  return (
    <>
      <div className="px-6 py-6">
        {/* user work overview  */}
        {workexperians && (
          <div className="flex justify-between items-center mt-2">
            <div className="flex gap-10">
              <FaShoppingBag className="text-2xl text-yellow-700"></FaShoppingBag>
              <div className="flex ">
                {workexperians?.map((work) => (
                  <h1 key={work?._id} className="font-sans">
                    <span className="mr-1">{work?.position}</span>at
                    <span className="mr-1 ml-1  text-blue-500">
                      {work?.company}
                    </span>
                    ,
                  </h1>
                ))}
              </div>
            </div>
            <div className="dropdown dropdown-top dropdown-end">
              <label
                tabIndex={0}
                className="btn btn-circle btn-sm text-[20px] font-sans font-bold bg-gray-200  pb-4 mt-2"
              >
                ...
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content  z-[1] menu p-2 shadow bg-white dark:text-black rounded-box w-52"
              >
                <li>
                  <a>Edit Workplace</a>
                </li>
                <li>
                  <a>Delet WorkPlace</a>
                </li>
              </ul>
            </div>
          </div>
        )}
        {/* user education overview  */}
        {userVersity && (
          <div className="flex justify-between items-center mt-2">
            <div className="flex gap-10">
              <FaGraduationCap className="text-2xl text-black"></FaGraduationCap>
              <div>
                {userVersity?.slice(0, 1)?.map((education) => (
                  <h1 key={education?._id} className="font-sans">
                    Studies at{" "}
                    <span className="text-blue-500">
                      {education?.university}{" "}
                    </span>
                    From {education?.startyear} <span> to </span>
                    {education?.endyear}
                    <span className="ml-1 text-blue-500">
                      {education?.studentStatus}
                    </span>
                  </h1>
                ))}
              </div>
            </div>
            <div className="dropdown dropdown-top dropdown-end">
              <label
                tabIndex={0}
                className="btn btn-circle btn-sm text-[20px] font-sans font-bold bg-white dark:text-black  pb-4 mt-2"
              >
                ...
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-white-300 rounded-box w-52"
              >
                <li>
                  <a>Edit Workplace</a>
                </li>
                <li>
                  <a>Delet WorkPlace</a>
                </li>
              </ul>
            </div>
          </div>
        )}
        {/* user current city  */}
        {user?.currentLocation && (
          <div className="flex justify-between items-center mt-2">
            <div className="flex gap-10">
              <FaHome className="text-2xl text-blue-500"></FaHome>
              <h1 className=" font-sans">
                {" "}
                Lives in
                <span className="text-[18px] ml-2 text-blue-500">
                  {user?.currentLocation}
                </span>
              </h1>
            </div>
            <div className="dropdown dropdown-top dropdown-end">
              <label
                tabIndex={0}
                className="btn btn-circle btn-sm text-[20px] font-sans font-bold bg-white dark:text-black  pb-4 mt-2"
              >
                ...
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-white-300 rounded-box w-52"
              >
                <li>
                  <a>Edit Workplace</a>
                </li>
                <li>
                  <a>Delet WorkPlace</a>
                </li>
              </ul>
            </div>
          </div>
        )}
        {/* user home city  */}
        {user?.homeLocation && (
          <div className="flex justify-between items-center mt-2">
            <div className="flex gap-10">
              <FaHome className="text-2xl text-blue-500"></FaHome>
              <h1 className=" font-sans">
                From
                <span className="text-[18px] text-blue-500 ml-2">
                  {user?.homeLocation}
                </span>
              </h1>
            </div>
            <div className="dropdown dropdown-top dropdown-end">
              <label
                tabIndex={0}
                className="btn btn-circle btn-sm text-[20px] font-sans font-bold bg-gray-200  pb-4 mt-2"
              >
                ...
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-white-300 rounded-box w-52"
              >
                <li>
                  <a>Edit Workplace</a>
                </li>
                <li>
                  <a>Delet WorkPlace</a>
                </li>
              </ul>
            </div>
          </div>
        )}
        {/* user marride Status  */}
        <div className="flex justify-between items-center mt-2">
          <div className="flex gap-10">
            <FcLike className="text-2xl text-gray-500" />
            <h1 className=" font-sans">
              Marride Status <span className="text-blue-500">Single</span>
            </h1>
          </div>
          <div className="dropdown dropdown-top dropdown-end">
            <label
              tabIndex={0}
              className="btn btn-circle btn-sm text-[20px] font-sans font-bold bg-gray-200  pb-4 mt-2"
            >
              ...
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-white-300 rounded-box w-52"
            >
              <li>
                <a>Edit Workplace</a>
              </li>
              <li>
                <a>Delet WorkPlace</a>
              </li>
            </ul>
          </div>
        </div>
        {/* birthdate  */}
        {user?.date && (
          <div className="flex justify-between items-center mt-2">
            <div className="flex gap-10">
              <FaBirthdayCake className="text-2xl text-rose-700" />
              <h1 className="font-sans">
                Date Of Birth{" "}
                <span className="ml-2 text-blue-500">
                  {user?.date}-{user?.month}-{user?.year}
                </span>
              </h1>
            </div>
            <div className="dropdown dropdown-top dropdown-end">
              <label
                tabIndex={0}
                className="btn btn-circle btn-sm text-[20px] font-sans font-bold bg-gray-200  pb-4 mt-2"
              >
                ...
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-white-300 rounded-box w-52"
              >
                <li>
                  <a>Edit Workplace</a>
                </li>
                <li>
                  <a>Delet WorkPlace</a>
                </li>
              </ul>
            </div>
          </div>
        )}
        {/* user phone no  */}
        {user?.phoneNumber && (
          <div className="flex justify-between items-center mt-2">
            <div className="flex gap-10">
              <FaPhone className="text-2xl text-green-600"></FaPhone>
              <div className="flex gap-2">
                <p>Mobile</p>
                <h1 className="font-bold font-sans text-blue-500">
                  {user?.phoneNumber}
                </h1>
              </div>
            </div>
            <div className="dropdown dropdown-top dropdown-end">
              <label
                tabIndex={0}
                className="btn btn-circle btn-sm text-[20px] font-sans font-bold bg-gray-200  pb-4 mt-2"
              >
                ...
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-white-300 rounded-box w-52"
              >
                <li>
                  <a>Edit Workplace</a>
                </li>
                <li>
                  <a>Delet WorkPlace</a>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default UserOverView;
