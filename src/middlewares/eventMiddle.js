const Evento = require('./models/Event');

exports.validarEvento = async (req, res, next) => {
    const { nome, data, localizacao } = req.body;
    if (!nome || !data || !localizacao) {
        return res.status(400).send('Dados do evento inválidos');
    }
    next();
};
