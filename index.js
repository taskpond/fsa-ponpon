var Hapi = require('hapi');
var swig = require('swig');

// Create a server with a host and port
var server = new Hapi.createServer('localhost', 8000, { cors: true });

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
