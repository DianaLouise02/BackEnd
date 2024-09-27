const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');
const Participant = require('./Participante');

const Event = sequelize.define('Evento', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  data: {
    type: DataTypes.DATE,
    allowNull: false
  },
  localizacao: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  hooks: {
    beforeDestroy: async (evento, options) => {
      await Participant.destroy({ where: { eventoId: evento.id } });
    }
  }
});

module.exports = Event;