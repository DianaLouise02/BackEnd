const express = require('express');
const router = express.Router();
const ParticipantController = require('./controller/ParticipantController');

router.get('/', ParticipantController.listarParticipantes);
router.post('/', ParticipantController.criarParticipante);
router.get('/:id', ParticipantController.buscarParticipante);
router.put('/:id', ParticipantController.atualizarParticipante);
router.delete('/:id', ParticipantController.excluirParticipante);

module.exports = router;
