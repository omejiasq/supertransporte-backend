const Mantenimiento = require('../models/Mantenimiento');

exports.listar = async (req, res, next) => {
  try {
    const docs = await Mantenimiento.find();
    res.json(docs);
  } catch(err) { next(err) }
};

exports.crear = async (req, res, next) => {
  try {
    const doc = await Mantenimiento.create(req.body);
    res.status(201).json(doc);
  } catch(err) { next(err) }
};
