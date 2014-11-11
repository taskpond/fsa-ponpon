var Hapi = require('hapi');
var swig = require('swig');

// Create a server with a host and port
var server = new Hapi.createServer('localhost', 8000, { cors: true });

var Mongoose = require('mongoose');

Mongoose.connect('mongodb://localhost/fsaponpon');
 
var db = Mongoose.connection;
db.on('error', function() {
  return console.error.bind(console, 'connection error: ');
}); 

// Export the server to be required elsewhere.
module.exports = server;

// Template Ending
server.views({
	path: './app/views',
    engines: {
        html: require('swig')
    }
});

// Add the server routes
server.route(require('./config/routes'));

// Start the server
server.start(function () {
    console.log('Server running at:', server.info.uri);
});
