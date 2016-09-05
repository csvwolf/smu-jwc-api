module.exports = function(username, password) {
  const url = 'https://cas.shmtu.edu.cn/cas/login?service=http%3A%2F%2Fportal.shmtu.edu.cn%2Fdcp%2Findex.jsp';
  const info = {};
  return this.url(url)
            .setValue('#username', username)
            .setValue('#password', password)
            .click('.btn-submit')
            .getTitle()
            .then(function(title) {
              info.login = !/登录/i.test(title);
            })
            .getCookie()
            .then(session => (info.session = session.value) && info);
};
