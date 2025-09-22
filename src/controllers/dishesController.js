const Dish = require('../models/Dish');

const getAll = async (_, res) => {
  try {
    const dishes = await Dish.find();
    res.json(dishes);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener los platos' });
  }
};

const create = async (req, res) => {
  try {
    const dish = new Dish(req.body);
    await dish.save();
    res.status(201).json(dish);
  } catch (err) {
    res.status(400).json({ error: 'Error al crear el plato' });
  }
};

const update = async (req, res) => {
  try {
    const dish = await Dish.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!dish) {
      return res.status(404).json({ error: 'Plato no encontrado' });
    }
    res.json(dish);
  } catch (err) {
    res.status(400).json({ error: 'Error al actualizar el plato' });
  }
};

const remove = async (req, res) => {
  try {
    const dish = await Dish.findByIdAndDelete(req.params.id);
    if (!dish) {
      return res.status(404).json({ error: 'Plato no encontrado' });
    }
    res.status(204).end();
  } catch (err) {
    res.status(400).json({ error: 'Error al eliminar el plato' });
  }
};

module.exports = {
  getAll,
  create,
  update,
  remove,
};
