var eventoDetRep = require('../repository/mysql/eventoDetalheRep.js');

module.exports = (app) => {
    app.get('/eventos', (req, res) => {
        eventoDetRep.getAll()
            .then(q => res.send(q))
            .catch(err => {
                return res.status(err.statusCode || 500).send(err);
            });
    });

    app.get('/eventos/:ID', (req, res) => {
        eventoDetRep.getById(req.params.ID)
            .then(q => res.send(q))
            .catch(err => {
                return res.status(err.statusCode || 500).send(err);
            });
    });


    app.post('/eventos/', (req, res) => {
        eventoDetRep.insert(req.body)
            .then(q => res.send(q))
            .catch(err => {
                return res.status(err.statusCode || 500).send(err);
            });
    });

    app.put('/eventos/', (req, res) => {
        eventoDetRep.update(req.body)
            .then(q => res.send(q))
            .catch(err => {
                return res.status(err.statusCode || 500).send(err);
            });
    });

    app.delete('/eventos/:ID', (req, res) => {
        eventoDetRep.delete(req.para.ID)
            .then(q => res.send(q))
            .catch(err => {
                return res.status(err.statusCode || 500).send(err);
            });
    });
};