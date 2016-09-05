module.exports = function(sessionId) {
  const url = 'http://portal.shmtu.edu.cn/dcp/forward.action?path=/portal/portal&p=stuHomePage';
  return this.url(url)
            .setCookie({name: 'JSESSIONID', value: sessionId, domain: '.shmtu.edu.cn'})
            .url(url)
            .deleteCookie({name: 'JSESSIONID'})
            .setCookie({name: 'JSESSIONID', value: sessionId, domain: 'portal.shmtu.edu.cn'})
            .getTitle()
            .then(function(title) {
              return !/登录/i.test(title);
            });
};
