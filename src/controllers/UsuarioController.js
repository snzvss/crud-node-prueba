const Usuario = require('../models/user');

const UsuarioController = {
 getAllUsuarios: async (req, res) => {
    try {
      const page = parseInt(req.query.page) || 1;
      const pageSize = parseInt(req.query.pageSize) || 10;

      const offset = (page - 1) * pageSize;

      const usuarios = await Usuario.findAll({
        limit: pageSize,
        offset: offset,
      });

      res.json(usuarios);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error interno del servidor');
    }
  },

  getUsuarioById: async (req, res) => {
    const usuarioId = req.params.id;

    try {
      const usuario = await Usuario.findByPk(usuarioId);
      if (!usuario) {
        return res.status(404).json({ message: 'Usuario no encontrado' });
      }
      res.json(usuario);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error interno del servidor');
    }
  },

  createUsuario: async (req, res) => {
    const nuevoUsuario = req.body;

    try {
      const usuarioCreado = await Usuario.create(nuevoUsuario);
      res.status(201).json(usuarioCreado);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error interno del servidor');
    }
  },

  updateUsuario: async (req, res) => {
    const usuarioId = req.params.id;
    const datosActualizados = req.body;

    try {
      const usuario = await Usuario.findByPk(usuarioId);
      if (!usuario) {
        return res.status(404).json({ message: 'Usuario no encontrado' });
      }

      await usuario.update(datosActualizados);
      res.json(usuario);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error interno del servidor');
    }
  },

  deleteUsuario: async (req, res) => {
    const usuarioId = req.params.id;

    try {
      const usuario = await Usuario.findByPk(usuarioId);
      if (!usuario) {
        return res.status(404).json({ message: 'Usuario no encontrado' });
      }

      await usuario.destroy();
      res.json({ message: 'Usuario eliminado exitosamente' });
    } catch (error) {
      console.error(error);
      res.status(500).send('Error interno del servidor');
    }
  },
};

module.exports = UsuarioController;
