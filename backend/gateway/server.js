require('dotenv').config();
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express();

// Proxy de cada microservicio
app.use('/api/auth',          createProxyMiddleware({ target: 'http://auth-service:3002', changeOrigin:true }));
app.use('/api/mantenimientos',createProxyMiddleware({ target: 'http://mantenimiento-service:3004', changeOrigin:true }));
// ...añade más proxies para despachos, archivos, novedades, PESV, etc.

app.listen(3000, () =>
  console.log('› gateway corriendo en http://localhost:3000')
);
