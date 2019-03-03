'use strict';

const userRouter = require('./routers/user');
const messageRouter = require('./routers/message');
const searchRouter = require('./routers/search');
const homeRouter = require('./routers/home');

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const {
    router,
    controller
  } = app;
  router.get('/', controller.home.index);
  // user
  userRouter(app);
  // message
  messageRouter(app);
  // find
  searchRouter(app);
  // home
  homeRouter(app);
};