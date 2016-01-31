## 基于KOA、react一步步的实现react-server-render web框架

### 一、运行步骤

- 1.1、环境准备：
```
node>=5.0.0
babel6
webpack
```
* 1.2、 目录：react-server-koa-simple/
 * 1.2.1、安装依赖包：npm install
 * 1.2.2、运行 node app

* 1.3、目录：react-server-koa-simple/app/assets/
 * 1.3.1、安装依赖包：npm install
 * 1.3.2、运行 npm run build

* 1.4 最后打开页面：
[http://localhost:3000/home?name=123](http://localhost:3000/home?name=123)

### 二、目录结构
```
.react-server-koa
├── package.json
├── app.js (难度+1)
├── appSimple.js (简单)
├── publish.js (前端发布脚本入口)
├── app
|   ├── router.js
│   ├── controller
│   │   └── home.js
|   ├── assets (静态资源目录，可选)
|   │   ├── src
|   │   │    ├── img
|   │   │    ├── js
|   │   │    └── css
|   |   └── watch
|   |   └── build
│   ├── middleware (你应用的中间件)
│   │   └── microdata.js（模板变量中间件）
│   │   └── notfound.js（404中间件）
│   │   └── session.js（会话中间件）
│   │   └── static.js（前端静态资源托管中间件）
│   ├── plugin (可选)
│   │   └── onerror（错误事件监听插件）
│   │   └── reactview（reactview插件）
│   └── views (可选，由 view 插件规范)
|       ├── layout
│       └── Home.js
├── lib
|   ├── core
│   │   └── loader
|   │   │    └── appWorkerLoader.
│   │   └── middleware（框架层核心中间件）
|   │   │    └── sitefile.js（站点icon）
│   │   └── app.js（对 koa application 的扩展）
│   │   └── router.js（对 koa router 的扩展）
│   └── index.js
└── test
    ├── middleware
    |   └── microdata.test.js
    └── controller
        └── home.test.js
```
