Nodejs Graphite Library
=======================

**Now with extra Pickles!**


Supports both string transmissions on port 2003 and pickles on port 2004.

TODO
-----
- ~~Python Pickle Support~~
- Test cases
- Documentation
- Request List of Metrics
- Fetch JSON for Metrics
- Request support for Simple Authentication




####Connect####
```
var graphite = require('mahGraphite');
graphite.connect(graphiteserver, graphiteport, function(socket){
	....
});
```
connect to graphite server on the given port. Only supports TCP for now. Once the connection
has been established, the callback is executed with the socket. If there is an error, the connecitons
is killed.


####Close####

Close the Graphite Connection

```
var graphite = require('mahGraphite');
graphite.connect(graphiteserver, graphiteport, function(socket){
	....
	graphite.close(socket);
});



####SendSimple####

SendSimple expects two or three variables:
  1. socket: this is the net socket used to talk to graphite. Create the socket using
    mahGraphite.connect(pocklePort, graphiteServer, callback)
  2. txtString: this is a string in the following format: "$path $metric $timestamp"
  3. callback: The callback is optional. If we give a callback, we wait for the
	server to confirm the sent data. This takes a bit more, but is safer as
	we confirm the send. If we do not give a callback, there is no wait for
	confirmation. So for example if you only open the graphite connection
	when sending, you might end up killing the socket before all metrics get
	sent

```
var graphite = require('mahGraphite');
var timestamp = Math.floor(Date.now() / 1000);

var string = "this.is.the.path 88.44 " + timestamp;

graphite.connect(graphiteserver, graphiteport, function(socket){
	graphite.sendSimple(socket, string, function(){
		graphite.close(socket);
	});

});

```
