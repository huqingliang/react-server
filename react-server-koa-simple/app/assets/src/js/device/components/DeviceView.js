/**!
 * react-server-koa-simple - app/assets/src/js/device/components/AllView.js
 * components of all device
 *
 * Copyright(c) Alibaba Group Holding Limited.
 *
 * Authors:
 *   谋士 <qingliang.hql@alibaba-inc.com>
 */
'use strict';

import React, { Component, PropTypes } from 'react';
import ContentView from './ContentView';

class DeviceView extends Component {
  static propTypes = {
    params: PropTypes.object,
  };

  render() {
    let { params } = this.props;
    return (
      <div>
        <h3>device: {params.deviceID}</h3>
        <ContentView device={params.deviceID} />
      </div>
    );
  }
}

export default DeviceView;
