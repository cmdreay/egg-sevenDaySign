'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx, service } = this;
    ctx.body = 'hi, egg';
    let data = await ctx.service.home.getHome();
    ctx.body = { data };
  }
}

module.exports = HomeController;
