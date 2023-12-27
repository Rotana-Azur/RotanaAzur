import React from 'react';

const RoomCard = ({ room }) => {
  return (
    <div className="card">
      <h3>{room.name}</h3>
      <p>{room.offer}</p>
      <p>Price: ${room.price}</p>
      <img src={room.imageUrl} alt={room.name} /> {/* Display Cloudinary image */}
      <p>Room ID: {room._id}</p>
    </div>
  );
};

export default RoomCard;