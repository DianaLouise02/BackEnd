const express = require('express');
const router = express.Router();
const EventController = require('../controller/EventController');

router.get('/', EventController.listarEventos);
router.post('/',EventController.criarEvento);
router.get('/:id', EventController.buscarEvento);
router.put('/:id', EventController.atualizarEvento);
router.delete('/:id', EventController.excluirEvento);

module.exports = router;
