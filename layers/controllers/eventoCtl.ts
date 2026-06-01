import eventoRep from '../repository/mysql/eventoRep';

export default (app: any) => {
    app.get('/eventos', (req: any, res: any) => {
        eventoRep.getAll()
            .then((q: any) => res.send(q))
            .catch((err: any) => {
                return res.status(err.statusCode || 500).send(err);
            });
    });

    app.get('/eventos/:ID', (req: any, res: any) => {
        eventoRep.getById(req.params.ID)
            .then((q: any) => res.send(q))
            .catch((err: any) => {
                return res.status(err.statusCode || 500).send(err);
            });
    });


    app.post('/eventos/', (req: any, res: any) => {
        eventoRep.insert(req.body)
            .then((q: any) => res.send(q))
            .catch((err: any) => {
                return res.status(err.statusCode || 500).send(err);
            });
    });

    app.put('/eventos/', (req: any, res: any) => {
        eventoRep.update(req.body)
            .then((q: any) => res.send(q))
            .catch((err: any) => {
                return res.status(err.statusCode || 500).send(err);
            });
    });

    app.delete('/eventos/:ID', (req: any, res: any) => {
        eventoRep.delete(req.params.ID)
            .then((q: any) => res.send(q))
            .catch((err: any) => {
                return res.status(err.statusCode || 500).send(err);
            });
    });
};