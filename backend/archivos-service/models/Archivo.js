const mongoose = require('mongoose');

const archivoSchema = new mongoose.Schema({
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
    required: true, // Ej: 1: mantenimiento, 2: alistamiento, 3: autorización...
    enum: [1, 2, 3, 4]
  },
  documento: {
    type: String,
    required: true // nombre interno (ej: abc_202307.pdf)
  },
  nombreOriginal: {
    type: String,
    required: true // nombre original cargado por el usuario
  },
  ruta: {
    type: String,
    required: true // ruta relativa en S3 (ej: /sicov/empresaX/)
  },
  extension: {
    type: String,
    required: false // opcional, ej: pdf, jpg, png
  },
  sizeBytes: {
    type: Number,
    required: false
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

module.exports = mongoose.model('Archivo', archivoSchema);
