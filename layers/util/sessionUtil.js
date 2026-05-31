module.exports = {
    getUsuarioLogado: (req) => {
        var header = (req.headers['usuariologado'] || req.query.usuariologado);
        if (!header) return null;
        try {
            var decoded = new Buffer(header, 'base64').toString();
            return JSON.parse(decoded).user || null;
        } catch (e) {
            return null;
        }
    }
};