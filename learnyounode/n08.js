/*
Agrupa todos os dados enviados em cada evento e só printa após o final.
*/
var http = require('http');

http.get(process.argv[2], function callback(response){


	var result = "";

	response.setEncoding('utf8');
	
	response.on("data", function(data){
		result+=data;
	});
	response.on("error", function(data){
		result+=data;
	});
	response.on("end", function(data){
		//result+=data;
		console.log(result.length);
		console.log(result);
	});


});



