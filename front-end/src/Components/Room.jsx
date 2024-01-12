import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Room = () => {
  const { id } = useParams(); // Use useParams hook to get parameters from the URL
  const [room, setRoom] = useState(null);

  useEffect(() => {
    const fetchRoomDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/rooms/${id}`);
        setRoom(response.data);
      } catch (error) {
        console.error('Error fetching room details:', error);
      }
    };

    fetchRoomDetails();
  }, [id]); // Include id in the dependency array to re-fetch when id changes

  if (!room) {
    return <div>Loading...</div>; // Add a loading state while fetching data
  }

  // Render the room details
  return (
    <div className="room-details">
      <h2>{room.name}</h2>
      <img src={room.imageUrl} alt={room.title} style={{ maxWidth: '100%' }} />
      <p>{room.description}</p>
      {/* Add other room details rendering here */}
    </div>
  );
};

export default Room;