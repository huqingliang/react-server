/**!
 * react-server-koa - app.js
 * application
 *
 * Copyright(c) Alibaba Group Holding Limited.
 *
 * Authors:
 *   谋士 <qingliang.hql@alibaba-inc.com>
 */
'use strict';

const path = require('path');

const debug = require('debug');
debug.enable('framework:*');
debug.enable('myapp:*');
debug.enable('koa-router');
debug.enable('ready-callback');

const baseDir = __dirname;
const viewpath = path.join(baseDir, 'app/views');
const assetspath = path.join(baseDir, 'app/assets/src/js');

exports.app = require('./lib/index.js').createApp({
  baseDir: baseDir,
  microdataOpts: {
    domain: "//localhost:3000"
  },
  staticOpts: {
    router: '/assets',                      //路由映射
    dir: path.join(baseDir, 'app/assets'),  // 托管的静态资源目录
    maxage: 1000 * 3600 * 24                //设置 maxage，默认缓存一天
  },
  reactview: {
    viewpath: viewpath,                 // the root directory of view files
    doctype: '<!DOCTYPE html>',
    extname: '.js',                     // view层直接渲染文件名后缀
    beautify: true,                     // 是否需要对dom结构进行格式化
    writeResp: true,                    // 是否需要在view层直接输出
  },
  notfoundOpts: {
    enableRedirect: true,
    pageUrl: '/404',
  },
  errorPageUrl: '/500',
  siteFileOpts: {
    '/favicon.ico': 'https://www.alibaba.com/favicon.ico',
  },
  coreMiddlewares: ['sitefile'],
  middlewares: ['static', 'notfound', 'session', 'microdata'],
});
