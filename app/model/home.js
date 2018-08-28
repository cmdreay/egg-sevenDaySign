'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const FollowSchema = new mongoose.Schema(
    {
      name: String, // 订单id
      pwd: String, // 方案id
    },
    { versionKey: false }
  );
  return mongoose.model('Home', FollowSchema);
};