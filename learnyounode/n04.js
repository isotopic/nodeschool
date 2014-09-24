/*
Leitura ASSÍNCRONA do arquivo e impressão do número de linhas após callback
*/
var fs = require('fs');
var filename = process.argv[2];

fs.readFile(filename, 'utf8', function(err, data){

if(!err){	
	console.log(data.split('\n').length - 1);
}else{
	console.log(err);
}

});


