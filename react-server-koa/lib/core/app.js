/**!
 * 对 koa application 的所有扩展
 *
 * - koa application: https://github.com/koajs/koa/blob/master/lib/application.js
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

const fs = require('fs');
const path = require('path');
const assert = require('assert');
const KoaApplication = require('koa');
const log = require('debug')('framework:app');

// core
const AppWorkerLoader = require('./loader/appWorkerLoader.js');

/**
 * egg Application，对 koa application 进行了内部扩展
 * @class Application
 */
class WebApplication extends KoaApplication {

  /**
   * @constructor
   * @param {Object} options - 创建应用配置
   *  - {String} [baseDir] - app root dir, default is `process.cwd()`
   *  - {String} [antxpath] - app antx 配置路径, default is `$HOME/antx.properties`
   *  - {String} [customEgg] - 自定义 egg 插件集合层
   *  - {Object} [plugins] - 自定义插件配置，一般只用于单元测试
   */
  constructor(options) {
    options = options || {};
    options.baseDir = options.baseDir || process.cwd();

    // 确保 baseDir 存在，是字符串，并且所在目录存在
    assert(typeof options.baseDir === 'string', 'options.baseDir required, and must be a string');
    assert(fs.existsSync(options.baseDir), `Directory ${options.baseDir} not exists`);
    assert(fs.statSync(options.baseDir).isDirectory(), `Directory ${options.baseDir} is not a directory`);

    super();

    /**
     * 应用所在的代码根目录
     * @type {String}
     * @member App#baseDir
     */
    this.baseDir = options.baseDir;

    options.app = this;
    /**
     * 注册 ready 方法，当启动完成后触发此方法
     * @member {Object} App#ready
     * @since 1.0.0
     */

    /**
     * 异步启动接口，查看 https://github.com/koajs/koa-ready
     * 当所有注册的任务完成后才会触发 app.ready，启动才正式完成
     *
     * @member App#readyCallback
     * @since 1.0.0
     * @example
     * ```js
     * const done = app.readyCallback('configclient');
     * configclient.ready(done);
     * ```
     */
    // 默认 10s 没有 ready 就输出日志提示
    require('ready-callback')({
      timeout: 10000,
    }).mixin(this);

    this.on('ready_stat', data => {
      log('[appinit:ready_stat] end ready task %s, remain %j', data.id, data.remain);
    }).on('ready_timeout', id => {
      log('[appinit:ready_timeout] 10 seconds later %s was still unable to finish.', id);
    });

    /**
     * 加载 application.js
     * 必须前置，不然无法使用 app 的 API
     */
    const loader = new AppWorkerLoader(options);
    loader.load();
  }
}

module.exports = WebApplication;
