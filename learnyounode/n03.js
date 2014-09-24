/*
Leitura síncrona de arquivo e output do número de linhas
*/
var fs = require('fs');
var param = process.argv[2];
var array_of_lines = fs.readFileSync(param).toString().split('\n');
console.log(array_of_lines.length - 1);
