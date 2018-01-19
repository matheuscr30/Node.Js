var mysql = require('mysql');

var connMysql = function () {
    return mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : 'matheusthais',
        database : 'noticiasDB'
    });
}

module.exports = function () {
    return connMysql;
}
