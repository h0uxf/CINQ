import Router from 'express';
import * as movieController from '../controllers/movie.controller.js';
const router = Router();

router.get('/', movieController.getActiveMovies);
router.get('/all', movieController.getAllMovies);
router.get('/:id', movieController.getMovieById);
router.post('/', movieController.createMovie);
router.put('/:id', movieController.updateMovie);
router.delete('/:id', movieController.deleteMovie);

export default router;