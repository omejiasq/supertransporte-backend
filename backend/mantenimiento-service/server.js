console.log('🔑 JWT_SECRET is:', process.env.JWT_SECRET);
require('dotenv').config();
const express  = require('express');
const mongoose = require('mongoose');
const { PORT, MONGO_URI } = require('./config');
const mantoRoutes = require('./routes/manto.routes');

const app = express();
app.use(express.json());

mongoose
  .connect(MONGO_URI, { useNewUrlParser:true, useUnifiedTopology:true })
  .then(() => console.log('› mantenimiento-service: Mongo conectado'))
  .catch(err => console.error(err));

app.use('/api/mantenimientos', mantoRoutes);

app.use((err,_,res,__) => {
  console.error(err);
  res.status(err.status||500).json({ message: err.message });
});

app.listen(PORT, () =>
  console.log(`› mantenimiento-service corriendo en http://localhost:${PORT}`)
);
