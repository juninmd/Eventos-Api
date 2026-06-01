import validate from "node-validate";
import requestMessage from './requestMessageValidate';

export default {
    validate: (user: any, error: any) => {
        const v = validate()
            .isLength(user.EMAIL, 1, 'Necessário informar o login!')
            .isLength(user.SENHA, 1, 'Necessário informar a senha!');
        
        if (v.errors.length > 0) {
            error(requestMessage.send(v.errors));
        } else {
            error(null);
        }
    }
};