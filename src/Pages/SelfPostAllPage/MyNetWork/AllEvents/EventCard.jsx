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
      <div className="shadow-xl h-80 p-7 rounded-lg">
        <img className="h-20 w-full" src={image} alt="" />
        <h1 className="text-xl font-semibold">{name}</h1>
        <p>
          Event by <span className="font-bold">{userName}</span>
        </p>
        <p>
          {startdate} <span className="font-bold">{starttime}</span>
        </p>
        <p>{externallink}</p>
        <p>speakers {speakers}</p>
        <p> {description}</p>
      </div>
    </div>
  );
};

export default EventCard;
