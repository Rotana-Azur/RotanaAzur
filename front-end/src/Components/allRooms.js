import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RoomCard from './roomCard';

const RoomList = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/rooms');
        setRooms(response.data);
        console.log(response.data)
      } catch (error) {
        console.error('Error fetching rooms:', error);
      }
    };

    fetchRooms();
  }, []); // Empty dependency array to fetch rooms only once on component mount

  return (
    <div className="room-list">
      {rooms.map((room) => (
        <RoomCard key={room._id} room={room} />
      ))}
    </div>
  );
};

export default RoomList;