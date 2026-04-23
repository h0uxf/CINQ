import Router from 'express';
import * as screeningController from '../controllers/screening.controller.js';
import { verifyToken, requireManagement } from '../middlewares/auth.middleware.js';

const router = Router();

router.get('/movie/:movieId', screeningController.getScreeningsByMovie);
router.get('/:id', screeningController.getScreeningById);
router.get('/:id/seats', screeningController.getScreeningSeats);
router.post('/', verifyToken, requireManagement, screeningController.createScreening);
router.put('/:id', verifyToken, requireManagement, screeningController.updateScreening);
router.delete('/:id', verifyToken, requireManagement, screeningController.deleteScreening);

export default router;