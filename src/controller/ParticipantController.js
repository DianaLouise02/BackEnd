const Participante = require('../models/Participant');

exports.listarParticipantes = async (req, res) => {
  const participantes = await Participante.findAll();
  res.json(participantes);
};

exports.criarParticipante = async (req, res) => {
  const { nome, email, eventoId } = req.body;
  try {
    const novoParticipante = await Participante.create({ nome, email, eventoId });
    res.json(novoParticipante);
  } catch (error) {
    res.status(400).json({ error: 'Email já cadastrado para este evento.' });
  }
};

exports.buscarParticipante = async (req, res) => {
  const participante = await Participante.findByPk(req.params.id);
  if (participante) {
    res.json(participante);
  } else {
    res.status(404).send('Participante não encontrado');
  }
};

exports.atualizarParticipante = async (req, res) => {
  const { nome, email, eventoId } = req.body;
  const participante = await Participante.findByPk(req.params.id);
  if (participante) {
    try {
      await participante.update({ nome, email, eventoId });
      res.json(participante);
    } catch (error) {
      res.status(400).json({ error: 'Email já cadastrado para este evento.' });
    }
  } else {
    res.status(404).send('Participante não encontrado');
  }
};

exports.excluirParticipante = async (req, res) => {
  const participante = await Participante.findByPk(req.params.id);
  if (participante) {
    await participante.destroy();
    res.send('Participante excluído com sucesso');
  } else {
    res.status(404).send('Participante não encontrado');
  }
};


module.exports = ParticipantController;