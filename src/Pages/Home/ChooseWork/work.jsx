import React from 'react';

const Work = ({ icon, titles, description }) => {
  return (
    <div className=" border-r my-6">
      <div className="flex justify-center text-lg">{icon}</div>
      <h1 className="text-xl font-semibold">{titles}</h1>
      <p className="mt-1 justify-between">{description}</p>
    </div>
  );
};

export default Work;