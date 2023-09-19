import React from "react";

const EventCard = ({ event }) => {
  const {
    name,
    userName,
    userPhoto,
    image,
    startdate,
    starttime,
    externallink,
    description,
    speakers,
  } = event;
  return (
    <div>
      <>
        {/* component */}
        <div className="mx-auto flex items-center justify-center px-8 mt-10">
          <div className="flex flex-col w-full bg-white rounded shadow-lg sm:w-3/4 md:w-1/2 lg:w-3/5">
            <div />
            <img
              className="w-full h-40 bg-top bg-cover rounded-t"
              src={image}
              alt="images"
            />
            <div className="flex flex-col w-full md:flex-row">
              <div className="flex flex-row justify-around p-4 font-bold leading-none text-gray-800 uppercase bg-gray-400 rounded md:flex-col md:items-center md:justify-center md:w-1/4">
                <p className="md:text-lg">{startdate}</p>
                <p className="md:text-xl">{starttime}</p>
              </div>
              <div className="p-4 font-normal text-gray-800 md:w-3/4">
                <h1 className="mb-4 text-2xl font-bold leading-none tracking-tight text-gray-800">
                  {name}
                </h1>
                <p className="leading-normal">{description}</p>
                <div className="flex flex-row items-center mt-4 text-gray-700">
                  <div className="">
                    <p className="">speaker</p>
                    <p className="">{speakers}</p>
                  </div>
                  <div className="w-1/2 flex justify-end">
                    <a
                      className="font-semibold text-blue-500"
                      href={externallink}
                      target="_blank"
                    >
                      Join
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default EventCard;
