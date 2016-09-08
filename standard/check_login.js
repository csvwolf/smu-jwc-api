module.exports = function(sessionId) {
  const url = 'http://portal.shmtu.edu.cn/dcp/forward.action?path=/portal/portal&p=stuHomePage';
  if (sessionId)
    return this.url(url)
              .setCookie({name: 'JSESSIONID', value: sessionId, domain: '.shmtu.edu.cn'})
              .url(url)
              .getTitle()
              .then(function(title) {
                if (!/登录/i.test(title)) {
                  this.deleteCookie({name: 'JSESSIONID'})
                      .setCookie({name: 'JSESSIONID', value: sessionId, domain: 'portal.shmtu.edu.cn'});
                  return {login: true};
                }
                return {login: false};
              });
  else
    return this.url(url)
              .getTitle()
              .then((title) => {
                return {login: !/登录/i.test(title)};
              });

};
