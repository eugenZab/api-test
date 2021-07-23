const environment = process.env.ENVIRONMENT || 'qa';
const config = require( `./config/${environment}/config` );


module.exports = {
    config,
    environment
};
