import Router from 'express';
import * as adminController from '../controllers/admin.controller.js';
import { verifyToken, requireAdmin } from '../middlewares/auth.middleware.js';

const router = Router();

router.use(verifyToken, requireAdmin);

router.get('/stats', adminController.getStats);
router.get('/screenings', adminController.getAllScreenings);

router.get('/users', adminController.getAllUsers);
router.patch('/users/:id/role', adminController.updateUserRole);
router.patch('/users/:id/toggle-active', adminController.toggleUserActive);
router.delete('/users/:id', adminController.deleteUser);

router.get('/bookings', adminController.getAllBookings);
router.patch('/bookings/:id/status', adminController.updateBookingStatus);

router.get('/genres', adminController.getGenres);
router.post('/genres', adminController.createGenre);
router.put('/genres/:id', adminController.updateGenre);
router.delete('/genres/:id', adminController.deleteGenre);

export default router;
