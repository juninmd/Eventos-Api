import * as morgan from 'morgan';

export default (app: any) => {
    app.use(morgan(':method | :status | HTTP :http-version | Resposta: :response-time ms | Data: :date[web] | URL: :url'));
};