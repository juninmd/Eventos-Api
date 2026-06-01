import loginSrv from '../services/loginSrv';
import loginVld from '../validate/loginVld';

export default (app: any) => {
    app.post('/login', async (req: any, res: any) => {
        req.body.EMAIL = req.body.EMAIL.trim().toUpperCase();

        loginVld.validate(req.body, (err: any) => {
            if (err) {
                res.status(err.statusCode || 500).send(err);
                return;
            }

            loginSrv.get(req.body)
                .then((q: any) => res.status(200).send(q))
                .catch((err: any) => {
                    return res.status(err.statusCode || 500).send(err);
                });
        });
    });
};