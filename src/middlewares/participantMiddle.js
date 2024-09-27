const Participante = require('../models/Participant');


exports.validateParticipant = async (req, res, next) => {
    const { nome, email, eventoId } = req.body;
    if (!nome || !email || !eventoId) {
        return res.status(400).send('Dados do participante inválidos');
    }
    next();



const validateParticipantId = (req, res, next) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({
      msg: "Parametro faltando",
    });
  }

  return next();
};
}

module.exports = { validateParticipant, validateParticipantId };

