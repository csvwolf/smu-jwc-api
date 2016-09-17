const webdriverio = require('webdriverio');
const login = require('../standard/login');
const checkLogin = require('../standard/check_login');
const getUserInfo = require('../standard/get_user_info');
const getScore = require('../standard/get_score');

const options = {
    desiredCapabilities: {
        browserName: 'chrome'
    }
};

const client = webdriverio.remote(options).init();

client.addCommand('login', function async(username, password) {
  return login.call(this, username, password);
});

client.addCommand('checkLogin', function async(sessionId) {
  return checkLogin.call(this, sessionId);
});

client.addCommand('getUserInfo', function async() {
  return getUserInfo.call(this);
});

client.addCommand('getScore', function async() {
  return getScore.call(this);
});

module.exports = client;
