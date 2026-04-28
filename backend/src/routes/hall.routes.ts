import Router from 'express';
import * as hallController from '../controllers/hall.controller.js';
import { verifyToken, requireManagement } from '../middlewares/auth.middleware.js';

const router = Router();

router.get('/', hallController.getAllHalls);
router.get('/:id', hallController.getHallById);
router.post('/', verifyToken, requireManagement, hallController.createHall);
router.put('/:id', verifyToken, requireManagement, hallController.updateHall);
router.delete('/:id', verifyToken, requireManagement, hallController.deleteHall);

export default router;