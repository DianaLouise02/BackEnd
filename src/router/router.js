const express = require('express');
const router = express.Router();
const eventRouter = require('../eventRouter');
const participantRouter = require('../participantRouter');

router.use('/evento', eventRouter);
router.use('/participante', participantRouter);

module.exports = router;
