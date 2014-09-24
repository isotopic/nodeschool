

var concat = require('concat-stream');



process.stdin.pipe(concat(function (body) {
    var obj = body.toString();
    console.log(obj.split('').reverse().join(''));
}));
