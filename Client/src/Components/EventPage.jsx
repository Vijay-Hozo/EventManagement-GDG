import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const EventPage = ({ onNavigate }) => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    getEvents();
  }, []);

  const getEvents = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_SERVER_URL}/event`);
      if (!response.ok) {
        throw new Error('Failed to fetch events');
      }
      const data = await response.json();
      setEvents(data.events || []);
    } catch (err) {
      console.error(err.message);
    }
  };


  return (
    <div className="bg-gradient-to-b from-[#080D18] to-[#1A1F2E] min-h-screen text-white">
      <header className="bg-[#1A1F2E] shadow-lg p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/"><h1 className="font-bold text-2xl">InVITE</h1></Link>
          <h2 className="font-medium text-lg">All Events</h2>
          <h2 className="text-lg">Welcome, User</h2>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-semibold mb-10 text-center">Upcoming Events</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map(({ _id, eventName, eventDescription, eventFee, tickets, eventImage }) => (
              <div key={_id} className="bg-gray-900 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl">
                <img
                  src={eventImage}
                  alt={eventName}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h2 className="text-2xl font-semibold mb-2">{eventName}</h2>
                  <p className="text-xl mb-4">₹{eventFee}</p>
                  <p className="text-gray-300 mb-4 line-clamp-3">{eventDescription}</p>
                  <p className="mb-4">
                    <strong>Tickets Available:</strong> {tickets}
                  </p>
                  <Link to={`/eventbook/${_id}`}><button 
                    className="w-full bg-teal-500 py-2 px-6 rounded-full text-white text-lg font-medium shadow-lg transition-transform transform hover:scale-105 hover:bg-teal-600"
                  >
                    Book Now!
                  </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
      </main>
    </div>
  );
};

export default EventPage;
