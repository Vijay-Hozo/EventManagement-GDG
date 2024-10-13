import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import djimage from "../assets/Dj.jpg";
import { Link } from "react-router-dom";

const EventBook = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    fetchEventDetails();
  }, [id]);

  const fetchEventDetails = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/event/${id}`
      );
      setEvent(res.data.event);
      console.log(res);
    } catch (err) {
      console.log(err.message);
    }
  };

  if (!event) {
    return (
      <div className="text-white text-center">Loading event details...</div>
    );
  }

  return (
    <div className="bg-[#080D18] w-full min-h-screen flex flex-col items-center text-white">
      <div className="flex justify-between items-center text-xl w-full p-4 bg-[#1A1F2E] shadow-md">
        <Link to="/">
          <h1 className="font-bold text-2xl">InVITE</h1>
        </Link>
        <h1 className="text-lg">Welcome</h1>
      </div>

      <div className="flex justify-around items-center mt-14">
        <div className="w-full">
          <img
            src={event.eventImage || djimage} 
            alt={event.eventName || "Event Image"}
            className="rounded-md"
          />
        </div>

        <div className="md:w-1/2 p-6 ml-14">
          <div className="mt-4 flex flex-col text-xl ml-14">
            <h1 className="font-bold text-3xl my-8 text-center">
              {event.eventName}
            </h1>
            <p className=" mb-4">{event.eventDescription}</p>
            <p className=" mb-4">Time: {event.eventTime}</p>
            <p className=" mb-4">Date: {event.eventDate}</p>
            <p className=" mb-4">Location: {event.eventLocation}</p>
            <p className=" mb-4">Fee: ₹{event.eventFee}</p>
            <p className=" mb-4">Tickets Available: {event.tickets}</p>
            <button className="bg-blue-600 p-2 rounded-md">Book Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventBook;
