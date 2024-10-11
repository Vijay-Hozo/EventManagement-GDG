import React from "react";
import djimage from "../assets/Dj.jpg"; 

const events = [
  {
    id: 1,
    image: djimage,
    eventname: "Dhrona",
    eventdescription: "This is an event called Dhrona.",
    eventtime: "9:00 AM",
    eventdate: "18-09-2024",
    eventlocation: "SECE",
    eventfee: "100",
    tickets: "200"
  },
  {
    id: 2,
    image: djimage,
    eventname: "Dhrona",
    eventdescription: "This is an event called Dhrona.",
    eventtime: "9:00 AM",
    eventdate: "18-09-2024",
    eventlocation: "SECE",
    eventfee: "100",
    tickets: "200"
  },
  {
    id: 3,
    image: djimage,
    eventname: "Dhrona",
    eventdescription: "This is an event called Dhrona.",
    eventtime: "9:00 AM",
    eventdate: "18-09-2024",
    eventlocation: "SECE",
    eventfee: "100",
    tickets: "200"
  },
  {
    id: 4,
    image: djimage,
    eventname: "Dhrona",
    eventdescription: "This is an event called Dhrona.",
    eventtime: "9:00 AM",
    eventdate: "18-09-2024",
    eventlocation: "SECE",
    eventfee: "100",
    tickets: "200"
  },
];

const EventPage = () => {
  return (
    <div className="bg-[#080D18] w-full min-h-screen p-6">
      <h1 className="text-white text-3xl font-semibold mb-6 text-center">Upcoming Events</h1>
      <div className="">
        <ul className="space-y-4 flex flex-wrap justify-around">
          {events.map(({ id, image, eventname, eventdescription, tickets,eventfee }) => (
            <li 
              key={id} 
              className="relative bg-gray-900 text-white p-6 rounded-lg shadow-lg w-[600px] transition-transform duration-200 transform  hover:shadow-2xl hover:shadow-slate-800"
            >
              <img 
                src={image} 
                alt={eventname} 
                className="w-full h-[300px] object-cover rounded-lg" 
              />
              <h1 className="text-center text-2xl">{eventname}</h1>
              <h1 className="text-center text-2xl">₹{eventfee}</h1>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-70 text-center flex flex-col justify-center items-center opacity-0 transition-opacity duration-300 hover:opacity-100">
                <p className="text-lg mb-1">{eventdescription}</p>
                <p className="text-lg mb-1"><strong>Tickets Available:</strong> {tickets}</p>
                <button className="bg-teal-500 mt-4 py-2 px-6 rounded-full text-white text-lg font-medium shadow-lg transition-transform transform hover:scale-110 hover:bg-teal-600">Book Now!</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default EventPage;
