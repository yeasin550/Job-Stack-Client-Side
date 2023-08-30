import React from 'react';
import { Link } from 'react-router-dom';

const AppliedJobsDetails = ({ applied }) => {
    const { image, name, userPhoto, questions, companyName } =
      applied;
    // console.log(applied);
    return (
      <div className="relative border-[1px] rounded py-5 my-5  px-5 border-green-500 shadow-sm shadow-green-500">
        <div className="flex justify-between items-center">
          <div>
            <div className="flex items-center gap-3">
              <div>
                <img className="w-20 h-20 rounded-sm border border-green-500" src={image} alt="" />
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
                <button
                  className=" font-semibold text-white text-lg bg-green-500 px-2 py-1 rounded-md"
                  onClick={() => window.my_modal_5.showModal()}
                >
                  View Resume
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h1 className="font-bold">Why should you hire?</h1>
          <p>{questions}</p>
        </div>

        {/* resume modal */}
        {/* Open the modal using ID.showModal() method */}

        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
          <form method="dialog" className="modal-box">
            <h3 className="font-bold text-lg">Hello!</h3>
            <p className="py-4">
              Press ESC key or click the button below to close
            </p>
            <img src="" alt="" />
            <div className="modal-action">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </div>
          </form>
        </dialog>
      </div>
    );
};

export default AppliedJobsDetails;