/**!
 * base - /app/controllers/home.js
 * 演示页controller层
 *
 * Copyright(c) Alibaba Group Holding Limited.
 *
 * Authors:
 *   谋士 <qingliang.hql@alibaba-inc.com>
 */
'use strict';
const util = require('util');
const debug = require('debug')('myapp:controller-home');

module.exports = function*() {
  // 执行view插件
  debug('aaaaaa........');
  this.render('Home', {
    myData: {
      nick: 'aaa'
    }
  });
};
