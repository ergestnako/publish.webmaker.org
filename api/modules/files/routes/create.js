var controller = require('../controller');

module.exports = [{
  method: 'POST',
  path: '/files',
  config: {
    handler: controller.createFile
  }
}];
