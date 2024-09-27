const { Sequelize } = require("sequelize");

const sequelize = new Sequelize('eventogestao', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;