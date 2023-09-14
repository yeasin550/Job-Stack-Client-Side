import React from "react";
import useAxioSequre from "../../../../Hooks/useAxiosSequre";
import EventCard from "./EventCard";
import { useQuery } from "@tanstack/react-query";

const AllEvents = () => {
  const [axiosSequre] = useAxioSequre();
  const { data: events = [], refetch } = useQuery(["events"], async () => {
    const res = await axiosSequre.get(`/events`);
    return res.data;
  });
  return (
    <div>
      <div className="grid md:grid-cols-3 gap-10 ">
        {events.map((event) => (
          <EventCard key={event._id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default AllEvents;
