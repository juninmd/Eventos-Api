var eventoRep = require('../repository/mysql/eventoRep.js');

module.exports = (app) => {
    app.get('/eventos', (req, res) => {
        eventoRep.getAll()
            .then(q => res.send(q))
            .catch(err => {
                return res.status(err.statusCode || 500).send(err);
            });
    });

    app.get('/eventos/:ID', (req, res) => {
        eventoRep.getById(req.params.ID)
            .then(q => res.send(q))
            .catch(err => {
                return res.status(err.statusCode || 500).send(err);
            });
    });


    app.post('/eventos/', (req, res) => {
        eventoRep.insert(req.body)
            .then(q => res.send(q))
            .catch(err => {
                return res.status(err.statusCode || 500).send(err);
            });
    });

    app.put('/eventos/', (req, res) => {
        eventoRep.update(req.body)
            .then(q => res.send(q))
            .catch(err => {
                return res.status(err.statusCode || 500).send(err);
            });
    });

    app.delete('/eventos/:ID', (req, res) => {
        eventoRep.delete(req.para.ID)
            .then(q => res.send(q))
            .catch(err => {
                return res.status(err.statusCode || 500).send(err);
            });
    });
};