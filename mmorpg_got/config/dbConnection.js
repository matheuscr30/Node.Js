var mongo = require('mongodb');

var connMongoDB = function () {
    var db = new mongo.Db(
        'got',             //Nome Banco
        new mongo.Server(
            'localhost',  //Endereço
            27017,        //Porta
            {}
        ),
        {}
    );

    return db;
}

module.exports = function () {
    return connMongoDB;
}
