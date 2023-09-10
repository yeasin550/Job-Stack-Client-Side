import React from 'react';

const Work = ({ icon, titles, description }) => {
  return (
    <div className=" flex flex-col gap-2 justify-center items-center border-r-yellow-500 border-r-8 bg-white px-5 shadowdiv rounded py-5">
      <div className="flex justify-center w-16 h-16 items-center banner text-white rounded-full text-[16px]">{icon}</div>
      <h1 className="text-xl text-center font-semibold">{titles}</h1>
      <p className="mt-1 text-center ">{description}</p>
    </div>
  );
};

export default Work;