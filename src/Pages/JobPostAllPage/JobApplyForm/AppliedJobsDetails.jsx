import React from 'react';
import { Link } from 'react-router-dom';

const AppliedJobsDetails = ({ applied }) => {
    const { image, name, userPhoto, questions, companyName } = applied;
    // console.log(applied);
    return (
      <div className="relative border-[1px] rounded py-5 my-5  px-5 border-green-500 shadow-sm shadow-green-500">
        <div className="flex justify-between items-center">
          <div>
            <div className="flex items-center gap-3">
              <div>
                <img
                  className="w-20 h-20 rounded-sm border border-green-500"
                  src={image}
                  alt=""
                />
              </div>
              <div className="space-y-2">
                <h1 className="font-semibold text-lg">React Developer</h1>
                <h1 className="font-semibold text-lg"> {companyName}</h1>
              </div>
            </div>
          </div>
          <div className="flex-col items-center gap-3">
            <div className="flex items-center gap-3">
              <img
                className="h-20 w-20 rounded-full border"
                src={userPhoto}
                alt="img"
              />
              <div className="space-y-2">
                <h1 className="font-semibold">{name}</h1>
                {/* <button className="font-semibold text-white text-lg bg-green-500 px-2 py-1 rounded-md">
                  View Resume
                </button> */}
                <label htmlFor="my_modal_6">
                  <h1 className="font-semibold text-white cursor-pointer text-lg bg-green-500 px-2 py-1 rounded-md">
                    View Resume
                  </h1>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h1 className="font-bold">Why should you hire?</h1>
          <p>{questions}</p>
        </div>

        {/* resume modal */}
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
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </label>
            </div>
            <form className="w-full border-bg-white rounded-lg text-black">
              {/* job descriptions */}
              <div className="relative w-full">
                <h1 className="font-semibold text-2xl text-center mb-2">Resume</h1>
                <img
                  className="w-full"
                  src="https://img.freepik.com/free-vector/resume-cv-job-flat-infographic-composition-with-example-job-application-editable-text-skills-avatar-vector-illustration_1284-84163.jpg?w=360&t=st=1693480746~exp=1693481346~hmac=efb0eade3361f29619dfdcaefe554facb79c1f2d7dba6f4343ab5183343ee59d"
                  alt=""
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default AppliedJobsDetails;