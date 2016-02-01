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

class IndexView extends Component {
  static propTypes = {
    microdata: PropTypes.object,
    myData: PropTypes.object
  };

  render() {
    let { microdata, myData } = this.props;
    return (
      <div>
        <span>{myData.text}</span>
        <span> components</span>
        <span> rendered!</span>
      </div>
    );
  }
}

export default IndexView;
