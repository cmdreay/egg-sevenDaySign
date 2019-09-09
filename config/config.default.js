'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1535424604763_7361';

  // add your config here
  config.middleware = ['errorHandler'];
  // db connet settting
  const dbname = 'Mector_test'
  const ip = '47.93.5.193'
  const port = '27017'
  const mongooseOptions = {
    user: 'mectoradmin',
    pass: '2019mectoradmin2019',
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
  config.jwt = {
    secret: 'mector-secret'
  };
  return config;
};
