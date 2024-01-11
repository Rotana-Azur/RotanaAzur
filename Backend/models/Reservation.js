import mongoose from 'mongoose';

const { Schema } = mongoose;

const reservationSchema = new Schema({
  roomId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Room',
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
});

const Reservation = mongoose.model('Reservation', reservationSchema);

export default Reservation;