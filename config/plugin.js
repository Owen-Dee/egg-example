'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  pug: {
    enable: true,
    package: 'egg-view-pug'
  },
  sequelize: {
    enable: true,
    package: 'egg-sequelize'
  },
  cors: {
    enable: true,
    package: 'egg-cors',
  }
};
