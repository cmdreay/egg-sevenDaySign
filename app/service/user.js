const Service = require('egg').Service;
class UserService extends Service {
  async userLogin(username, password) {
    const { User } = this.ctx.model;
    let user = await User.findOne({ username, password });
    return user
  }
  async findUser(username, showString) {
    const { User } = this.ctx.model;
    let user = await User.findOne({ username }, showString);
    return user
  }
  async addScore(username, score) {
    const { User } = this.ctx.model;
    let user = await User.findOneAndUpdate({ username }, { $inc: { score } }, { new: true });
    return user
  }
}
module.exports = UserService;