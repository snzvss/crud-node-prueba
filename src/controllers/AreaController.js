const Area = require('../models/area');

const AreaController = {
  getAllAreas: async (req, res) => {
    try {
      const areas = await Area.findAll();
      res.json(areas);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error interno del servidor');
    }
  },

  getAreaById: async (req, res) => {
    const areaId = req.params.id;

    try {
      const area = await Area.findByPk(areaId);
      if (!area) {
        return res.status(404).json({ message: 'Área no encontrada' });
      }
      res.json(area);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error interno del servidor');
    }
  },

  createArea: async (req, res) => {
    const nuevaArea = req.body;

    try {
      const areaCreada = await Area.create(nuevaArea);
      res.status(201).json(areaCreada);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error interno del servidor');
    }
  },

  updateArea: async (req, res) => {
    const areaId = req.params.id;
    const datosActualizados = req.body;

    try {
      const area = await Area.findByPk(areaId);
      if (!area) {
        return res.status(404).json({ message: 'Área no encontrada' });
      }

      await area.update(datosActualizados);
      res.json(area);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error interno del servidor');
    }
  },

  deleteArea: async (req, res) => {
    const areaId = req.params.id;

    try {
      const area = await Area.findByPk(areaId);
      if (!area) {
        return res.status(404).json({ message: 'Área no encontrada' });
      }

      await area.destroy();
      res.json({ message: 'Área eliminada exitosamente' });
    } catch (error) {
      console.error(error);
      res.status(500).send('Error interno del servidor');
    }
  },
};

module.exports = AreaController;
