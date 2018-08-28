const Service = require('egg').Service;
class HomeService extends Service{
  async getHome(){
    let name = 'hello';
    let pwd = 'egg';
    const { Home } = this.ctx.model;
    let wel = await Home.create({ name, pwd })
    return wel
  }
}
module.exports = HomeService;