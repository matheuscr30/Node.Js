function Noticias(connection){
    this._connection = connection;
}

Noticias.prototype.getNoticias = function(callback){
    this._connection.query('SELECT * FROM noticias ORDER BY data_noticia DESC', callback);
}

Noticias.prototype.getNoticia = function (id_noticia, callback) {
    this._connection.query('SELECT * FROM noticias WHERE id = ' + id_noticia.id_noticia, callback);
}

Noticias.prototype.salvarNoticia = function (noticia, callback) {
    this._connection.query("INSERT INTO noticias set ? ", noticia, callback);
}

Noticias.prototype.get5UltimasNoticias = function (callback) {
    this._connection.query("SELECT * FROM noticias ORDER BY data_noticia DESC LIMIT 5", callback);
}

module.exports = function () {
    return Noticias;
}
