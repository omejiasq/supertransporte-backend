const jwt  = require('jsonwebtoken');
const User = require('../models/User');
const Role = require('../models/Role');
const { JWT_SECRET, JWT_EXPIRES_IN } = require('../config');

// Registro con asignación de roles (recibe roles: [roleName,...])
exports.register = async (req, res, next) => {
  try {
    const { email, password, roles } = req.body;

    // Revisa que roles llegue correctamente
    const allRoles = await Role.find();

    const roleDocs = await Role.find({ name: { $in: roles } });

    const user = await User.create({ email, password, roles: roleDocs.map(r=>r._id) });
    res.status(201).json({ id:user._id, email:user.email, roles });
  
  } catch(err) {
    next(err);
  }
};

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(401).json({ message:'Credenciales inválidas' });
    const match = await user.comparePassword(password);
    if (!match) return res.status(401).json({ message:'Credenciales inválidas' });

    //const payload = { sub: user._id };
    //const token = jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
    const payload = { sub: user._id, roles: user.roles };
    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
    res.json({ token });

    res.json({ token });
  } catch(err) {
    next(err);
  }
};
