import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Reservation = () => {
  const { roomId } = useParams();
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleReservation = async () => {
    try {
      const response = await axios.post('http://localhost:8000/api/reservations', {
        roomId,
        startDate,
        endDate,
      });

      console.log('Reservation created:', response.data);
    } catch (error) {
      console.error('Error creating reservation:', error);
    }
  };

  return (
    <div>
      <h2>Make a Reservation</h2>
      <label htmlFor="startDate">Start Date:</label>
      <input
        type="date"
        id="startDate"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
      />
      <br />
      <label htmlFor="endDate">End Date:</label>
      <input
        type="date"
        id="endDate"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
      />
      <br />
      <button onClick={handleReservation}>Reserve</button>
    </div>
  );
};

export default Reservation;