const Role = require('../models/Role');
const User = require('../models/User');
const { JWT_SECRET } = require('../config');
const jwt = require('jsonwebtoken');

module.exports = (moduleName, action) => {
  return async (req, res, next) => {
    try {
      const token = req.headers.authorization?.split(' ')[1];
      const payload = jwt.verify(token, JWT_SECRET);
      // Carga el usuario con sus roles y permisos poblados
      const user = await User.findById(payload.sub)
        .populate({ path:'roles', populate:'permissions' });
      // Aplanar permisos en formato 'mod:act'
      const perms = user.roles
        .flatMap(r => r.permissions)
        .map(p => `${p.module}:${p.action}`);
      if (!perms.includes(`${moduleName}:${action}`))
        return res.status(403).json({ message:'Permiso denegado' });
      next();
    } catch(err) {
      console.error(err);
      res.status(401).json({ message:'No autorizado' });
    }
  };
};
