const Service = require('egg').Service;
class HomeService extends Service{
  async getHome(){
    const wel = 'hello egg'
    return wel
  }
}
module.exports = HomeService;