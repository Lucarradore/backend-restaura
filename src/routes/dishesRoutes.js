import express from 'express';
import dishesController from '../controllers/dishesController.js';

const router = express.Router();

router.get('/', dishesController.getAll);
router.post('/', dishesController.create);
router.put('/:id', dishesController.update);
router.delete('/:id', dishesController.remove);

export default router;