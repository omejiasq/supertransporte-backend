const mongoose = require('mongoose');

const PermissionSchema = new mongoose.Schema({
  module: { type: String, required:true },
  action: { type: String, required:true }
}, { timestamps:true });

PermissionSchema.index({ module:1, action:1 }, { unique:true });

module.exports = mongoose.model('Permission', PermissionSchema);
