import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const Room = () => {
  const { id } = useParams();
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
  }, [id]);

  if (!room) {
    return <div>Loading...</div>;
  }

  return (
    <div className="room-details">
      <h2>{room.name}</h2>
      <img src={room.imageUrl} alt={room.title} style={{ maxWidth: '100%' }} />
      <p>{room.description}</p>

      <Link to={`/rooms/${id}/reserve`}>
        <button>Reserve</button>
      </Link>
    </div>
  );
};

export default Room;