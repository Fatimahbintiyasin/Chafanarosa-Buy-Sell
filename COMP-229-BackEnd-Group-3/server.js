/*
	Comp-229 Web Application Development Group 3
	Chafanarosa Buy and Sell Used Products
	This Website will enable users to post and view advertisements for used		
	products
	
	Developers
	Fatimah Binti Yasin – 301193282
	Nandagopan Dilip – 301166925
	Chantelle Lawson – 301216199
	Ronald Jr Ombao – 301213219
	Santiago Sanchez Calle – 300648373

	Copyright All Rights Reserved
*/


/**
 * Module dependencies.
 */

var dbConfig = require('./config/db');
var app = require('./config/app');
var debug = require('debug')('comp229.005.f2022:server');
var http = require('http');

/**
 * Get port from environment and store in Express.
 */

var db = dbConfig();
var port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

/**
 * Create HTTP server.
 */

var server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
  console.log(`App listening on  http://localhost:${port}`)
}
