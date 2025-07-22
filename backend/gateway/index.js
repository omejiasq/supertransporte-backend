require('dotenv').config();
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = process.env.PORT;
const JWT_SECRET = process.env.JWT_SECRET;

// Middleware global de verificación de JWT
app.use((req, res, next) => {
  if (req.path.startsWith('/auth/')) return next();
  const header = req.headers.authorization || '';
  const token = header.split(' ')[1] || '';
  try {
    jwt.verify(token, JWT_SECRET);
    next();
  } catch {
    res.status(401).json({ message: 'No autorizado' });
  }
});

// Proxies a microservicios
app.use('/auth', createProxyMiddleware({ target: process.env.AUTH_URL, changeOrigin: true }));
app.use('/mantenimientos', createProxyMiddleware({ target: process.env.MANTO_URL, changeOrigin: true }));

app.listen(PORT, () => console.log(`Gateway corriendo en http://localhost:${PORT}`));