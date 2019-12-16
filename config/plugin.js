'use strict';

// had enabled by egg
// exports.static = true;
exports.mongoose = {
  enable: true,
  package: 'egg-mongoose',
};
exports.jwt = {
  enable: true,
  package: "egg-jwt"
};
exports.redis = {
  enable: true,
  package: 'egg-redis',
};
exports.cors = {
  enable: true,
  package: 'egg-cors',
};