import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Card, CardContent, Typography, Button, CardActions, Grid, CircularProgress } from '@mui/material';
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

  if (rooms.length === 0) {
    return <CircularProgress />;
  }

  return (
    <Grid container spacing={3} className="room-list">
      {rooms.map((room) => (
        <Grid item key={room._id} xs={12} sm={6} md={4}>
          <Link to={`/rooms/${room._id}`} style={{ textDecoration: 'none' }}>
            <RoomCard room={room} />
          </Link>
        </Grid>
      ))}
    </Grid>
  );
};

export default RoomList;