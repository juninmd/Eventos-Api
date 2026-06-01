module.exports = {
    urlApi: process.env.URL_API || 'http://localhost',
    portApi: parseInt(process.env.PORT, 10) || 4500,
    dataConfig: {
        MYSQL: {
            host: process.env.MYSQL_HOST || 'localhost',
            user: process.env.MYSQL_USER || 'root',
            database: process.env.MYSQL_DATABASE || 'eventos',
            password: process.env.MYSQL_PASSWORD || '',
            port: parseInt(process.env.MYSQL_PORT, 10) || 3306
        }
    }
};
