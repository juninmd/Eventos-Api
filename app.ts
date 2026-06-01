import * as express from "express";
import * as helmet from "helmet";
import * as rateLimit from "express-rate-limit";
import * as webconfig from './webconfig';
import * as expressLoad from 'express-load';

const app = express();

app.use(helmet());

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 200,
    message: {
        message: { userMessage: 'Muitas requisições deste IP, tente novamente mais tarde.' },
        isSuccess: false,
        statusCode: 429
    }
});
app.use(limiter);

expressLoad('kernel')
    .then('layers/controllers')
    .into(app);

app.listen(webconfig.portApi, () => {
    console.log(`[Eventos - API] - Ativo :D | ${webconfig.urlApi}:${webconfig.portApi}`);
});

export default app;