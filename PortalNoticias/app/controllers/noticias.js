module.exports.noticias = function (application, req, res) {
    var connection = application.config.dbConnection();
    var noticiasModel = new application.app.models.noticiasModel(connection);

    noticiasModel.getNoticias(function (err, result) {
        res.render("noticias/noticias", {noticias : result});
    });
}

module.exports.noticia = function (application, req, res) {
    var connection = application.config.dbConnection();
    var noticiasModel = new application.app.models.noticiasModel(connection);

    var id_noticia = req.query;

    noticiasModel.getNoticia(id_noticia, function (err, result) {
        res.render("noticias/noticia", {noticia : result});
    });
}
