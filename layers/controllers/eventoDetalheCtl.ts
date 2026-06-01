import eventoDetRep from '../repository/mysql/eventoDetalheRep';

export default (app: any) => {
    app.get('/eventos/detalhe', (req: any, res: any) => {
        eventoDetRep.getAll()
            .then((q: any) => res.send(q))
            .catch((err: any) => {
                return res.status(err.statusCode || 500).send(err);
            });
    });

    app.get('/eventos/detalhe/:ID', (req: any, res: any) => {
        eventoDetRep.getById(req.params.ID)
            .then((q: any) => res.send(q))
            .catch((err: any) => {
                return res.status(err.statusCode || 500).send(err);
            });
    });


    app.post('/eventos/detalhe/', (req: any, res: any) => {
        eventoDetRep.insert(req.body)
            .then((q: any) => res.send(q))
            .catch((err: any) => {
                return res.status(err.statusCode || 500).send(err);
            });
    });

    app.put('/eventos/detalhe/', (req: any, res: any) => {
        eventoDetRep.update(req.body)
            .then((q: any) => res.send(q))
            .catch((err: any) => {
                return res.status(err.statusCode || 500).send(err);
            });
    });

    app.delete('/eventos/detalhe/:ID', (req: any, res: any) => {
        eventoDetRep.delete(req.params.ID)
            .then((q: any) => res.send(q))
            .catch((err: any) => {
                return res.status(err.statusCode || 500).send(err);
            });
    });
};