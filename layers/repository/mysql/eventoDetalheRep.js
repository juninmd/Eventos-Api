var mysql = require('./config/initMysql.js');

module.exports = {
    getById: (id) => {
        return new Promise((resolve, reject) => {
            mysql.executeString("MYSQL", "SELECT * FROM evento_detalhe WHERE IDDETALHE =  " + id,
                (err, result) => err ? reject(err) : resolve(result.content));
        });
    },
    getAll: () => {
        return new Promise((resolve, reject) => {
            mysql.executeString("MYSQL", "SELECT * FROM evento_detalhe ",
                (err, result) => err ? reject(err) : resolve(result));
        });
    },
    insert: (body) => {
        return new Promise((resolve, reject) => {
            mysql.execute("MYSQL", "INSERT INTO evento_detalhe SET ?", { IDEVENTO: body.IDEVENTO, DESCRICAO: body.DESCRICAO, DATA: body.DATA, TIPOMIDIA: body.TIPOMIDIA },
                (err, result) => err ? reject(err) : resolve(result));
        });
    },
    update: (body) => {
        return new Promise((resolve, reject) => {
            mysql.execute("MYSQL", "UPDATE evento_detalhe SET ? WHERE IDDETALHE =" + body.IDDETALHE, { IDDETALHE: body.IDDETALHE, IDEVENTO: body.IDEVENTO, DESCRICAO: body.DESCRICAO, DATA: body.DATA, TIPOMIDIA: body.TIPOMIDIA },
                (err, result) => err ? reject(err) : resolve(result));
        });
    },
    delete: (id) => {
        return new Promise((resolve, reject) => {
            mysql.executeString("MYSQL", "DELETE FROM evento_detalhe WHERE IDDETALHE =" + id,
                (err, result) => err ? reject(err) : resolve(result));
        });
    },
};
