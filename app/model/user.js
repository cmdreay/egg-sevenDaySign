'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const UserSchema = new mongoose.Schema(
    {
      username: String, // 用户名
      password: String, // 用户密码
      createdDate: Date, // 创建时间
      score: { type:Number , default:0 } // 积分
    },
    { versionKey: false }
  );
  return mongoose.model('User', UserSchema);
};