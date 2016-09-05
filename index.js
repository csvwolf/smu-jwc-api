const client = require('./core/client');

// client.login('username', 'password').then((val) => console.log(val)).end();
client.checkLogin('JSESSIONID').then((val) => console.log(val)).end();
