import React from "react";
import djimage from "../assets/Dj.jpg";

const EventBook = () => {
  return (
    <div className="bg-[#080D18] w-full min-h-screen flex flex-col items-center text-white">
      <div className="flex justify-between items-center text-xl w-full p-4 bg-[#1A1F2E] shadow-md">
        <h1 className="font-bold text-2xl">InVITE</h1>
        <h1 className="text-lg">Welcome, User</h1>
      </div>

      <div className="flex justify-around items-center mt-14">
        <div className=" w-full">
          <img
            src={djimage}
            alt="djimage"
            className="rounded-md"
          />
        </div>

        <div className="md:w-1/2 p-6 ml-14">
          <div className="mt-4 flex flex-col text-xl ml-14">
            <h1 className="font-bold text-3xl my-8 text-center">Dhrona</h1>
            <p className=" mb-4">This is an event called Dhrona.</p>
            <p className=" mb-4">Time: 9:00 AM</p>
            <p className=" mb-4">Date: 18-09-2024</p>
            <p className=" mb-4">Location: SECE</p>
            <p className=" mb-4">Fee: ₹100</p>
            <p className=" mb-4">Tickets Available: 200</p>
            <button className="bg-blue-600 p-2 rounded-md">Book Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventBook;
