Nodejs Graphite Library
=======================

**Now with extra Pickles!**


Supports both string transmissions on port 2003 and pickles on port 2004. 

TODO
-----
- ~~Python Pickle Support~~
- Request List of Metrics
- Fetch JSON for Metrics
- Request support for Simple Authentication





```
connect(graphiteserver, graphiteport, callback)
````
connect to graphite server on the given port. Only supports TCP for now. Once the connection
has been established, the callback is executed with the socket. If there is an error, the connecitons
is killed.
