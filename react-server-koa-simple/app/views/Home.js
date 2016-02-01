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

import path from 'path';
import React, { Component, PropTypes } from 'react';
import Content from '../assets/src/js/home/components/Content.js';
import Default from './layout/Default';

class Home extends Component {

  static propTypes = {
    microdata: PropTypes.object,
    myData: PropTypes.object
  };

  render() {
    let { microdata, myData } = this.props;
    let homeJs = `${microdata.domain}/build/${microdata.version}/js/home.js`;
    let scriptUrls = [homeJs];
    return (
      <Default
        microdata={microdata}
        scriptUrls={scriptUrls}
        title={"demo"}>
        <div id="demoApp"
          data-microdata={JSON.stringify(microdata)}
          data-mydata={JSON.stringify(myData)}>
          <Content myData={myData} microdata={microdata} />
        </div>
      </Default>
    );
  }
};

module.exports = Home;
