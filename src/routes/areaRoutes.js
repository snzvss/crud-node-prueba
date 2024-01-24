const express = require('express');
const router = express.Router();
const AreaController = require('../controllers/AreaController');

// Rutas para CRUD de áreas
router.get('/', AreaController.getAllAreas);
router.get('/:id', AreaController.getAreaById);
router.post('/', AreaController.createArea);
router.put('/:id', AreaController.updateArea);
router.delete('/:id', AreaController.deleteArea);

module.exports = router;
