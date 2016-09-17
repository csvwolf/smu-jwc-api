# 上海海事大学教务处API

## 介绍

目前只使用Selenium，需要首先运行相关驱动（包括Selenium和PhantomJS，可以考虑自行集成），详情请见本项目Wiki

## 用途
可以用于开发各种平台客户端版本，建议获取后将一些不常更新的数据存储在数据库。

## Finished List
- [x] Login 根据用户名密码登录
- [x] CheckLogin 根据Cookie 检测是否登录（超时），如果未超时则可直接进行下一步操作。
- [x] GetUserInfo 获取用户信息

## TODO List
- [ ] 获取学期信息
- [ ] 课表获取
- [ ] 校园卡收支查询
- [ ] 成绩查询
- [ ] 成绩变更查询
- [ ] 新闻获取
- [ ] 新闻更新通知
- [ ] 更新指定新闻
