import Router from 'express';
import * as movieController from '../controllers/movie.controller.js';
import { verifyToken, requireManagement } from '../middlewares/auth.middleware.js';
const router = Router();

router.get('/', movieController.getActiveMovies);
router.get('/all', movieController.getAllMovies);
router.get('/:id', movieController.getMovieById);
router.post('/', verifyToken, requireManagement, movieController.createMovie);
router.put('/:id', verifyToken, requireManagement, movieController.updateMovie);
router.delete('/:id', verifyToken, requireManagement, movieController.deleteMovie);

export default router;