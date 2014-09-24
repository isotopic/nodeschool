

var through = require('through');
var split = require('split');

var even = false;

process.stdin
    .pipe(split('\n'))
    .pipe(through(function (line) {

    	if(even){
    		console.log(line.toString().toUpperCase());
    	}else{
    		console.log(line.toString().toLowerCase());
    	}
    	even = !even;
        

    }))
;
