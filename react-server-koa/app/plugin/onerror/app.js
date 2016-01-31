/**!
 * chair - lib/plugins/onerror/app.js
 *
 * 全局错误处理，调用 koa-onerror 模块实现
 *
 * Copyright(c) Alibaba Group Holding Limited.
 *
 * Authors:
 *   苏千 <suqian.yf@alipay.com> (http://fengmk2.com)
 *   邈汉 <shuren.miao@alibaba-inc.com>
 */

'use strict';

/**
 * Module dependencies.
 */

const http = require('http');
const util = require('util');
const onerror = require('koa-onerror');

module.exports = function(app) {
  // 记录错误日志
  const callback = app.config.callback || 'callback';

  app.on('error', function(err, ctx) {
    const status = detectStatus(err);
    // 5xx
    if (status >= 500) {
      console.error(err);
      return;
    }

    // 4xx 客户端错误，不记录日志
  });

  onerror(app, {
    accepts: function() {
      if (this.acceptJSON) {
        if (this.query[callback]) {
          return 'js';
        }
        return 'json';
      }

      return 'html';
    },

    html: function(err) {
      const status = detectStatus(err);
      const code = err.code || err.type;
      let message = detectErrorMessage(this, err);
      // 保留真实状态码
      this.realStatus = status;

      if (code) {
        message += ' (code: ' + code + ')';
      }

      if (process.env.NODE_ENV === 'production') {
        if (status >= 500) {
          this.redirect(this.app.config.errorPageUrl);
        } else {
          // TODO: output better error page for production env.
          this.body = '<h2>' + message + '</h2>';
        }
      } else {
        let locals = {
          inspect: util.inspect,
          title: err.name,
          message: message,
          err: err,
          ctx: this,
        };
        this.body = JSON.stringify(locals);// this.app.view.render('error.html', locals);
      }
    },

    json: function(err) {
      this.body = processAjaxRequest.bind(this)(err);
    },

    js: function(err) {
      this.jsonp = processAjaxRequest.bind(this)(err);
    },

  });
};

function processAjaxRequest(err) {
  const status = detectStatus(err);
  const code = err.code || err.type || 100;
  const message = detectErrorMessage(this, err);
  // 不合理的异常,均当200返回，输出到response
  this.status = 200;
  let outputData;
  outputData = {
    hasError: true,
    content: {
      code: code,
      data: this.body,
    },
    message: message,
  };

  // 5xx 服务端错误
  // if (status >= 500) {
  if (process.env.NODE_ENV === 'production') {
    // 生产环境, 不能暴露具体的错误信息
    if (this.app.config.env !== 'pre') {
      outputData.httpStatusCode = http.STATUS_CODES[status];
    }

  } else {
    // 非生产环境, 输出详细的错误信息
    outputData.error = {
      stack: err.stack,
      message: err.message,
      status: status,
    };
  }

  return outputData;
}

function detectErrorMessage(ctx, err) {
  // 判断是否 json body parse 出错
  if (err.status === 400 && err.name === 'SyntaxError' &&
    ctx.request.is('application/json', 'application/vnd.api+json', 'application/csp-report')) {
    return 'Problems parsing JSON';
  }
  return err.i18nMessage;
}

function detectStatus(err) {
  let status = err.status || 500;
  if (status < 200) {
    // 不在合理范围的 status，都当做 500 异常，如 -1
    // http://gitlab.alipay-inc.com/chair/chair/issues/757
    status = 500;
  }
  return status;
}
