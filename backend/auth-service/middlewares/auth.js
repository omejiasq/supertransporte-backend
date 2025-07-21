const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config');

module.exports = (req, res, next) => {
  const auth = req.headers.authorization?.split(' ')[1];
  if (!auth) return res.status(401).json({ message:'Token no enviado' });
  try {
    req.user = jwt.verify(auth, JWT_SECRET);
    next();
  } catch {
    res.status(401).json({ message:'Token inválido' });
  }
};
