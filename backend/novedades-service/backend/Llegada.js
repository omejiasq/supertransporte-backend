const mongoose = require('mongoose');

const llegadaSchema = new mongoose.Schema({
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
  terminal: {
    type: String,
    required: true
  },
  numeroPasajeros: {
    type: Number,
    required: true
  },
  numeroTiquetes: {
    type: Number,
    required: false
  },
  tipoServicio: {
    type: Number, // código según paramétrica
    required: false
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
    type: Number,
    required: true // ID de sincronización Supertransporte
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

module.exports = mongoose.model('Llegada', llegadaSchema);
