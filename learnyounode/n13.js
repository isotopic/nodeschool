/*
API http que recebe um timestamp iso e imprime respostas em json
de acordo com o pathname e parametros get
*/

//Imports
var http = require('http');
var url = require('url');


//Params
var port = (process.argv[2] || 8080);




http.createServer(function(request, response) {


		var iso = "";
		var output = "";

		var gets = url.parse(request.url, true);

		if (gets.pathname == '/api/parsetime'){

			iso = gets.query.iso;
			date = new Date(iso);
			output = '{';
			output += '"hour":'+date.getHours();
			output += ',"minute":'+date.getMinutes();
			output += ',"second":'+date.getSeconds();
			output += '}';


		}else if(gets.pathname == '/api/unixtime'){

			iso = gets.query.iso;
			output = '{"unixtime":'+new Date(iso).getTime()+'}';

		}



		response.writeHead(200, { 'Content-Type': 'application/json' });
		response.end(output);



/*
		request.setEncoding('utf8');

	    request.on('data', function(data) {
	    	queryData += data;
	    });


	    request.on('end', function(data) {
	    	//console.log();
	    	response.end('');
	    });

*/

}).listen(port);







