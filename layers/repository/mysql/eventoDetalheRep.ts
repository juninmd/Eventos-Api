import mysql from './config/initMysql';

export default {
    getById: (id: any) => {
        return new Promise((resolve, reject) => {
            mysql.executeQuery("MYSQL", "SELECT * FROM evento_detalhe WHERE IDEVENTO = ?", [id],
                (err, result) => err ? reject(err) : resolve(result.content));
        });
    },
    getAll: () => {
        return new Promise((resolve, reject) => {
            mysql.executeQuery("MYSQL", "SELECT * FROM evento_detalhe ",
                (err, result) => err ? reject(err) : resolve(result.content));
        });
    },
    insert: (body: any) => {
        return new Promise((resolve, reject) => {
            mysql.execute("MYSQL", "INSERT INTO evento_detalhe SET ?", { IDEVENTO: body.IDEVENTO, DESCRICAO: body.DESCRICAO, DATA: body.DATA, TIPOMIDIA: body.TIPOMIDIA },
                (err, result) => err ? reject(err) : resolve(result));
        });
    },
    update: (body: any) => {
        return new Promise((resolve, reject) => {
            mysql.executeQuery("MYSQL", "UPDATE evento_detalhe SET ? WHERE IDDETALHE = ?",
                [{ IDDETALHE: body.IDDETALHE, IDEVENTO: body.IDEVENTO, DESCRICAO: body.DESCRICAO, DATA: body.DATA, TIPOMIDIA: body.TIPOMIDIA }, body.IDDETALHE],
                (err, result) => err ? reject(err) : resolve(result));
        });
    },
    delete: (id: any) => {
        return new Promise((resolve, reject) => {
            mysql.executeQuery("MYSQL", "DELETE FROM evento_detalhe WHERE IDDETALHE = ?", [id],
                (err, result) => err ? reject(err) : resolve(result));
        });
    },
};