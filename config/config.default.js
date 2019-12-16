'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1535424604763_7361';

  // add your config here
  config.middleware = ['errorHandler'];
  // db connet settting
  const dbname = 'newdatabase'
  const ip = '127.0.0.1'
  const port = '27017'
  const mongooseOptions = {
    user: '',
    pass: '',
    // useNewUrlParser:true
    // useMongoClient: true
  }
  config.mongoose = {
    client: {
      url: process.env.EGG_MONGODB_URL ||
        'mongodb://' + ip + ':' + port + '/' + dbname + '?authSource=admin',
      options: mongooseOptions,
    },
  };
  config.redis = {
    client: {
      port: 6379,          // Redis port
      host: '127.0.0.1',   // Redis host
      password: '',
      db: 0,
    },
  }
  config.security = {
    xframe: {
      enable: false,
    },
    csrf: false,
    domainWhiteList: ['http://localhost:8080']
  }
  config.jwt = {
    secret: 'app-secret'
  };
  return config;
};
