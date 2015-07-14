/*
Imprime a soma de todos os argumentos passados pelo terminal
*/
var sum = 0;
for(var a=2;a<process.argv.length;a++){
	sum += (Number(process.argv[a]) || 0);
}
console.log(sum);
