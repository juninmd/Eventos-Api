var express = require("express");
var app = express();
var webconfig = require('./webconfig.js');
var expressLoad = require('express-load');

expressLoad('kernel')
    .then('layers/controllers')
    .into(app);

app.listen(webconfig.portApi, () => {
    console.log(`[Eventos - API] - Ativo :D | ${webconfig.urlApi}:${webconfig.portApi}`);
});

module.exports = app;