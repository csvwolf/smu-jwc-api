const webdriverio = require('webdriverio');
const login = require('../standard/login');
const checkLogin = require('../standard/check_login');

const options = {
    desiredCapabilities: {
        browserName: 'chrome'
    }
};

const client = webdriverio.remote(options).init();

client.addCommand('login', function async (username, password) {
  return login.call(this, username, password);
});

client.addCommand('checkLogin', function async(sessionId) {
  return checkLogin.call(this, sessionId);
});

module.exports = client;
