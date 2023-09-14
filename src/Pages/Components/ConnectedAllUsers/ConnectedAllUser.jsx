import React, { useState } from "react";

import { AiFillCaretDown } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import ConnectSingleUser from "./SingleUserCard/ConnectSingleUser";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import useAxioSequre from "../../../Hooks/useAxiosSequre";
import { useQuery } from "@tanstack/react-query";

const ConnectedAllUser = () => {
  // short by name data below
  const options = [
    { label: "Recently added", value: "recently_added" },
    { label: "First name", value: "first_name" },
    { label: "Last name", value: "last_name" },
  ];

  // selected first name and last name function
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };
  // short by data drop down

  // input search vale function
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // get data all connected user
  const { user } = useContext(AuthContext);
  const [axiosSequre] = useAxioSequre();
  const { refetch, data: allConnected = [] } = useQuery( ["allConnected", user?.email], async () => {
      const res = await axiosSequre.get(`/connectrequest/${user?.email}`);
      return res.data;
    },
  );

  // filtering data approved
  const allConnect = allConnected.filter(
    (accept) => accept.status === "aproved"
  );


  return (

    <div className="px-6  py-4">
      {/*page top section  */}
      <div>
        <h1 className="font-medium">{allConnect?.length} Connections</h1>
        <div className="flex justify-between mt-2">
          {/* shorting name div */}
          <div className="text-gray-500 justify-center items-center">
            short By :
            <div className="dropdown dropdown-bottom">
              <label
                tabIndex={0}
                className="btn hover:bg-white bg-white border-none text-current normal-case text-[15px]"
              >
                {selectedOption.label} <AiFillCaretDown />
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100  rounded-box w-52"
              >
                {options.map((option) => (
                  <li key={option.value} className="font-medium">
                    <a onClick={() => handleOptionChange(option)}>
                      {option.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* shorting name div */}

          {/* search input design */}
          <div className="flex justify-center items-center">
            <div>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="border rounded w-full border-black p-2 pl-8"
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
                <div className="absolute inset-y-0 left-0 pl-2 flex items-center">
                  <FaSearch className="text-gray-400" />
                </div>
              </div>
            </div>
            <p className="ml-2 text-green-600 font-medium hover:underline hover:cursor-pointer">
              Search with filters
            </p>
          </div>
          {/* search input design */}
        </div>
      </div>
      {/* divider  */}
      <div className="divider my-0 py-0 px-0"></div>
     
      {
       allConnect ? <div className="max-h-[600px] overflow-y-auto scroll-pr-2  touch-none">
          {
            allConnect?.map(data => <ConnectSingleUser key={data._id} refetch={refetch} data={data} />)
          }
        </div> : <div className="flex justify-center items-center mt-10 ">
        <span className="loading loading-spinner w-14 text-success"></span>
      </div>
      }
     
    </div>
  );
};

export default ConnectedAllUser;
