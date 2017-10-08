const { log } = require('./../utility/logger');

module.exports = Object.freeze({
  initExpress: (app) => {
    // This is an endpoint just for testing that express is working
    app.get('/:variable', (req, res) => res.send(`<h1>${req.url}</h1>`));
    log('Test express using the endpoint "/:[variable]"');
  },
});
