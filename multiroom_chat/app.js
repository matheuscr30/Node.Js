/* importar as configurações do servidor */
var app = require('./config/server');

/* parametrizar a porta de escuta */
var server = app.listen(3500, function(){
	console.log('Servidor online');
})

var io = require('socket.io').listen(server);

//Preflight Request
app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.setHeader("Access-Control-Allow-Credentials", true);
    next();
});

app.set('io', io);

/* criar a conexão por websocket */
io.on('connection', function(socket){
	console.log('Usuário conectou');

	socket.on('disconnect', function(){
		console.log('Usuário desconectou');
	});

	socket.on('msgParaServidor', function(data){

		/* dialogo */
		socket.emit(
			'msgParaCliente',
			{apelido: data.apelido, mensagem: data.mensagem}
		);

		socket.broadcast.emit(
			'msgParaCliente',
			{apelido: data.apelido, mensagem: data.mensagem}
		);

		/* participantes */
		if(parseInt(data.apelido_atualizado_nos_clientes) == 0){
			socket.emit(
				'participantesParaCliente',
				{apelido: data.apelido}
			);

			socket.broadcast.emit(
				'participantesParaCliente',
				{apelido: data.apelido}
			);
		}
	});

});
