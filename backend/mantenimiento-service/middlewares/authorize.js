const jwt = require('jsonwebtoken');
const User = require('../models/User');
const Role = require('../models/Role');
const Permission = require('../models/Permission');
const { JWT_SECRET } = require('../config');


module.exports = function authorize(module, action) {
  return (req, res, next) => {
    console.log('🔑 JWT_SECRET is:', process.env.JWT_SECRET);
    const authHeader = req.headers.authorization;
    console.log('🛡️ Authorization header:', authHeader);
    if (!authHeader) return res.status(401).json({ message: 'No autorizado' });
    
    const token = authHeader.split(' ')[1];
    try {
      const payload = jwt.verify(token, process.env.JWT_SECRET);
      console.log('✅ Token payload:', payload);
      // aquí continúa tu lógica de permisos...
      next();
    } catch (err) {
      console.error('❌ JWT Error:', err.message);
      return res.status(401).json({ message: 'No autorizado' });
    }
  };
};
