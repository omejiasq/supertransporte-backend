require('dotenv').config();
const express  = require('express');
const mongoose = require('mongoose');
const { PORT, MONGO_URI } = require('./config');
const authRoutes = require('./routes/auth.routes');

const app = express();
app.use(express.json());

mongoose
  .connect(MONGO_URI, { useNewUrlParser:true, useUnifiedTopology:true })
  .then(() => console.log('› auth-service: Mongo conectado'))
  .catch(err => console.error(err));

app.use('/api/auth', authRoutes);

// Ruta de prueba protegida
const auth = require('./middlewares/auth');
app.get('/api/auth/me', auth, (req, res) => {
  res.json({ userId: req.user.sub });
});

// Error handler
app.use((err,_,res,__) => {
  console.error(err);
  res.status(err.status||500).json({ message: err.message });
});

app.listen(PORT, () =>
  console.log(`› auth-service corriendo en http://localhost:${PORT}`)
);
