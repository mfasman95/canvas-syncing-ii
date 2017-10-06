const { socketIn } = require('./../utility/logger');
const { EMIT_KEYS } = require('./../utility/constants');
const { eventHandler } = require('./socketHandler');

const handleEvent = socket => data => eventHandler(socket, data);

const handleConnect = (sock) => {
  const socket = sock;

  socketIn(`Socket ${socket.id} has connected to the server...`);
};

const handleDisconnect = (sock) => {
  const socket = sock;

  socketIn(`Socket ${socket.id} has disconnected from the server`);
};

module.exports = Object.freeze({
  initHandlers: (socket) => {
    handleConnect(socket);
    socket.on(EMIT_KEYS.client, handleEvent);
    socket.on('disconnect', () => handleDisconnect(socket));
  },
});
