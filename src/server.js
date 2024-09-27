const express = require('express');
const app = express();
const router = require('./routers/router');
const sequelize = require('./config/config');

app.use(express.json());
app.use('/api', router);

sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
  });
});
