var bodyParser = require('body-parser')

module.exports = (app) => {
    app.use(bodyParser.json({ limit: '1mb' }));
    app.use(bodyParser.urlencoded({ limit: '1mb', extended: true }));
};