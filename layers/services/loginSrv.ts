import usuarioRep from '../repository/mysql/usuarioRep';
import * as bcrypt from 'bcryptjs';

export default {
    async get(body: any) {
        try {
            const e = await usuarioRep.getById(body.EMAIL);
            if (e.length == 0) {
                return { message: { userMessage: 'Usuário não encontrado!' }, statusCode: 404 };
            }
            const confere = await bcrypt.compare(body.SENHA, e[0].SENHA);
            if (confere) {
                delete e[0].SENHA;
                return { content: e[0], statusCode: 200 };
            }
            return { message: { userMessage: 'Senha inválida!' }, statusCode: 401 };
        } catch (err) {
            return { message: { userMessage: 'Falha ao efetuar login!' }, statusCode: 500 };
        }
    },
    
    async insert(body: any) {
        const hash = await bcrypt.hash(body.SENHA, 10);
        const newUser = { ...body, SENHA: hash };
        return await usuarioRep.insert(newUser);
    }
};