/**!
 * project - filepath
 * description
 *
 * Copyright(c) Alibaba Group Holding Limited.
 *
 * Authors:
 *   谋士 <qingliang.hql@alibaba-inc.com>
 */
'use strict';
const debug = require('debug')('myapp:session');

module.exports = function(opts, app) {
  return function *(next){
    debug('running.....session', this.path);
    yield next;
  };
};
