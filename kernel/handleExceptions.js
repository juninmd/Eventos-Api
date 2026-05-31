module.exports = (app) => {
    app.use((err, req, res, next) => {
        console.error(`[ERROR] ${err.message} | IP: ${req.ip} | URL: ${req.method} ${req.originalUrl}`);

        if (res.headersSent || res.finished)
            return;

        res.status(err.status || 500).send({
            message: {
                userMessage: 'Falha inesperada pela aplicação | erro interno'
            },
            content: null,
            isSuccess: false,
            details: {
                isUnexpectedError: true
            },
            statusCode: err.status || 500,
        });
        next();
    });
};
