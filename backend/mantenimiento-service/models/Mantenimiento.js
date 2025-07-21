const mongoose = require('mongoose');

const mantenimientoSchema = new mongoose.Schema({
  empresaId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Empresa',
    required: true
  },
  vigiladoId: {
    type: Number,
    required: true
  },
  tipo: {
    type: String,
    enum: ['preventivo', 'correctivo'],
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
  nitCentro: {
    type: Number,
    required: true
  },
  razonSocialCentro: {
    type: String,
    required: true
  },
  tipoIdentificacionResponsable: {
    type: Number, // se refiere a la paramétrica
    required: true
  },
  numeroIdentificacionResponsable: {
    type: String,
    required: true
  },
  nombresResponsable: {
    type: String,
    required: true
  },
  detalleActividades: {
    type: String,
    required: true
  },
  mantenimientoId: {
    type: Number, // ID interno usado para sincronización con Supertransporte
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

module.exports = mongoose.model('Mantenimiento', mantenimientoSchema);
