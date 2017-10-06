const { socketIn, warn } = require('./../utility/logger');

module.exports = (sock, params) => {
  const socket = sock;
  const { eventName, data } = params;

  socketIn(`Received event ${eventName} from socket ${socket.id}`, data);

  switch (eventName) {
    default: { return warn(`Event ${eventName} received without a handler`); }
  }
};
