const { socketOut } = require('./../utility/logger');
const { EMIT_KEYS } = require('./../utility/constants');
const { io } = require('./../server');

module.exports = Object.freeze({
  emitter: (emitObj, socket) => {
    socket.emit(EMIT_KEYS.server, emitObj);
    socketOut(`Event ${emitObj.eventName} sent to ${socket.id}`);
  },
  emitToAll: (emitObj) => {
    io.sockets.emit(EMIT_KEYS.server, emitObj);
    socketOut(`Event ${emitObj.eventName} sent to all sockets`);
  },
  emitToRoom: (emitObj, room) => {
    io.to(room).emit(EMIT_KEYS.server, emitObj);
    socketOut(`Event ${emitObj.eventName} sent to ${room}`);
  },
  broadcastToRoom: (emitObj, room) => {
    io.to(room).broadcast(EMIT_KEYS.server, emitObj);
    socketOut(`Event ${emitObj.eventName} sent to ${room}`);
  },
  makeEmitObj: eventName => data => Object.assign({}, { eventName, data: data || 'No Data Provided' }),
});
