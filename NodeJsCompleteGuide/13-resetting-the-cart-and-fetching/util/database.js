const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'Avishka.99', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
