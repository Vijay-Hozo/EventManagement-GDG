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
    tickets: "200",
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
    tickets: "200",
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
    tickets: "200",
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
    tickets: "200",
  },
];

const AdminDashboard = () => {
  return (
    <div className="bg-[#080D18] w-full min-h-screen text-white">
      {/* Header */}
      <div className="flex justify-between items-center text-xl p-4 bg-[#1A1F2E] shadow-md">
        <h1 className="font-bold text-2xl">InVITE</h1>
        <h1 className="font-medium text-lg">Admin Dashboard</h1>
        <h1 className="text-lg">Welcome, User</h1>
      </div>

      {/* Events Section */}
      <h1 className="text-center font-semibold text-3xl mt-8">My Events</h1>

      <div className="mt-8 px-4">
        <ul className="flex flex-wrap justify-center gap-6">
          {events.map(({ id, image, eventname, eventdescription }) => (
            <li
              key={id}
              className="bg-[#1A1F2E] text-white p-6 rounded-lg shadow-lg "
            >
              <img
                src={image}
                alt={eventname}
                className="w-full h-[220px] rounded-lg mb-4"
              />
              <h1 className="text-center text-2xl font-semibold mb-2">
                {eventname}
              </h1>
              <p className="text-sm mb-4 text-center text-gray-300">
                {eventdescription}
              </p>
              <div className="flex justify-between items-center">
                <button className="bg-blue-500 text-black font-bold py-1 px-4 rounded-lg hover:bg-blue-600 ">
                  Edit
                </button>
                <button className="bg-red-500 text-white font-bold py-1 px-4 rounded-lg hover:bg-red-600 ">
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminDashboard;
