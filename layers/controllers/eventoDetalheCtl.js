var eventoDetRep = require('../repository/mysql/eventoDetalheRep.js');

module.exports = (app) => {
    app.get('/eventos/detalhe', (req, res) => {
        eventoDetRep.getAll()
            .then(q => res.send(q))
            .catch(err => {
                return res.status(err.statusCode || 500).send(err);
            });
    });

    app.get('/eventos/detalhe/:ID', (req, res) => {
        eventoDetRep.getById(req.params.ID)
            .then(q => res.send(q))
            .catch(err => {
                return res.status(err.statusCode || 500).send(err);
            });
    });


    app.post('/eventos/detalhe/', (req, res) => {
        eventoDetRep.insert(req.body)
            .then(q => res.send(q))
            .catch(err => {
                return res.status(err.statusCode || 500).send(err);
            });
    });

    app.put('/eventos/detalhe/', (req, res) => {
        eventoDetRep.update(req.body)
            .then(q => res.send(q))
            .catch(err => {
                return res.status(err.statusCode || 500).send(err);
            });
    });

    app.delete('/eventos/detalhe/:ID', (req, res) => {
        eventoDetRep.delete(req.para.ID)
            .then(q => res.send(q))
            .catch(err => {
                return res.status(err.statusCode || 500).send(err);
            });
    });
};