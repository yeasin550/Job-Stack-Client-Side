import React from "react";
import {SlCalender} from 'react-icons/sl'

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
      <div className="shadow-xl h-96 p-3 rounded-lg">
        <img className="h-20 w-full" src={image} alt="" />
        <h1 className="text-lg font-semibold mb-2">{name}</h1>
        <p>
          Event by <span className="font-bold">{userName}</span>
        </p>
        <p className="flex items-center gap-2 mt-2">
          <SlCalender /> {startdate}{" "}
          <span className="font-bold">{starttime}</span>
        </p>
        <a className="my-2" target="_blank" href={externallink}>join meet</a>
        <p className="text-base mb-2">
          speakers <span className="font-semibold">{speakers}</span>
        </p>
        <p className="text-sm"> {description}</p>
      </div>
    </div>
  );
};

export default EventCard;
