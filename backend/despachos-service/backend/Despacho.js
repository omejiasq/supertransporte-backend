const mongoose = require('mongoose');

const despachoSchema = new mongoose.Schema({
  empresaId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Empresa',
    required: true
  },
  vigiladoId: {
    type: Number,
    required: true
  },
  placa: {
    type: String,
    required: true
  },
  rutaId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Ruta',
    required: true
  },
  terminalSalida: {
    type: String,
    required: true
  },
  fechaSalida: {
    type: Date,
    required: true
  },
  horaSalida: {
    type: String,
    required: true
  },
  conductorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Conductor',
    required: true
  },
  nivelServicio: {
    type: Number,
    required: false
  },
  tipoDespacho: {
    type: Number, // según paramétrica si aplica
    required: false
  },
  estado: {
    type: String,
    enum: ['pendiente', 'enviado', 'fallido'],
    default: 'pendiente'
  },
  creadoEn: {
    type: Date,
    default: Date.now
  },
  actualizadoEn: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Despacho', despachoSchema);
