require('dotenv').config();

module.exports = {
    SERVERS: {
        DEV_SERVERAWS_TAU: process.env.DEVSERVER_TAU_AWS,
        DEV_SERVERLH_TAU: process.env.DEVSERVER_TAU_LOCAL,
    }
}