const mongoose = require('mongoose');

const novedadSchema = new mongoose.Schema({
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
  fecha: {
    type: Date,
    required: true
  },
  hora: {
    type: String,
    required: true
  },
  tipoNovedad: {
    type: Number, // Código según paramétrica
    required: true
  },
  descripcion: {
    type: String,
    required: true
  },
  conductorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Conductor'
  },
  rutaId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Ruta'
  },
  mantenimientoId: {
    type: Number, // ID de sincronización con Supertransporte
    required: true
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

module.exports = mongoose.model('Novedad', novedadSchema);
