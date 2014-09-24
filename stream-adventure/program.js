

var fs = require('fs');

fs.unlink('filet.txt', function (err) {
  if (err) throw err;
  console.log('successfully deleted filet.txt');
});