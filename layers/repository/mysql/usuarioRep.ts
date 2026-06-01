import mysql from './config/initMysql';

export default {
    getById: (EMAIL: string) => {
        return new Promise((resolve, reject) => {
            mysql.executeQuery("MYSQL", "SELECT * FROM usuario WHERE EMAIL = ?", [EMAIL],
                (err, result) => err ? reject(err) : resolve(result.content));
        });
    },
    getAll: () => {
        return new Promise((resolve, reject) => {
            mysql.executeQuery("MYSQL", "SELECT * FROM usuario ",
                (err, result) => err ? reject(err) : resolve(result));
        });
    },
    insert: (body: any) => {
        return new Promise((resolve, reject) => {
            mysql.execute("MYSQL", "INSERT INTO usuario SET ?",
                {
                    EMAIL: body.EMAIL,
                    SENHA: body.SENHA,
                },
                (err, result) => err ? reject(err) : resolve(result));
        });
    },
    update: (body: any) => {
        return new Promise((resolve, reject) => {
            mysql.executeQuery("MYSQL", "UPDATE usuario SET ? WHERE EMAIL = ?", [{ SENHA: body.SENHA }, body.EMAIL],
                (err, result) => err ? reject(err) : resolve(result));
        });
    }
};