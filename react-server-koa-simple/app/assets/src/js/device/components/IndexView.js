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
import { Link, IndexLink } from 'react-router';


const ACTIVE = { color: 'red'}
class IndexView extends Component {
  static propTypes = {
    microdata: PropTypes.object,
    myData: PropTypes.object
  };

  render() {
    let { microdata, myData } = this.props;
    return (
      <div>
        <h1>APP!</h1>
        <ul>
          <li><Link to="/all" activeStyle={ACTIVE}>/all</Link></li>
          <li><Link to="/pc" activeStyle={ACTIVE}>/pc</Link></li>
          <li><Link to="/wireless" activeStyle={ACTIVE}>/wireless</Link></li>
        </ul>
        <hr />
        {this.props.children}
      </div>
    );
  }
}

export default IndexView;
