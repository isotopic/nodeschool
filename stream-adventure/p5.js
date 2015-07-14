


var through = require('through2');

var split = require('split');

var even = false;

var tr = through(function(buf, _, next){
	if(even){
		console.log(buf.toString().toUpperCase());
	}else{
		console.log(buf.toString().toLowerCase());
	}
	even = !even;
	next();
});

process.stdin.pipe(split()).pipe(tr).pipe(process.stdout);




