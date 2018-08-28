'use strict';
module.exports = {
  choices({ code = 0, data }) {
    if (code === 0) {
      this.success(data);
    } else if (code === -1) {
      this.paramError(data);
    } else if (code === 1) {
      this.noContent(data);
    } else if (code === 2) {
      this.pwdError(data);
    }
  },
  // 处理成功响应
  success(data = null, msg = '请求成功') {
    this.body = {
      code: 0,
      data,
      msg,
    };
    this.status = 200;
  },
  paramError(data = null, msg = '参数错误') {
    this.body = {
      code: -1,
      data,
      msg,
    };
    this.status = 200;
  },
  noContent(data = null, msg = '没有内容') {
    this.body = {
      code: 1,
      data,
      msg,
    };
    this.status = 200;
  },
  pwdError(data = null, msg = '密码错误') {
    this.body = {
      code: 2,
      data,
      msg,
    };
    this.status = 200;
  },
  overBalance(data = null, msg = '余额不足') {
    this.body = {
      code: 100,
      data,
      msg,
    };
    this.status = 200;
  }
}