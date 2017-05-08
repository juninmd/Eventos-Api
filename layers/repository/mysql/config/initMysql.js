var mysql = require('mysql');
var requestMessage = require("../../../../helpers/requestMessage.js");
var webconfig = require('../../../../webconfig.js');

module.exports = {
    executeString: function (databaseName, query, callback) {
        return executeString(databaseName, query, callback);
    },
    execute: function (databaseName, table, object, callback) {
        return execute(databaseName, table, object, callback);
    },
    executeProcedure: function (databaseName, procedure, array, callback) {
        return executeProcedure(databaseName, procedure, array, callback)
    },
    readProcedure: function (databaseName, procedure, array, callback) {
        return readProcedure(databaseName, procedure, array, callback)
    },
    iniciaTransaction: (databaseName) => {
        return iniciaTransaction(databaseName);
    },
    executeTransaction: (connection, table, object) => {
        return executeTransaction(connection, table, object)
    },
}

function execute(databaseName, table, object, callback) {
    var rm = requestMessage(200, '', '', '', table);
    MySqlInit(databaseName)
        .then(mysql => mysql.execute(rm, table, object, callback))
        .catch(err => callback(err, null));
}

function executeString(databaseName, query, callback) {
    var rm = requestMessage(200, '', '', '', query);
    MySqlInit(databaseName)
        .then(mysql => mysql.executeString(rm, query, callback))
        .catch(err => {
            return callback(err, null)
        });
}

function executeProcedure(databaseName, procedure, array, callback) {
    var rm = requestMessage(200, '', '', array.toString(), procedure);
    MySqlInit(databaseName)
        .then(mysql => mysql.executeProcedure(rm, array, callback))
        .catch(err => callback(err, null));
}

function readProcedure(databaseName, procedure, array, callback) {
    var rm = requestMessage(200, '', '', array.toString(), procedure);
    MySqlInit(databaseName)
        .then(mysql => mysql.readProcedure(rm, array, callback))
        .catch(err => callback(err, null));
}

function iniciaTransaction(databaseName) {
    return new Promise((resolve, reject) => {
        MySqlInit(databaseName)
            .then(connection => {
                connection.connection().beginTransaction((err) => {
                    return err ? reject(err) : resolve(connection.connection());
                });
            }).catch(q => {
                return reject(err);
            });
    });
}
function executeTransaction(connection, table, object) {
    return new Promise((resolve, reject) => {
        var rm = requestMessage(200, '', '', object, table);
        require("./coreMysql.js")(connection).executeTransaction(rm, table, object, (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
}



/** Funcionalidade:
 * Função private responsável pela conexão ao banco de dados
 * com ela fazemos a devida tratativa da conexão.
 * 
 * Paramêtros:
 * Nome do Database | Callback
 */
function MySqlInit(databaseName) {
    return new Promise((resolve, reject) => {
        try {
            var connection = mysql.createConnection(webconfig.dataConfig[databaseName]);
            connection.connect((err) => {
                if (err && err.code == "ECONNREFUSED") {
                    return reject({ message: { userMessage: "Não foi possível conectar ao banco de dados.", developerMessage: err.message } });
                }
                return resolve(require("./coreMysql.js")(connection));
            });
        } catch (err) {
            return reject({ message: { userMessage: "Não foi possível conectar ao banco de dados." } });
        }
    });
}