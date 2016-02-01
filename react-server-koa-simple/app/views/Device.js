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
import Iso from '../assets/src/js/device/Iso.js';
import Default from './layout/Default';

class Device extends Component {

  static propTypes = {
    microdata: PropTypes.object,
    myData: PropTypes.object,
    isServer: PropTypes.bool
  };

  render() {
    let { microdata, myData, isServer } = this.props;
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
          <Iso
            microdata={microdata}
            myData={myData}
            isServer={isServer} />
        </div>
      </Default>
    );
  }
};

module.exports = Device;
