import React from 'react';
import { Link } from 'react-router-dom';

const AppliedJobsDetails = ({ applied }) => {
    const {
      image,
      name,
      number,
      userPhoto,
      jobTitle,
      questions,
      companyName,
      applyEmail,
      resumeImage,
      jobCategory,
      salary,
    } = applied;
    console.log(applied);
    return (
      <div>
        <tr>
          <th>1</th>
          <td>Cy Ganderton</td>
          <td>Quality Control Specialist</td>
          <td>Littel, Schaden and Vandervort</td>
          <td>Canada</td>
          <td>12/16/2020</td>
          <td>Blue</td>
        </tr>
      
        <div className="flex items-center">
          <div className="px-6 py-4 whitespace-nowrap">
            <div className="flex items-center">
              <div className="flex-shrink-0 h-10 w-10">
                <img
                  className="h-10 w-10 rounded-full"
                  src={userPhoto}
                  alt=""
                />
              </div>
              <div className="ml-4">
                <div className="text-sm font-medium text-gray-900">{name}</div>
                <div className="text-sm text-gray-500">{applyEmail}</div>
              </div>
            </div>
          </div>
          <div className="px-6 py-4 whitespace-nowrap">
            <div className="text-sm text-gray-900">{jobTitle}</div>
            <div className="text-sm text-gray-500">${salary}</div>
          </div>
          <div className="px-6 ml-5  py-4 whitespace-nowrap">
            <div className="text-sm text-gray-900">+{number}</div>
            <div className="text-sm text-gray-500">{jobCategory}</div>
          </div>
          <div className="px-6 py-4 whitespace-nowrap">
            <label htmlFor="my_modal_6">
              <h1 className="font-semibold text-white cursor-pointer text-lg bg-green-500 px-2 py-1 rounded-md">
                View Resume
              </h1>
            </label>
          </div>
          {/* <div className="px-6 py-4 whitespace-nowrap">
            <label htmlFor="my_modal_5">
              <h1 className="font-semibold text-white cursor-pointer text-lg bg-green-500 px-2 py-1 rounded-md">
                View Details
              </h1>
            </label>
          </div> */}
        </div>

        <input type="checkbox" id="my_modal_6" className="modal-toggle" />
        <div className="modal py-0">
          <div className="absolute modal-box">
            <div className="relative -top-12 left-6 modal-action">
              <label
                htmlFor="my_modal_6"
                className="btn text-white absolute top-3 right-3 btn-outline btn-circle bg-green-600 rounded-full hover:bg-green-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  sdivoke="currentColor"
                >
                  <path
                    sdivokeLinecap="round"
                    sdivokeLinejoin="round"
                    sdivokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </label>
            </div>
            <form className="w-full border-bg-white rounded-lg text-black">
              <div className="relative w-full">
                <h1 className="font-semibold text-2xl text-center mb-2">
                  Resume
                </h1>
                <img className="w-full" src={resumeImage} alt="" />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default AppliedJobsDetails;