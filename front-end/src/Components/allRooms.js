import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import RoomCard from './roomCard';

const RoomList = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/rooms');
        setRooms(response.data);
      } catch (error) {
        console.error('Error fetching rooms:', error);
      }
    };

    fetchRooms();
  }, []);

  return (
    <div className="room-list">
      {rooms.map((room) => (
        <Link key={room._id} to={`/rooms/${room._id}`}>
          <RoomCard room={room} />
        </Link>
      ))}
    </div>
  );
};

export default RoomList;