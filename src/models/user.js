// usuarios.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Area = require('./area');

const Usuario = sequelize.define('Usuario', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombres: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  apellidos: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  fecha_nacimiento: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  numero_documento: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  area_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  salario: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  estado: {
    type: DataTypes.ENUM('Activo', 'Inactivo'),
    defaultValue: 'Activo',
  },
}, {
  timestamps: false, 
});

Usuario.belongsTo(Area, { foreignKey: 'area_id', as: 'Area' });

module.exports = Usuario;
