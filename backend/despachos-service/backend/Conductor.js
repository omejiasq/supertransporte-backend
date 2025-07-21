const mongoose = require('mongoose');

const conductorSchema = new mongoose.Schema({
  empresaId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Empresa',
    required: true
  },
  tipoIdentificacion: {
    type: Number,
    required: true // corresponde a paramétrica
  },
  numeroIdentificacion: {
    type: String,
    required: true,
    unique: true
  },
  nombres: {
    type: String,
    required: true,
    trim: true
  },
  licenciaConduccion: {
    numero: {
      type: String,
      required: true
    },
    vencimiento: {
      type: Date,
      required: true
    }
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

module.exports = mongoose.model('Conductor', conductorSchema);
