const mongoose = require('mongoose');

const programaMantenimientoSchema = new mongoose.Schema({
  empresaId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Empresa',
    required: true
  },
  vigiladoId: {
    type: Number,
    required: true
  },
  tipoId: {
    type: Number,
    enum: [1, 2, 3, 4], // 1: Preventivo, 2: Correctivo, 3: Alistamiento, 4: Autorización
    required: true
  },
  documento: {
    type: String,
    required: true
  },
  nombreOriginal: {
    type: String,
    required: true
  },
  ruta: {
    type: String,
    required: true
  },
  estado: {
    type: Boolean,
    default: true
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

module.exports = mongoose.model('ProgramaMantenimiento', programaMantenimientoSchema);
