/**!
 * Copyright(c) Alibaba Group Holding Limited.
 *
 * Authors:
 *   苏千 <suqian.yf@alipay.com> (http://fengmk2.com)
 */

'use strict';

/**
 * Module dependencies.
 */

module.exports = function(opts) {
  let options = opts.notfoundOpts;

  return function* notfound(next) {
    yield next;

    if (this.status !== 404 || this.body) {
      return;
    }

    if (this.acceptJSON) {
      // set status first, make sure set body not set status
      this.status = 404;
      this.body = {
        message: 'Not Found',
      };
      return;
    }

    if (options.enableRedirect && options.pageUrl) {
      this.realStatus = 404;
      this.redirect(options.pageUrl);
    }
  };
};
