const mongoose = require('mongoose');

const autorizacionSchema = new mongoose.Schema({
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
  nombresResponsable: {
    type: String,
    required: true
  },
  tipoIdentificacionResponsable: {
    type: Number,
    required: true
  },
  numeroIdentificacionResponsable: {
    type: String,
    required: true
  },
  pasajeros: [
    {
      tipoIdentificacion: Number,
      numeroIdentificacion: String,
      nombres: String,
      parentesco: String,
      autorizador: {
        tipoIdentificacion: Number,
        numeroIdentificacion: String,
        nombres: String
      }
    }
  ],
  mantenimientoId: {
    type: Number,
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

module.exports = mongoose.model('Autorizacion', autorizacionSchema);
