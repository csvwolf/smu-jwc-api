module.exports = function() {
  const url = 'http://portal.shmtu.edu.cn/dcp/forward.action?path=/portal/portal&p=stuHomePage';
  return this.checkLogin()
            .then(function({login}) {
              let result = {login};

              if (login) {
                return this.getText('.user_name a')
                          .then((name) => result.name = name)
                          .getText('.user_rank_title')
                          .then((rank) => result.rank = rank)
                          .getText('.book_noback_num')
                          .then((bookNoBackNumber) => result.bookNoBackNumber = bookNoBackNumber[0])
                          .getText('.book_noback_num.font_size_14')
                          .then((bookBackTime) => result.bookBackTime = bookBackTime)
                          .waitForText('.meeting_notice_content .number_blue', 6000)
                          .getText('.meeting_notice_content .number_blue')
                          .then((ecardMoney) => result.ecardMoney = ecardMoney)
                          .then(() => result);
              } else {
                return result;
              }
            })
}
