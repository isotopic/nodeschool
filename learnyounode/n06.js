/*
Listagem de arquivos em um diretório e exibição filtrada por extensão
(dessa vez externalizando a função de filtragem em um módulo - filter.js)
*/
var filter = require('filter'); //<-- busca arquivo no diretorio node_modules
//var filter = require('./filter'); //<-- busca arquivo no diretorio local

dirname = process.argv[2];
filt = process.argv[3];


filter(dirname, filt, function(err, data){

	for(var a=0; a < data.length; a++){
		console.log(data[a]);
	};

});

