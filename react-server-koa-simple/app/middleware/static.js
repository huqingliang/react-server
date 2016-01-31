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

const mount = require('koa-mount');
const staticCache = require('koa-static-cache');

module.exports = function(opts, app) {
  let options = opts.staticOpts;

  return mount(options.router, staticCache(options.dir, {
    maxAge: options.maxage,
    buffer: true,
  }));
};
