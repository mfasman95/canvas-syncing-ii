const { log } = require('./utility/logger');
const { DEFAULT_PORT } = require('./utility/constants');
const { initHandlers } = require('./socketio/socketInit');
const express = require('express');

const PORT = process.env.PORT || process.env.NODE_PORT || DEFAULT_PORT;
const serverCallback = () => log(`Server is listening at localhost:${PORT}`);

const app = express();
const expressHandler = require('./express/expressHandler');
const server = require('http').Server(app);
const io = require('socket.io')(server);

expressHandler.initExpress(app);
io.on('connection', socket => initHandlers(socket));
server.listen(PORT, serverCallback);

module.exports = Object.freeze({ server, io, app, PORT });

// *** DUMB FIX FOR WINDOWS GIT BASH BUG *** //
const readline = require('readline');

if (process.platform === 'win32' || process.platform === 'win64') {
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  rl.question('(WINDOWS) Press enter to kill this process...\n', () => process.emit('SIGINT'));
  process.on('SIGINT', process.exit);
}
