var mysql = require('./config/initMysql.js');

module.exports = {
    getById: (id) => {
        return new Promise((resolve, reject) => {
            mysql.executeString("MYSQL", "SELECT * FROM evento WHERE IDEVENTO =  " + id,
                (err, result) => err ? reject(err) :
                    result.content.length == 0 ?
                        reject({ message: { userMessage: "Objeto não encontrado" } })
                        : resolve(result.content[0]));
        });
    },
    getAll: () => {
        return new Promise((resolve, reject) => {
            mysql.executeString("MYSQL", "SELECT * FROM evento ",
                (err, result) => err ? reject(err) : resolve(result.content));
        });
    },
    insert: (body) => {
        return new Promise((resolve, reject) => {
            mysql.execute("MYSQL", "INSERT INTO evento SET ?", { NOME: body.NOME, DATA: body.DATA, DESCRICAO: body.DESCRICAO },
                (err, result) => err ? reject(err) : resolve(result));
        });
    },
    update: (body) => {
        return new Promise((resolve, reject) => {
            mysql.execute("MYSQL", "UPDATE evento SET ? WHERE IDEVENTO =" + body.IDEVENTO, { IDEVENTO: body.IDEVENTO, NOME: body.NOME, DATA: body.DATA, DESCRICAO: body.DESCRICAO },
                (err, result) => err ? reject(err) : resolve(result));
        });
    },
    delete: (id) => {
        return new Promise((resolve, reject) => {
            mysql.executeString("MYSQL", "DELETE FROM evento WHERE IDEVENTO =" + id,
                (err, result) => err ? reject(err) : resolve(result));
        });
    },
};
