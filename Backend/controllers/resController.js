import Reservation from '../models/Reservation.js';
import Room from '../models/Room.js';

export const createReservation = async (req, res) => {
  try {
    const { roomId, startDate, endDate } = req.body;

    const room = await Room.findById(roomId);
    if (!room) {
      return res.status(404).json({ error: 'Room not found' });
    }

    const isRoomAvailable = await room.isAvailable(startDate, endDate);
    if (!isRoomAvailable) {
      return res.status(400).json({ error: 'Room is not available for the specified dates' });
    }

    const reservation = new Reservation({
      roomId,
      startDate,
      endDate,
    });

    await reservation.save();

    res.status(201).json(reservation);
  } catch (error) {
    console.error('Error creating reservation:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const getAllReservations = async (req, res) => {
  try {
    const reservations = await Reservation.find();
    res.json(reservations);
  } catch (error) {
    console.error('Error getting reservations:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const getReservationDetails = async (req, res) => {
  try {
    const reservation = await Reservation.findById(req.params.reservationId);
    if (!reservation) {
      return res.status(404).json({ error: 'Reservation not found' });
    }
    res.json(reservation);
  } catch (error) {
    console.error('Error getting reservation details:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const updateReservation = async (req, res) => {
  try {
    const { startDate, endDate } = req.body;

    const reservation = await Reservation.findByIdAndUpdate(
      req.params.reservationId,
      { startDate, endDate },
      { new: true }
    );

    if (!reservation) {
      return res.status(404).json({ error: 'Reservation not found' });
    }

    res.json(reservation);
  } catch (error) {
    console.error('Error updating reservation:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const deleteReservation = async (req, res) => {
  try {
    const reservation = await Reservation.findByIdAndDelete(req.params.reservationId);
    if (!reservation) {
      return res.status(404).json({ error: 'Reservation not found' });
    }
    res.json({ message: 'Reservation deleted successfully' });
  } catch (error) {
    console.error('Error deleting reservation:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};