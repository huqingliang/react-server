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
import AllView from '../assets/src/js/device/components/AllView.js';
import Default from './layout/Default';

class Device extends Component {

  static propTypes = {
    microdata: PropTypes.object,
    myData: PropTypes.object
  };

  render() {
    let { microdata, myData } = this.props;
    let deviceJs = `${microdata.domain}/build/${microdata.version}/js/device.js`;
    let scriptUrls = [deviceJs];
    return (
      <Default
        microdata={microdata}
        scriptUrls={scriptUrls}
        title={"demo"}>
        <div id="demoApp"
          data-microdata={JSON.stringify(microdata)}
          data-mydata={JSON.stringify(myData)}>
          <AllView microdata={microdata} myData={myData} />
        </div>
      </Default>
    );
  }
};

module.exports = Device;
