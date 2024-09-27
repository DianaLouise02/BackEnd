const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Evento = require('./evento');

const Participant = sequelize.define('Participante', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  eventoId: {
    type: DataTypes.INTEGER,
    references: {
      model: Evento,
      key: 'id'
    }
  }
}, {
  indexes: [
    {
      unique: true,
      fields: ['email', 'eventoId']
    }
  ]
});

Participante.belongsTo(Evento, { foreignKey: 'eventoId' });

module.exports = Participant;
