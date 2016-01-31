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

class PageNotFound extends Component {

  static propTypes = {
    microdata: PropTypes.object,
  };

  renderContent() {
    return (
      <div className="message">
        <p>404</p>
        <p>亲，您的页面灰到火星上去了</p>
      </div>
    );
  }

  render() {
    let {microdata} = this.props;
    let commonCss = path.join('/assets', '/watch/css/common/app.css');

    return (
      <Default
        microdata={microdata}
        title={"页面没找到"}>
        <link rel='stylesheet' href={`${microdata.domain}${commonCss}`} />
        <div id="demoApp">
          <Header microdata={microdata} />
          {this.renderContent()}
        </div>
      </Default>
    );
  }
};

module.exports = PageNotFound;
