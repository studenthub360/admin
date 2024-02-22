import React, { useState, useEffect } from "react";

const AdminNetworkingEventsPage = () => {
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({
    groupName: "",
    details: "",
    eventContact: "",
    date: "",
    time: "",
    image: null, // Added image field
  });

  useEffect(() => {
    // Fetch networking events data when the component mounts
    fetchNetworkingEvents();
  }, []);

  const fetchNetworkingEvents = async () => {
    try {
      const token = sessionStorage.getItem("accessToken");

      // Fetch networking events data from the API
      const response = await fetch(
        "https://student360-api.onrender.com/api/netevents",
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch networking events");
      }

      const eventsData = await response.json();
      setEvents(eventsData || []);
    } catch (error) {
      console.error("Error fetching networking events:", error);
      alert("Failed to fetch networking events. Please try again.");
    }
  };

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;

    // If the input is a file (image), set the image property in the state
    if (name === "image") {
      setNewEvent((prevEvent) => ({
        ...prevEvent,
        [name]: files[0],
      }));
    } else {
      setNewEvent((prevEvent) => ({
        ...prevEvent,
        [name]: value,
      }));
    }
  };

  const handleAddEvent = async () => {
    try {
      const token = sessionStorage.getItem("accessToken");

      // Create a FormData object to handle image file
      const formData = new FormData();
      formData.append("groupName", newEvent.groupName);
      formData.append("details", newEvent.details);
      formData.append("eventContact", newEvent.eventContact);
      formData.append("date", newEvent.date);
      formData.append("time", newEvent.time);
      formData.append("image", newEvent.image); // Append image file

      // Send a POST request to add a new networking event
      const response = await fetch(
        "https://student360-api.onrender.com/api/netevents",
        {
          method: "POST",
          headers: {
            Authorization: `${token}`,
          },
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error("Failed to add networking event");
      }

      // Fetch the updated list of networking events
      fetchNetworkingEvents();
    } catch (error) {
      console.error("Error adding networking event:", error);
      alert("Failed to add networking event. Please try again.");
    }
  };

  return (
    <div className="container w-fit  mt-8">
      <h1 className="text-3xl font-bold mb-8  text-[#3B50FE]">
        Admin Networking Events Page
      </h1>

      <div className="mb-6">
        {/* <h2 className="text-xl font-bold mb-4">Add New Networking Event</h2> */}
        <div className="flex flex-col space-y-4">
          <input
            type="text"
            name="groupName"
            placeholder="Group Name"
            value={newEvent.groupName}
            onChange={handleInputChange}
            className="p-2 border rounded-md"
          />
          <input
            type="text"
            name="details"
            placeholder="Details"
            value={newEvent.details}
            onChange={handleInputChange}
            className="p-2 border rounded-md"
          />
          <input
            type="text"
            name="eventContact"
            placeholder="Event Contact"
            value={newEvent.eventContact}
            onChange={handleInputChange}
            className="p-2 border rounded-md"
          />
          <input
            type="date"
            name="date"
            value={newEvent.date}
            onChange={handleInputChange}
            className="p-2 border rounded-md"
          />
          <input
            type="time"
            name="time"
            value={newEvent.time}
            onChange={handleInputChange}
            className="p-2 border rounded-md"
          />
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleInputChange}
            className="p-2 border rounded-md"
          />
          <button
            onClick={handleAddEvent}
            className="bg-[#3B50FE] text-white px-4 py-2 rounded-md"
          >
            Add Event
          </button>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-4">Networking Events List</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {events.map((event, index) => (
            <div
              className="bg-white pb-6  text-center rounded-xl shadow-md"
              key={index}
            >
              <img
                src={event.imageUrl}
                alt="Event"
                className="w-full h-fit object-cover"
              />
               <h3 className="text-xl font-semibold mb-2 text-[#3A4FFE]">
              {event.groupName}
            </h3>
              
            <p className="text-gray-600 p-2">{event.details}</p>
              <strong>Contact:</strong> {event.eventContact}
              <br />
              <strong>Date:</strong> {new Date(event.date).toLocaleDateString()}
              <br />
              <strong>Time:</strong> {event.time}
              <br />
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminNetworkingEventsPage;
