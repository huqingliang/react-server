## 基于KOA、react一步步的实现koa-react-server-render

### 一、运行步骤

- 1.1、环境准备：
```
node>=5.0.0
```

* 1.2、 目录：react-server-koa-simple/
 * 1.2.1、安装依赖包：npm install
 * 1.2.2、运行 node app

* 1.3、目录：react-server-koa-simple/app/assets/
 * 1.3.1、安装依赖包：npm install
 * 1.3.2、运行 npm run build && npm run start


* 1.4 最后打开页面：
 - 普通文本同构：<http://localhost:3000/home>
 - 路由同构：<http://localhost:3000/device/all>

### 二、目录结构
```
.react-server-koa-simple
├── app
│   ├── assets (静态资源目录，可选)
│   │   ├── build
│   │   ├── src
│   │   │    ├── img
│   │   │    ├── js
│   │   │    └── css
│   │   ├── package.json（前端独有依赖）
│   │   └── webpack.config.js（不解释）
│   ├── middleware (你应用的中间件)
│   │   └── static.js（前端静态资源托管中间件）
│   ├── plugin (可选)
│   │   └── reactview（reactview插件）
│   └── views (可选，由 view 插件规范)
│       ├── layout
│       │    └── Default.js
│       ├── Device.js
│       └── Home.js
├── .babelrc
├── .gitgnore
├── app.js
├── package.json
└── README.md
```
