module.exports = {
    urlApi: 'http://localhost',
    portApi: process.env.PORT || 4500,
    dataConfig: {
        MYSQL: getBanco()
    }
};
function getBanco() {
    console.log("[MYSQL] Conectado a localhost");
    return {
        host: 'localhost',
        user: 'root',
        database: 'eventos',
        password: '',
        port: 5500
    }
}