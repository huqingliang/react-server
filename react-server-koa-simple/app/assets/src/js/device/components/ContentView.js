/**!
 * react-server-koa-simple - app/assets/src/js/device/components/ContentView.js
 * components of ContentView
 *
 * Copyright(c) Alibaba Group Holding Limited.
 *
 * Authors:
 *   谋士 <qingliang.hql@alibaba-inc.com>
 */
'use strict';

import React, { Component, PropTypes } from 'react';

class ContentView extends Component {
  static propTypes = {
    device: PropTypes.string,
  };

  state = {
    text: `please fetch device of ${this.props.device} data from server!`
  };

  getText(device) {
    return `this data is fetch from device of ${device}`;
  }

  componentWillMount() {
    let { device } = this.props;
    this.setState({
      text: this.getText(device)
    });
  }

  componentWillReceiveProps(nextProps) {
    let { device } = nextProps;
    this.setState({
      text: this.getText(device)
    });
  }

  render() {
    let { text } = this.state;
    return (
      <div>
        <span>{text}</span>
      </div>
    );
  }
}

export default ContentView;
