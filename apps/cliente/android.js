var http = require('http');

var opcoes = {
    hostname: 'localhost',
    port: 3000,
    path: '/teste',
    method: 'get',
    headers: {
        'Accept' : 'application/json',
        'Content-type' : 'application/json'
    }
}

/*
// Content-type
var html = 'nome=Jose'; //x-www-form-urlencoded
var json = {nome : 'Jose'};
var string_json = JSON.stringify(json);
*/

var buffer_corpo_response = [];

var req = http.request(opcoes, function (res) {

    res.on('data', function (pedaco) {
        buffer_corpo_response.push(pedaco);
    });

    res.on('end', function () {
        var corpo_responde = Buffer.concat(buffer_corpo_response).toString();
        console.log(corpo_responde);
        console.log(res.statusCode);
    });

    res.on('error', function () {

    });
});

//req.write(string_json);
req.end();

/*http.get(opcoes, function (res) {

    res.on('data', function (pedaco) {
        buffer_corpo_response.push(pedaco);
    });

    res.on('end', function () {
        var corpo_responde = Buffer.concat(buffer_corpo_response).toString();
        console.log(corpo_responde);
    });

    res.on('error', function () {

    });
});*/
