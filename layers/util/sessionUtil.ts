export default {
    getUsuarioLogado: (req: any) => {
        const header = (req.headers['usuariologado'] || req.query.usuariologado);
        return JSON.parse(Buffer.from(header, 'base64').toString()).user;
    }
};