const mongoose = require('mongoose');

const vehiculoSchema = new mongoose.Schema({
  empresaId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Empresa',
    required: true
  },
  placa: {
    type: String,
    required: true,
    unique: true
  },
  soat: {
    numero: String,
    vencimiento: Date
  },
  revisionTecnicoMecanica: {
    numero: String,
    vencimiento: Date
  },
  tarjetaOperacion: {
    numero: String,
    vencimiento: Date
  },
  clase: {
    type: Number, // código según paramétrica
    required: false
  },
  nivelServicio: {
    type: Number, // código según paramétrica
    required: false
  },
  estado: {
    type: String,
    enum: ['activo', 'inactivo'],
    default: 'activo'
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

module.exports = mongoose.model('Vehiculo', vehiculoSchema);
