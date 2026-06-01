var express = require("express");
var helmet = require("helmet");
var rateLimit = require("express-rate-limit");
var app = express();
var webconfig = require('./webconfig.js');
var expressLoad = require('express-load');

app.use(helmet());

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 200,
    message: {
        message: { userMessage: 'Muitas requisições deste IP, tente novamente mais tarde.' },
        isSuccess: false,
        statusCode: 429
    }
});
app.use(limiter);

expressLoad('kernel')
    .then('layers/controllers')
    .into(app);

app.listen(webconfig.portApi, () => {
    console.log(`[Eventos - API] - Ativo :D | ${webconfig.urlApi}:${webconfig.portApi}`);
});

module.exports = app;
