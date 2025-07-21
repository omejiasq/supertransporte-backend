require('dotenv').config();
const mongoose = require('mongoose');
const { MONGO_URI } = require('../config');
const Permission = require('../models/Permission');
const Role       = require('../models/Role');

const seed = async () => {
  await mongoose.connect(MONGO_URI);

  // 1) Definir todos los permisos
  const specs = [
    { module:'despachos',      action:'read' },
    { module:'despachos',      action:'write' },
    { module:'mantenimientos', action:'read' },
    { module:'mantenimientos', action:'write' },
    { module:'PESV',           action:'read' },
    { module:'PESV',           action:'write' },
    { module:'novedades',      action:'read' },
    { module:'novedades',      action:'write' },
    // Añade aquí más módulos/acciones
  ];

  // 2) Upsert permisos
  const perms = await Promise.all(specs.map(s =>
    Permission.findOneAndUpdate(s, s, { upsert:true, new:true })
  ));

  // 3) Crear roles y asignar subsets
  await Role.findOneAndUpdate(
    { name:'Admin' },
    { name:'Admin', permissions: perms.map(p=>p._id) },
    { upsert:true }
  );

  await Role.findOneAndUpdate(
    { name:'Empresa' },
    {
      name:'Empresa',
      permissions: perms
        .filter(p => p.module!=='PESV') // Empresa no accede a PESV
        .map(p=>p._id)
    },
    { upsert:true }
  );

  console.log('✅ Seed completado');
  process.exit(0);
};

seed().catch(err => {
  console.error(err);
  process.exit(1);
});
