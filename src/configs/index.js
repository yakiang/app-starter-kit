const devConfig = require('./development');
const prodConfig = require('./development');

const { ENV } = process.env;

module.exports =
  {
    development: devConfig,
    production: prodConfig,
  }[ENV] || devConfig;
