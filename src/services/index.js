const swagger_ui = require('swagger-ui-express');
const { SWAGGER } = require('../model/constants');
const swaggers = require('../../documents');

module.exports = (app) => {
    app.use('/dev/devServerTAU', swagger_ui.serve, swagger_ui.setup(swaggers.devserver_TAU))
}