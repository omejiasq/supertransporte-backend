const router = require('express').Router();
const ctrl   = require('../controllers/manto.controller');
const authz = require('../middlewares/authorize');

router.get('/',  authz('mantenimientos','read'),  ctrl.listar);
router.post('/', authz('mantenimientos','write'), ctrl.crear);

module.exports = router;
