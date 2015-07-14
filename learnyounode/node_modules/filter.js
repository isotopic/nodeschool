module.exports = function(_dir, _ext, _callback) {


	_ext = _ext.split('.').join('');
		
	var fs = require('fs');
	var path = require('path');
	var list = new Array();

	fs.readdir(_dir, function(err, data){

		if(err) return _callback(err);

		for(var a=0;a<data.length;a++){

			if(path.extname(data[a])=="."+_ext){
				
				list.push(data[a]);

			}

		}

		return _callback(null, list);

	}); 

}
