import React from "react";
import { useState } from "react";
import { storage } from "../Utils/firebase";
import { ref,getDownloadURL, uploadBytes} from "firebase/storage";
import { v4 } from "uuid";


const AddEvent = () => {

  

  const handleupload = (e) => {
    e.preventDefault();
    console.log("Image uploaded");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Event added");
  }

  return (
    <div className="bg-[#080D18] w-full min-h-screen text-white flex flex-col items-center p-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold">Add Event</h1>
      </div>
      <form action="submit" onSubmit={handleSubmit} className="w-full max-w-4xl grid grid-cols-2 gap-8">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-lg">
            Event Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter the event name"
            className="p-2 rounded-md bg-gray-800 border border-gray-700 focus:outline-none"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="description" className="text-lg">
            Description
          </label>
          <input
            type="text"
            id="description"
            placeholder="Enter the description"
            className="p-2 rounded-md bg-gray-800 border border-gray-700 focus:outline-none"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="date" className="text-lg">
            Date
          </label>
          <input
            type="date"
            id="date"
            className="p-2 rounded-md bg-gray-800 border border-gray-700 focus:outline-none"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="time" className="text-lg">
            Time
          </label>
          <input
            type="time"
            id="time"
            className="p-2 rounded-md bg-gray-800 border border-gray-700 focus:outline-none"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="location" className="text-lg">
            Location
          </label>
          <input
            type="text"
            id="location"
            placeholder="Enter the location"
            className="p-2 rounded-md bg-gray-800 border border-gray-700 focus:outline-none"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="fare" className="text-lg">
            Fare
          </label>
          <input
            type="number"
            id="fare"
            placeholder="Enter the fare"
            className="p-2 rounded-md bg-gray-800 border border-gray-700 focus:outline-none"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="tickets" className="text-lg">
            Total Tickets 
          </label>
          <input
            type="number"
            id="tickets"
            placeholder="Enter number of tickets"
            className="p-2 rounded-md bg-gray-800 border border-gray-700 focus:outline-none"
          />
        </div>

        <div className="flex items-center gap-4 col-span-2">
          <div className="flex flex-col gap-2 w-[500px]">
            <label htmlFor="image" className="text-lg">
              Event Image
            </label>
            <input
              type="file"
              id="image"
              className="p-2 rounded-md bg-gray-800 border border-gray-700 focus:outline-none w-full"
            />
          </div>
          <div className="self-end">
            <button onSubmit={handleupload} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition duration-300">
              Upload Image
            </button>
          </div>
        </div>

        <div className="col-span-2 flex justify-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition duration-300">
            Add Event
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddEvent;
