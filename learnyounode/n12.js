/*
Servidor HTTP que pega todo conteúdo POST e imprime em uppercase
*/

//Imports
var http = require('http');


//Params
var port = (process.argv[2] || 8080);




http.createServer(function(request, response) {



	if(request.method == 'POST') {

		var queryData = "";

		request.setEncoding('utf8');
	    request.on('data', function(data) {
	    	queryData += data;
	    });

	    request.on('end', function(data) {
	    	//console.log();
	    	response.end(queryData.toUpperCase());
	    });

	}


}).listen(port);







