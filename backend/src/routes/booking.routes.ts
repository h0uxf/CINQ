import Router from 'express';
import * as bookingController from '../controllers/booking.controller.js';
import { verifyToken } from '../middlewares/auth.middleware.js';

const router = Router();

router.post('/', verifyToken, bookingController.createBooking);
router.get('/me', verifyToken, bookingController.getMyBookings);
router.get('/:id', verifyToken, bookingController.getBookingById);
router.patch('/:id/cancel', verifyToken, bookingController.cancelBooking);

export default router;