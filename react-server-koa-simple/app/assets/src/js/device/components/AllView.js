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

class AllView extends Component {
  static propTypes = {
    microdata: PropTypes.object,
  };

  state = {
    text: 'please fetch device of all device data from server!'
  };

  componentWillMount() {
    let { myData, location } = this.props;
    if (myData.device === location.query.device) {
      this.setState({
        text: myData.text
      });
    }
  }

  render() {
    let { text } = this.state;

    return (
      <div>
        <span>{text}</span>
        <span> components</span>
        <span> rendered!</span>
      </div>
    );
  }
}

export default AllView;
