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

import React, { Component, PropTypes } from 'react';
import path from 'path';
const Default = require('./layout/Default');
import Header from './layout/Header.js';

class ErrorPage extends Component {

  static propTypes = {
    microdata: PropTypes.object,
  };

  renderContent() {
    return (
      <div className='message'>
        <p>访客太多，接待不过来了哦！</p>
        <p>请先喝杯茶听听音乐，稍后再试吧！</p>
      </div>
    );
  }

  render() {
    let {microdata} = this.props;
    let commonCss = path.join('/assets', '/watch/css/common/app.css');
    return (
      <Default
        microdata={microdata}
        title={'系统异常'}>
        <link rel='stylesheet' href={`${microdata.domain}${commonCss}`} />
        <div id="demoApp">
          <Header microdata={microdata} />
          {this.renderContent()}
        </div>
      </Default>
    );
  }
};

module.exports = ErrorPage;
