export default (app: any) => {
    const allowedOrigins = (process.env.CORS_ORIGINS || 'http://localhost:4500').split(',').map(o => o.trim());

    app.use((req: any, res: any, next: any) => {
        const origin = req.headers.origin;
        if (origin && (allowedOrigins.includes(origin) || allowedOrigins.includes('*'))) {
            res.header("Access-Control-Allow-Origin", origin);
            res.header("Vary", "Origin");
        } else if (!origin) {
            res.header("Access-Control-Allow-Origin", "*");
        }

        res.header('Content-Type', 'application/json; charset=utf-8');
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, User-Agent");
        res.header("Access-Control-Allow-Methods", "POST,PUT,DELETE,GET,OPTIONS");
        res.header("Access-Control-Max-Age", "86400");

        if (req.method === 'OPTIONS') {
            res.status(204).send();
            return;
        }
        next();
    });
};