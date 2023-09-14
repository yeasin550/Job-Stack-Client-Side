import React from "react";
import { FaGraduationCap, FaPlus } from "react-icons/fa";
import UserContactPostForm from "../../UserContactInfoPostForm/UserContactPostForm";
import UserBasicinfoPostForm from "../../UserContactInfoPostForm/UserBasicinfoPostForm";
import useSingleUser from "../../../Hooks/useSingleUser";

const ContactBasicInfo = () => {
  const [singleUser] = useSingleUser();
  return (
    <div className="px-10 py-10">
      {/* contact info  */}
      <div className="flex flex-col shadowdiv border p-4 rounded-md">
        <h1 className="text-[20px] font-sans font-semibold">Contact Info</h1>
        <UserContactPostForm></UserContactPostForm>
        {singleUser?.map((contactinfo) => (
          <div
            key={contactinfo?._id}
            className="flex justify-between items-center"
          >
            <div className="flex gap-5">
              <FaGraduationCap className="text-2xl"></FaGraduationCap>
              <h1>{contactinfo?.phoneNumber}</h1>
              <h1>{contactinfo?.currentLocation}</h1>
              <h1>{contactinfo?.homeLocation}</h1>
            </div>
          </div>
        ))}
      </div>
      {/* contact info  */}
      {/* Basic INfo  */}
      <div className="flex flex-col shadowdiv border p-4 rounded-md mt-4">
        <h1 className="text-[20px] font-sans font-semibold">Basic Info</h1>
        <UserBasicinfoPostForm></UserBasicinfoPostForm>
        {singleUser?.map((basicinfo) => (
          <div
            key={basicinfo?._id}
            className="flex justify-between items-center"
          >
            <div className="flex flex-col gap-5">
              <FaGraduationCap className="text-2xl"></FaGraduationCap>
              <p>
                <span className=" font-sans font-bold">Gender: </span>
                {basicinfo?.gender}
              </p>
              <div className="flex">
                <p>
                  <span className=" font-sans font-bold">Date Of Birth: </span>
                </p>
                <p>{basicinfo?.date}</p>/<p>{basicinfo?.month}</p>/
                <p>{basicinfo?.year}</p>
              </div>
              <p>
                <span className=" font-sans font-bold">Language: </span>
                {basicinfo?.language}
              </p>
              <p>
                <span className=" font-sans font-bold">Hobbys: </span>
                {basicinfo?.hobbys}
              </p>
            </div>
          </div>
        ))}
      </div>
      {/* Basic INfo  */}
    </div>
  );
};

export default ContactBasicInfo;
