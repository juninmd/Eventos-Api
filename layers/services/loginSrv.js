var usuarioRep = require('../repository/mysql/usuarioRep.js');
var bcrypt = require('bcryptjs');

module.exports = {
    get: (body) => {
        return usuarioRep.getById(body.EMAIL)
            .then(e => {
                if (e.length == 0) {
                    return { message: { userMessage: 'Usuário não encontrado!' }, statusCode: 404 };
                }
                return bcrypt.compare(body.SENHA, e[0].SENHA)
                    .then(confere => {
                        delete e[0].SENHA;
                        if (confere) {
                            return { content: e[0], statusCode: 200 }
                        }
                        return { message: { userMessage: 'Senha inválida!' }, statusCode: 401 };
                    });
            })
            .catch(err => {
                return { message: { userMessage: 'Falha ao efetuar login!' }, statusCode: 500 };
            });
    },
    insert: (body) => {
        return bcrypt.hash(body.SENHA, 10)
            .then(hash => {
                body.SENHA = hash;
                return usuarioRep.insert(body);
            });
    }

}
