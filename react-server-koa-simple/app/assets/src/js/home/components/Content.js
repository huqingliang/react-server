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

class Content extends Component {
  static propTypes = {
    microdata: PropTypes.object,
    mydata: PropTypes.object
  };

  render() {
    let { microdata, mydata } = this.props;
    return (
      <div>hello：{mydata.nick}</div>
    );
  }
}

export default Content;
