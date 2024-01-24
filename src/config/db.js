const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('db', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306,
});

sequelize.authenticate()
  .then(() => {
    console.log('Conexión a la base de datos establecida correctamente.');
  })
  .catch((error) => {
    console.error('Error al conectar con la base de datos:', error);
  });

module.exports = sequelize;
