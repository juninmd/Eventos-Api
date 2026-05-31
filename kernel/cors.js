var webconfig = require('../webconfig.js');

module.exports = (app) => {
    app.use((req, res, next) => {
        var origin = req.headers.origin;
        if (origin && webconfig.corsOrigins.indexOf(origin) !== -1) {
            res.header('Access-Control-Allow-Origin', origin);
        } else if (!origin) {
            res.header('Access-Control-Allow-Origin', '*');
        }

        res.header('Content-Type', 'application/json; charset=utf-8');
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, User-Agent");
        res.header("Access-Control-Allow-Methods", "POST,PUT,DELETE,GET,OPTIONS");
        res.header("Access-Control-Allow-Credentials", "true");

        if (req.method === 'OPTIONS') {
            res.status(200).send();
            return;
        }
        next();
    });
};