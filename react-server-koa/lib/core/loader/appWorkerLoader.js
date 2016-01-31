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
const loading = require('loading');
const fs = require('fs');
const path = require('path');
const is = require('is');
const Router = require('koa-router');//require('../router');
const log = require('debug')('framework:app-worker-loader');
const inspect = require('util').inspect;

/**
 * app worker 进程的 Loader
 * @class AppWorkerLoader
 * @extends BaseLoader
 */
class AppWorkerLoader {
  constructor(options) {
    this.app = options.app || {};
    this.app.config = options;
    this.options = options;
    log('[options:--------------]', options);
  }

  loadMiddleware(opt) {

    let app = this.app;
    opt = Object.assign({
      // 加载中间件，但是不调用它
      call: false,
      override: true,
      lowercaseFirst: true,
    }, opt);

    const middlewarePaths = path.join(this.options.baseDir, 'app/middleware');
    loading(middlewarePaths, opt).into(app, 'middlewares');

    // 将中间件加载到 koa 中
    const middlewareNames = this.options.middlewares;

    this.loadMiddlewaresIntoApp(middlewareNames, app.middlewares);
  }

  loadCoreMiddleware(opt) {

    let app = this.app;
    opt = Object.assign({
      // 加载中间件，但是不调用它
      call: false,
      override: true,
      lowercaseFirst: true,
    }, opt);

    const middlewarePaths = path.join(this.options.baseDir, 'lib/core/middleware');
    loading(middlewarePaths, opt).into(app, 'coreMiddlewares');

    // 将中间件加载到 koa 中
    const coreMiddlewareNames = this.options.coreMiddlewares;

    this.loadMiddlewaresIntoApp(coreMiddlewareNames, app.coreMiddlewares);
  }

  loadMiddlewaresIntoApp(names, middlewares) {
    let app = this.app;
    // assert(util.isArray(names), `middlewareNames ${names} must be array!`);
    for (let name of names) {
      if (!middlewares[name]) {
        throw new TypeError(`Middleware ${name} not found`);
      }

      let mw = middlewares[name];
      let mid = mw(this.options, app);

      log('[loadMiddleware into app:]', name);
      if (!this.isGenerator(mid)) {
        throw new TypeError(`Middleware ${name} must be a generator function, but actual is ${inspect(mid)}`);
      }
      mid._name = name;
      app.use(mid);
    }
  }

  isGenerator(fn) {
    return 'function' === typeof fn && fn.constructor.name === 'GeneratorFunction';;
  }

  /**
   * 加载 app/controller 目录下的文件
   *
   * @member loadController
   * @param {Object} opt - loading 参数
   * @return {undefined}
   * @since 1.0.0
   */
  loadController(opt) {
    const app = this.app;
    opt = Object.assign({ lowercaseFirst: true }, opt);
    let controllerBase = path.join(this.options.baseDir, 'app/controller');

    delete app.controller;
    app.controller = {};
    loading(controllerBase, opt).into(app, 'controller');
  }

  /**
   * require 文件，如果是一个函数则直接调用，会传入 app
   *
   * 比如加载 router.js
   *
   * ```js
   * app.loader.loadFile(path.join(app.options.baseDir, 'config/router.js'));
   * ```
   *
   * @member loadFile
   * @param {String} filepath - 加载的文件路径
   * @param {Object} inject - 如果是函数的话，指定注入的对象，默认为 app
   * @return {Object} - 返回文件的 module.exports，如果是函数则获取函数返回值。
   * @since 1.0.0
   */
  loadFile(filepath, inject) {
    if (!fs.existsSync(filepath)) {
      return null;
    }

    let ret;
    try {
      ret = require(filepath);
    } catch (err) {
      err.message = `[egg-loader] load file ${filepath} error: ${err.message}`;
      throw err;
    }
    return is.function(ret) ? ret(inject || this.app) : ret;
  }

  initRouter() {
    let app = this.app;
    const router = new Router();
    app.router = router;
    // 注册 Router 的 Middleware
    app
    .use(router.routes())
    .use(router.allowedMethods());
  }

  /**
   * 加载 app/router.js
   *
   * @member loadRouter
   * @return {undefined}
   * @since 1.0.0
   */
   loadRouter() {
    // 加载 router.js
    this.loadFile(path.join(this.app.config.baseDir, 'app/router.js'));
  }

  loadPlugin(opt) {
    const app = this.app;
    opt = Object.assign({
      lowercaseFirst: true,
      call: true
    }, opt);
    let pluginBase = path.join(this.options.baseDir, 'app/plugin');

    delete app.plugin;
    app.plugin = {};
    loading(pluginBase, opt).into(app, 'plugin');
    log('[plugin]', app.plugin);
  }


  /**
   * 开始加载所有约定目录
   * @member load
   * @return {undefined}
   */
  load() {
    this.loadCoreMiddleware();

    this.loadMiddleware();

    this.initRouter();

    this.loadController();

    this.loadRouter(); // 依赖 controller

    this.loadPlugin();
  }

}

module.exports = AppWorkerLoader;
