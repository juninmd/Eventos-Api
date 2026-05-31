module.exports = {
    urlApi: process.env.URL_API || 'http://localhost',
    portApi: process.env.PORT || 4500,
    dataConfig: {
        MYSQL: {
            host: process.env.MYSQL_HOST || 'localhost',
            port: parseInt(process.env.MYSQL_PORT, 10) || 5500,
            user: process.env.MYSQL_USER || 'root',
            password: process.env.MYSQL_PASSWORD || '',
            database: process.env.MYSQL_DATABASE || 'eventos'
        }
    },
    corsOrigins: process.env.CORS_ORIGINS ? process.env.CORS_ORIGINS.split(',') : ['http://localhost:3000']
};
