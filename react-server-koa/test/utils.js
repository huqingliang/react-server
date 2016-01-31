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

/**
 * Module dependencies.
 */

// const Stream = require('stream');
// const fs = require('fs');
// const path = require('path');
// const rimraf = require('rimraf');
const mm = require('@ali/mm');
// const fixtures = path.join(__dirname, 'fixtures');
// const griffinPath = path.join(__dirname, '..');
// const logDir = path.join(__dirname, '../logs');

// if (!fs.existsSync(logDir)) {
//   fs.mkdirSync(logDir);
// }

exports.createApp = function(name) {
  const app = require('../app.js');
  const options = app.config || {};
  // rimraf.sync(path.join(baseDir, 'logs'));
  console.log(mm.app(options, app));
  return app;
};

// const clusterApps = [];
// // ensure to close App process on test exit.
// process.on('exit', function() {
//   for (const app of clusterApps) {
//     app.stop();
//   }
// });

// /**
//  * 以 cluster 模式启动 app
//  *
//  * @param {String} name cluster name.
//  * @param {Object} options
//  *  - {String} [antxpath] - antx path
//  * @return {App} app Application object.
//  */
// exports.startCluster = exports.startMaster = function(name, options) {
//   options = options || {};
//   if (options.customEgg === undefined) {
//     options.customEgg = path.join(__dirname, '..');
//   }
//   if (options.dev === undefined) {
//     // 默认单进程模式
//     options.dev = true;
//   }
//   const app = mm.cluster(exports.getFilepath(name), options, griffinPath);
//   clusterApps.push(app);
//   return app;
// };

// exports.getFilepath = function(name) {
//   return path.join(fixtures, name);
// };

// exports.baseDir = exports.getFilepath;

// exports.getJSON = function(name) {
//   return JSON.parse(fs.readFileSync(exports.getFilepath(name)));
// };

// function logger() {
//   return {
//     debug: function() {},
//     info: function() {},
//     warn: function() {},
//     error: function() {},
//     write: function() {},
//   };
// }

// exports.emptyLogger = logger;

// exports.emptyLoggers = function() {
//   return {
//     logger: logger(),
//     commonLogger: logger(),
//     serviceLogger: logger(),
//     coreLogger: logger(),
//     error: logger().error,
//   };
// };

// // context helper, come from https://github.com/koajs/koa/blob/master/test/context.js
// exports.createContext = function(req, res) {
//   const app = exports.createApp('apps/rest');
//   const socket = new Stream.Duplex();
//   req = req || { headers: {}, socket: socket, __proto__: Stream.Readable.prototype };
//   res = res || { _headers: {}, socket: socket, __proto__: Stream.Writable.prototype };
//   res.getHeader = function(k) {
//     return res._headers[k.toLowerCase()];
//   };
//   res.setHeader = function(k, v) {
//     res._headers[k.toLowerCase()] = v;
//   };
//   res.removeHeader = function(k) {
//     delete res._headers[k.toLowerCase()];
//   };
//   return app.createContext(req, res);
// };

// exports.createRequest = function(req, res) {
//   return exports.createContext(req, res).request;
// };

// exports.createResponse = function(req, res) {
//   return exports.createContext(req, res).response;
// };
