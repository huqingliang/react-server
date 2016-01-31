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
const debug = require('debug')('myapp:microdata');

module.exports = function(opts, app) {
  let options = opts.microdataOpts;

  return function *(next){
    debug('running.....microdata', this.path);
    this.state = {
      microdata: {
        domain: options.domain,
        userInfo: {
          userId: 111,
          userName: '谋士'
        }
      }
    };
    yield next;
  };
};
