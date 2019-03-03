/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1551601148525_6018';

  // add your middleware config here
  config.middleware = [];

  // mongo db
  // config.cluster = {
  //   listen: {
  //     path: '',
  //     port: 7001,
  //     hostname: '',
  //   }
  // };

  // config.mongoose = {
  //   client: {
  //     url: 'mongodb://127.0.0.1:27017/egg-example',
  //     options: {}
  //   }
  // };

  // mysql
  config.sequelize = {
    dialect: 'mysql',
    host: 'localhost',
    port: 3306,
    database: 'egg',
    username: 'root',
    password: 'shanke123'
  };
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};