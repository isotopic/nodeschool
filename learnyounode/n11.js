/*
Servidor HTTP que entrega um arquivo de texto em cada requisição.
Obs. A porta e o arquivo vem dos parâmetros.
*/
//Imports
var http = require('http');
var fs = require('fs');

//Params
var port = (process.argv[2] || 8080);
var file = (process.argv[3] || '404.txt');



var server = http.createServer(function (req, res) {
    


	var readable = fs.createReadStream(file, {encoding: 'utf8'});

	readable.on('data', function(chunk) {
		res.writeHead(200, {'Content-Type': 'text/plain'});
	 	res.end(chunk);
	})


 	


 })


server.listen(port);



