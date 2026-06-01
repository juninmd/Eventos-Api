import * as bodyParser from 'body-parser';

export default (app: any) => {
    app.use(bodyParser.json({ limit: '10mb' }));
    app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));
};