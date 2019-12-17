'use strict';

const Controller = require('egg').Controller;
const moment = require('moment');
class UserController extends Controller {
    /**
     * @description 用户登录
     * @param username { string } - 用户名
     * @param password { string } - 密码
     */
    async login() {
        const { ctx, service, app } = this;
        const { username, password } = this.ctx.request.body;
        console.log(username);
        if (!username || !password) {
            ctx.body = {
                code: -1,
                msg: '缺少用户名或密码'
            }
            return;
        }
        let result = await service.user.findUser(username, '_id password');
        if (!result) {
            return ctx.body = {
                code: -2,
                msg: '用户不存在'
            };
        }
        if (result.password !== password) {
            return ctx.body = {
                code: 1,
                msg: '密码错误'
            };
        }
        const token = app.jwt.sign({ username }, app.config.jwt.secret);
        app.redis.del("token:" + username);
        // token 七天过期
        app.redis.set("token:" + username, token, "EX", 3600 * 24 * 7);
        ctx.body = { code: 0, data: token, msg: '登录成功' };
    }
    /**
     * @description 用户签到 - signIn
     * - 七天签到规则 5 10 15 20 25 30 35
     */
    async signIn() {
        const { ctx, app } = this;
        const { username } = ctx.state.user;
        let signinDay = await app.redis.get("signin:" + username) || '0';
        const expiredTime = await app.redis.ttl("signin:" + username) || 0;
        const now = moment();
        const endtime = moment().add(1, 'days').endOf('days');
        const diff = endtime.diff(now, 'seconds');
        if (expiredTime > 3600 * 24) { // 过期时间大于一天说明今天已经签到过了
            return ctx.body = { code: -1, msg: '今天已经签到过了' };
        }
        app.redis.set("signin:" + username, ++signinDay, 'EX', diff);
        // 新增积分
        await ctx.service.user.addScore(username, 5 * (signinDay % 8 +　1));
        ctx.body = { code: 0, msg: '签到成功' };
    }
    /**
     * @description - 获取用户基本信息
     */
    async getUserInfo() {
        const { ctx, app } = this;
        const { username } = ctx.state.user;
        let result = await ctx.service.user.findUser(username,'-_id username score createdDate');
        if (!result) {
            return ctx.body = {
                code: -2,
                msg: '用户不存在'
            };
        }
        const signinDay = await app.redis.get("signin:" + username) || '0';
        const signTime = await app.redis.ttl("signin:" + username) || 0;
        ctx.body = {
            code: 0,
            data: {signinDay,signTime,...result._doc}
        }
    }
    /**
     * 注册 - 测试
     */
    async register() {
        const { ctx } = this;
        const { username, password } = this.ctx.request.body;
        await new ctx.model.User({
            username: username,
            password: password,
            createdDate: new Date()
        }).save();
        ctx.body = { msg: '成功' };
    }
}

module.exports = UserController;
