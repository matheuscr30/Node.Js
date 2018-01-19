module.exports.formulario_inclusao_noticia = function (application, req, res) {
    res.render("admin/form_add_noticia", {validacao: {}, noticia : {}});
}

module.exports.noticias_salvar = function (application, req, res) {
    var noticia = req.body;

    req.checkBody('titulo', 'Titulo é obrigatório').notEmpty();
    req.checkBody('resumo', 'Resumo é obrigatório').notEmpty();
    req.checkBody('resumo', 'Resumo deve conter entre 10 e 100 caracteres').len(10, 100);
    req.checkBody('autor', 'Autor é obrigatório').notEmpty();
    req.checkBody('data_noticia', 'Data é obrigatório').notEmpty();
    req.checkBody('descricao', 'Descricao é obrigatório').notEmpty();

    var erros = req.validationErrors();

    if(erros){
        res.render("admin/form_add_noticia", {validacao : erros, noticia : noticia});
        return;
    }

    var connection = application.config.dbConnection();
    var noticiasModel = new application.app.models.noticiasModel(connection);

    noticiasModel.salvarNoticia(noticia, function (err, result) {
        res.redirect('/noticias');
    });
}
