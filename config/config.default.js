'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1535424604763_7361';

  // add your config here
  config.middleware = ['errorHandler'];
  // db connet settting
  const dbname = 'egg-test'
  const ip = '172.168.20.222'
  const port = '27016'
  const mongooseOptions = {
    user: 'root',
    pass: 'root',
    useNewUrlParser:true
    // useMongoClient: true
  }
  config.mongoose = {
    client: {
      url: process.env.EGG_MONGODB_URL ||
        'mongodb://' + ip + ':' + port + '/' + dbname + '?authSource=admin',
      options: mongooseOptions,
    },
  };
  return config;
};
