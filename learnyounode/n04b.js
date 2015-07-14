/*
Leitura ASSÍNCRONA do arquivo e parse no conteúdo json
*/
var fs = require('fs');
var filename = process.argv[2];
var data_json;

fs.readFile(filename, 'utf8', function(err, data){

	if(!err){	
		data_json = JSON.parse(data);
		console.log(data_json.name);
	}else{
		console.log(err);
	}

});


