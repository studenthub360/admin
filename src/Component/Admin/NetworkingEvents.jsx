
// NetworkingEvents.js

import React, { useState } from 'react';
import Carousel from 'react-elastic-carousel'; // Install this package

const NetworkingEvents = () => {
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventTime, setEventTime] = useState('');
  const [eventLocation, setEventLocation] = useState('');
  const [eventContact, setEventContact] = useState('');
  const [eventImage, setEventImage] = useState(null); // Handle image upload

  // Dummy events data (replace with actual data)
  const dummyEvents = [
    { id: 1, name: 'Event 1', date: '2024-03-15', time: '10:00 AM', location: 'Venue A' },
    { id: 2, name: 'Event 2', date: '2024-03-16', time: '2:30 PM', location: 'Venue B' },
    // Add more event objects as needed
  ];

  return (
    <div>
      <h2>Networking Events</h2>
      <form>
        <label htmlFor="eventName">Event Name:</label>
        <input
          type="text"
          id="eventName"
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
        />
        {/* Add other form fields (date, time, location, contact, image upload) */}
        {/* Implement image upload logic */}
      </form>

      <h3>Added Events</h3>
      <Carousel itemsToShow={4}>
        {dummyEvents.map((event) => (
          <div key={event.id}>
            <h4>{event.name}</h4>
            <p>Date: {event.date}</p>
            <p>Time: {event.time}</p>
            <p>Location: {event.location}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default NetworkingEvents;

/*import React, { useState } from "react";
import Carousel from "react-elastic-carousel";

const AddEventForm = () => {
  const [eventName, setEventName] = useState("");
  const [eventDateTime, setEventDateTime] = useState("");
  const [eventLocation, setEventLocation] = useState("");
  const [contactInfo, setContactInfo] = useState("");
  const [eventImage, setEventImage] = useState(null);
  const [addedEvents, setAddedEvents] = useState([]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setEventImage(file);
  };

  const addEvent = () => {
    const newEvent = {
      id: Date.now(),
      name: eventName,
      dateTime: eventDateTime,
      location: eventLocation,
      contactInfo: contactInfo,
      image: eventImage,
    };
    setAddedEvents([...addedEvents, newEvent]);
    // Reset form fields
    setEventName("");
    setEventDateTime("");
    setEventLocation("");
    setContactInfo("");
    setEventImage(null);
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Add Event</h1>
      <form>
        <div className="mb-4">
          <label htmlFor="eventName" className="block font-semibold mb-1">
            Event Name:
          </label>
          <input
            type="text"
            id="eventName"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
            className="border border-gray-300 rounded-lg p-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="eventDateTime" className="block font-semibold mb-1">
            Date and Time:
          </label>
          <input
            type="datetime-local"
            id="eventDateTime"
            value={eventDateTime}
            onChange={(e) => setEventDateTime(e.target.value)}
            className="border border-gray-300 rounded-lg p-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="eventLocation" className="block font-semibold mb-1">
            Location:
          </label>
          <input
            type="text"
            id="eventLocation"
            value={eventLocation}
            onChange={(e) => setEventLocation(e.target.value)}
            className="border border-gray-300 rounded-lg p-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="contactInfo" className="block font-semibold mb-1">
            Contact Information:
          </label>
          <input
            type="text"
            id="contactInfo"
            value={contactInfo}
            onChange={(e) => setContactInfo(e.target.value)}
            className="border border-gray-300 rounded-lg p-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="eventImage" className="block font-semibold mb-1">
            Event Image:
          </label>
          <input
            type="file"
            id="eventImage"
            onChange={handleImageChange}
            className="border border-gray-300 rounded-lg p-2 w-full"
          />
        </div>
        <button
          type="button"
          onClick={addEvent}
          className="bg-blue-500 text-white py-2 px-4 rounded-lg"
        >
         Upload Poster
        </button>
      </form>

      <div className="mt-8">
        <h2 className="text-3xl font-bold mb-4">Added Events</h2>
        <Carousel itemsToShow={3} pagination>
          {addedEvents.map((event) => (
            <div key={event.id} className="w-full">
              <div className="border rounded-lg p-4">
                {event.image && (
                  <img
                    src={URL.createObjectURL(event.image)}
                    alt={event.name}
                    className="w-full h-40 object-cover rounded-lg mb-4"
                  />
                )}
                <h3 className="text-xl font-semibold mb-2">{event.name}</h3>
                <p className="mb-2">Date and Time: {event.dateTime}</p>
                <p className="mb-2">Location: {event.location}</p>
                <p className="mb-2">Contact Info: {event.contactInfo}</p>
              </div>
            </div>
            
          ))}
           {addedEvents.map((event) => (
            <div key={event.id} className="w-full">
              <div className="border rounded-lg p-4">
                {event.image && (
                  <img
                    src={URL.createObjectURL(event.image)}
                    alt={event.name}
                    className="w-full h-40 object-cover rounded-lg mb-4"
                  />
                )}
                <h3 className="text-xl font-semibold mb-2">{event.name}</h3>
                <p className="mb-2">Date and Time: {event.dateTime}</p>
                <p className="mb-2">Location: {event.location}</p>
                <p className="mb-2">Contact Info: {event.contactInfo}</p>
              </div>
            </div>
            
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default AddEventForm;
*/