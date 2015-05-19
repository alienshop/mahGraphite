// Nodejs Graphite Library
// The Simple mode uses port 2003 to send the metrics. You start the connection with
// startSimple(graphite_server, graphite_port, callbackFunction)
// 
// - Returns Callback(error, socket)
// 
// You can send metrics one at a time with:
//  sendSimple(String, socket);



var net = require('net');




exports.Socket = null;

exports.startSimple = function(graphiteServer, graphitePort, callback){
		socket = net.createConnection(graphitePort, graphiteServer);

		console.log("-> [ Graphite Connecting... ]");
		socket.on("connect", function(){
			console.log("-> [ Graphite Connection established ]");
			// exports.Socket = socket;
			callback(socket);
		});

		socket.on("error", function(error){
			console.log("<- [ Graphite Connection error:", error, " ]");
		});
	


}

exports.endSimple = function(socket){
	socket.end();
	console.log("-> [ Graphite Connection Ended ]");
}


exports.SendSimple = function(txtString, socket, callback){
	socket.write(txtString + "\n", function() {
		callback();
	});
}

