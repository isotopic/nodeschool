/*
Listagem de arquivos em um diretório e filtro por extensão fornecida
*/
var fs = require('fs');
var path = require('path');
var dir = process.argv[2];
var desired_ext = process.argv[3].split(".").join("");



fs.readdir(dir, function(err, data){

	if(err) return err;

	for(var a=0;a<data.length;a++){


		if(desired_ext==path.extname(data[a]).split('.').join('')){
			
			console.log(data[a]);

		}

	}


}); 