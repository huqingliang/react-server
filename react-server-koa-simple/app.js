/**!
 * react-server-koa-simple - app.js
 * application
 *
 * Copyright(c) Alibaba Group Holding Limited.
 *
 * Authors:
 *   谋士 <qingliang.hql@alibaba-inc.com>
 */
'use strict';

const koa = require('koa');
const koaRouter = require('koa-router');
const path = require('path');
const reactview = require('./app/plugin/reactview/app.js');
const Static = require('./app/middleware/static.js');
const VERSION = require('./app/assets/package.json').version;

const App = ()=> {
  let app = koa();
  let router = koaRouter();
  let microdata = {
    styleDomain: "//localhost:8080",
    styleVersion: VERSION
  };
  // 初始化/home路由dispatch的generator
  router.get(['/', '/home'], function*() {
    // 执行view插件
    this.body = this.render('Home', {
      microdata: microdata,
      mydata: {
        nick: 'server render body'
      }
    }, true);
  });

  router.get('/device/:deviceID', function*() {
    // 执行view插件
    let deviceID = this.params.deviceID;
    this.body = this.render('Device', {
      isServer: true,
      microdata: microdata,
      mydata: {
        path: this.path,
        deviceID: deviceID,
      }
    }, false);
  });
  app.use(router.routes()).use(router.allowedMethods());

  // 静态资源托管
  app.use(Static({
    staticOpts: {
      router: '/assets',               //路由映射
      dir: `${__dirname}/app/assets`,    // 托管的目录
      maxage: 1000 * 3600 * 24          //设置 maxage，默认缓存一天
    },
    app: app
  }));

  // 注入reactview
  const viewpath = path.join(__dirname, 'app/views');
  app.config = {
    reactview: {
      viewpath: viewpath,                 // the root directory of view files
      doctype: '<!DOCTYPE html>',
      extname: '.js',                     // view层直接渲染文件名后缀
      beautify: true,                     // 是否需要对dom结构进行格式化
      writeResp: false,                    // 是否需要在view层直接输出
    }
  }
  reactview(app);

  return app;
};

const createApp = ()=> {
  const app = App();

  // http服务端口监听
  app.listen(3000, ()=> {
    console.log('3000 is listening!');
  });

  return app;
};
createApp();
