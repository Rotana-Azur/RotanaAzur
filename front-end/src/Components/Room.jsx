import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { Typography, Button, CircularProgress, Paper } from '@mui/material';

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
    return <CircularProgress />;
  }

  return (
    <Paper elevation={3} className="room-details" style={{ padding: '16px', maxWidth: '600px', margin: 'auto' }}>
      <Typography variant="h4" gutterBottom>
        {room.name}
      </Typography>
      <img src={room.imageUrl} alt={room.title} style={{ maxWidth: '100%', marginBottom: '16px' }} />
      <Typography variant="body1" paragraph>
        {room.description}
      </Typography>

      <Link to={`/rooms/${id}/reserve`} style={{ textDecoration: 'none' }}>
        <Button variant="contained" color="primary">
          Reserve
        </Button>
      </Link>
    </Paper>
  );
};

export default Room;