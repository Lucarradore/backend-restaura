const express = require('express');
const dishesController = require('../controllers/dishesController');

const router = express.Router();

router.get('/', dishesController.getAll);
router.post('/', dishesController.create);
router.put('/:id', dishesController.update);
router.delete('/:id', dishesController.remove);

module.exports = router;

