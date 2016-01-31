/**!
 * base - test/controllers/home.test.js
 * 首页单元测试示范
 *
 * Copyright(c) Alibaba Group Holding Limited.
 *
 * Authors:
 *   谋士 <qingliang.hql@alibaba-inc.com>
 */
'use strict';


const should = require('should');
const request = require('supertest');
const mm = require('@ali/mm');
const utils = require('../utils');


describe('home.test.js', ()=> {
  let app;
  // let ctx;

  before(()=> {
    app = utils.createApp();
    // ctx = app.mockContext();
  });

  // 确保每个测试用例运行完之后自动还原到 mock 之前的状态
  afterEach(mm.restore);

  beforeEach(() => {
  });

  it('should GET /area 200', (done)=> {
    request(app.listen())
    .get('/home')
    .set({Cookie: 'cookie2=0;_nk_=foo'})
    .end((err, res)=> {
      console.log('hello world!');
      console.log(res.text);
      done();
    });
  });

});
