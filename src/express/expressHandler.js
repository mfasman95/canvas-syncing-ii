const { log } = require('./../utility/logger');
const express = require('express');
const path = require('path');

module.exports = Object.freeze({
  initExpress: (app) => {
    app.use('/', express.static(path.join(__dirname, './../../canvas-app/build')));
  },
});
