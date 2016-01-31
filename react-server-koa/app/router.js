/**!
 * base - /app/router.js
 * 路由集合
 *
 * Copyright(c) Alibaba Group Holding Limited.
 *
 * Authors:
 *   谋士 <qingliang.hql@alibaba-inc.com>
 */
'use strict';

module.exports = function(app) {
  app.router.get('/home', app.controller.home);
  app.router.get('/404', app.controller.pageNotFound);
  app.router.get('/500', app.controller.errorPage);
};
