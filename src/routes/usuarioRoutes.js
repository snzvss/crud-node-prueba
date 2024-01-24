const express = require('express');
const router = express.Router();
const UsuarioController = require('../controllers/UsuarioController');
const ReportController = require('../controllers/ReportController');

// Ruta para generar el reporte en Excel de usuarios por área
router.get('/reporte', ReportController.generateExcelReport);

// Rutas para CRUD de usuarios
router.get('/', UsuarioController.getAllUsuarios);
router.get('/:id', UsuarioController.getUsuarioById);
router.post('/', UsuarioController.createUsuario);
router.put('/:id', UsuarioController.updateUsuario);
router.delete('/:id', UsuarioController.deleteUsuario);

module.exports = router;
