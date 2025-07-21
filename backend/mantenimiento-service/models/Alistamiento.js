const mongoose = require('mongoose');

const alistamientoSchema = new mongoose.Schema({
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
  tipoIdentificacionResponsable: {
    type: Number, // corresponde a paramétrica
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
  mantenimientoId: {
    type: Number, // ID obtenido del endpoint guardar-mantenimiento
    required: true
  },
  actividades: [
    {
      codigo: String, // código de la actividad del protocolo
      descripcion: String,
      resultado: {
        type: String,
        enum: ['cumple', 'no_cumple', 'no_aplica'],
        required: true
      },
      observaciones: String
    }
  ],
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

module.exports = mongoose.model('Alistamiento', alistamientoSchema);
