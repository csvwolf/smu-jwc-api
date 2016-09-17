module.exports = function(year, term) {
  const url = 'http://jwxt.shmtu.edu.cn/shmtu/teach/grade/course/person.action';
  const paramsLength = arguments.length;
  return this.checkLogin()
          .then(function(result) {
            if (result.login) {
              return this.url(url)
                        .then(function() {
                          if (paramsLength === 0) {
                            return this.click('.toolbar-item[title="所有学期成绩"]');
                          } else {
                            // TODO: 未完成
                            return this.click('.calendar-text[title="学年学期"]');
                          }
                        })
                        .waitForText('.gridtable tbody', 4000)
                        .getText('.gridtable')
                        .then(text => {
                          result.text = text[1].split('\n').map(value => value.split(' '));
                          return result;
                        });

            } else {
              return result;
            }
          });
}
