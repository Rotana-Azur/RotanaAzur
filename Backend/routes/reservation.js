import express from 'express';
import {
  createReservation,
  getAllReservations,
  getReservationDetails,
  updateReservation,
  deleteReservation,
} from '../controllers/resController.js';

const router = express.Router();

router.post('/api/reservations', createReservation);
router.get('/api/reservations', getAllReservations);
router.get('/api/reservations/:reservationId', getReservationDetails);
router.put('/api/reservations/:reservationId', updateReservation);
router.delete('/api/reservations/:reservationId', deleteReservation);

export default router;