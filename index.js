const cloneDeep = require('lodash.clonedeep');

module.exports = function tailwindStarter() {
  return cloneDeep(require('./starterConfig.stub.js'));
}
