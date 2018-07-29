module.exports.cadastro = function (application, req, res) {
    res.render('cadastro', {validacao : {}, dadosForm : {}});
}

module.exports.cadastrar = function (application, req, res) {

    var dadosForm = req.body;
    req.checkBody('nome', 'Nome nao pode ser vazio').notEmpty();
    req.checkBody('usuario', 'Usuario nao pode ser vazio').notEmpty();
    req.checkBody('senha', 'Senha nao pode ser vazia').notEmpty();
    req.checkBody('casa', 'Casa nao pode ser vazia').notEmpty();

    var erros = req.validationErrors();

    if(erros){
        res.render('cadastro', {validacao : erros, dadosForm : dadosForm})
        return;
    }

    var connection = application.config.dbConnection;
    var UsuariosDAO =  new application.app.models.UsuariosDAO(connection);
    var JogoDAO = new application.app.models.JogoDAO(connection);

    UsuariosDAO.inserirUsuario(dadosForm);
    JogoDAO.gerarParametros(dadosForm.usuario);

    //res.render('jogo', )
}
