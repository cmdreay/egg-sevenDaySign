'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const UserSchema = new mongoose.Schema(
    {
      username: String, // 用户名
      password: String, // 用户密码
      crewtedDate: Date, // 创建时间
      score: Number // 积分
    },
    { versionKey: false }
  );
  return mongoose.model('User', UserSchema);
};