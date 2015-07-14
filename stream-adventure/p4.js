


/* USANDO THROUGH2 */

var through = require('through2');
var tr = through(function(buf, _, next){
	this.push(buf.toString().toUpperCase());
	next();
});
process.stdin.pipe(tr).pipe(process.stdout);









/* USANDO EVENTO PADRÃO DO STDIN */

/*
process.stdin.setEncoding('utf8');
process.stdin.on('readable', function() {
  var chunk = process.stdin.read();
  if (chunk !== null) {
    process.stdout.write(chunk.toString().toUpperCase());
  }
});
process.stdin.on('end', function() {});
*/




