'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  // router.get('/', controller.home.index);
  // 登录
  router.post('/user/login', controller.user.login);
  // 注册
  router.post('/user/register', controller.user.register);
  // 签到
  router.post('/user/signin', app.jwt, controller.user.signIn);
  // 查看用户信息
  router.post('/user/getUserInfo', app.jwt, controller.user.getUserInfo);
};
