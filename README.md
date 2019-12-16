# mector-pro

sample of mector project

## QuickStart

<!-- add docs here for user -->

see [egg docs][egg] for more detail.

### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

### Deploy

```bash
$ npm start
$ npm stop
```

### npm scripts

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.
- Use `npm run autod` to auto detect dependencies upgrade, see [autod](https://www.npmjs.com/package/autod) for more detail.


[egg]: https://eggjs.org


+  Controller 层主要对用户的请求参数进行处理（校验、转换），然后调用对应的 service 方法处理业务，得到业务结果后封装并返回：

+ 获取用户通过 HTTP 传递过来的请求参数。
+ 校验、组装参数。
+ 调用 Service 进行业务处理，必要时处理转换 Service 的返回结果，让它适应用户的需求。
+ 通过 HTTP 将结果响应给用户。
+ Service
+ 复杂数据的处理，比如要展现的信息需要从数据库获取，还要经过一定的规则计算，才能返回用户显示。或者计算完成后，更新到数据库。
+ 第三方服务的调用，比如 GitHub 信息获取等。





## 七天签到任务
+ 用户表
    + 用户名
    + 密码
    + 积分
    + 注册时间
+ 签到记录表
    + 签到时间
    + 用户id

## redis表
+ 用户token
+ 用户签到(过期时间为第二天的24：00)