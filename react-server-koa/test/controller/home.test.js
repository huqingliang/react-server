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
const utils = require('../utils');


describe('home.test.js', ()=> {
  let app;

  before(()=> {
    app = utils.createApp();
  });

  // 确保每个测试用例运行完之后自动还原到 mock 之前的状态
  // afterEach(mm.restore);

  beforeEach(() => {
  });

  it('should GET /home 200', function(done){
    request(app.listen())
    .get('/home')
    .set({Cookie: 'cookie2=0;_nk_=foo'})
    .expect(200, function(err, res){
      console.log('hello world!');
      // console.log(res.text);
      done();
    });
  });

});
