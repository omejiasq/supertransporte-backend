const mongoose = require('mongoose');

const parametricaTipoIdentificacionSchema = new mongoose.Schema({
  codigo: {
    type: Number,
    required: true,
    unique: true
  },
  descripcion: {
    type: String,
    required: true,
    trim: true
  },
  estado: {
    type: Boolean,
    default: true
  },
  creado: {
    type: Date,
    default: Date.now
  },
  actualizado: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('ParametricaTipoIdentificacion', parametricaTipoIdentificacionSchema);
