/*
Recebe três urls de parâmetro e busca seus conteúdos.
- Salva em um array na ordem passada
- Busca uma a uma sempre esperando o 'end' para passar para a próxima
*/
var http = require('http');


//Armazena em array as urls
var urls = new Array();
for(var a=2; a<process.argv.length; a++){
	urls.push(process.argv[a]);
}

//Array onde serão armazenados os conteúdos das urls
var results = new Array();




function curlUrl(_url){

	http.get(_url, function callback(response){

		var result = "";
		response.setEncoding('utf8');
	
		response.on("data", function(data){
			result+=data;
		});
		response.on("error", function(data){
			result+=data;
		});
		response.on("end", function(data){
			results.push(result);

			var next_index = results.length;

			if(next_index==urls.length){
				printAll();
			}else{
				curlUrl(urls[next_index]);
			}
			
		});

	})

}



function printAll(){
	for(var a=0; a<results.length; a++){
		console.log(results[a]);
	}
}



//Chama o curl pela primeira vez
curlUrl(urls[0]);
