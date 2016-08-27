const webdriverio = require('webdriverio');
const login = require('../standard/login');

const options = {
    desiredCapabilities: {
        browserName: 'phantomjs'
    }
};

const client = webdriverio.remote(options).init();

client.addCommand('login', function async (username, password) {
  return login.call(this, username, password);
});

module.exports = client;
