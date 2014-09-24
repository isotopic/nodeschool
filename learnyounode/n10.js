/*
A cada requisição TCP, imprime data e horário com zero fill.
Obs. porta passada pelo primeiro parametro
*/
var net = require('net');
var date = new Date();

var port = (process.argv[2] || 8080);

var server = net.createServer(function (socket){
	var date_print = "";
	date_print += date.getFullYear();
	date_print += "-"+ (String(date.getMonth()+1) <10?"0"+String(date.getMonth()+1):String(date.getMonth()+1));
	date_print += "-"+ (String(date.getDate()) <10?"0"+String(date.getDate()):String(date.getDate()));

	date_print += " "+ (String(date.getHours()) <10?"0"+String(date.getHours()):String(date.getHours()));
	date_print += ":"+ (String(date.getMinutes()) <10?"0"+String(date.getMinutes()):String(date.getMinutes()));

	socket.write(date_print+"\n");
	socket.end();
});

server.listen(port);



