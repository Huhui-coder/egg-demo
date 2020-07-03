'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/users', controller.user.getUserList);
  router.get('/login', controller.user.login);
  router.get('/register', controller.user.register);
};
