/**!
 * react-server-koa-simple - app/assets/src/js/device/components/IndexView.js
 * 路由布局
 *
 * Copyright(c) Alibaba Group Holding Limited.
 *
 * Authors:
 *   谋士 <qingliang.hql@alibaba-inc.com>
 */
'use strict';
import React, { Component, PropTypes, cloneElement } from 'react';
import { Link, IndexLink } from 'react-router';


const ACTIVE = { color: 'red'}
class IndexView extends Component {
  static propTypes = {
    microdata: PropTypes.object,
    myData: PropTypes.object
  };

  renderChildren() {
    let { microdata, myData, children } = this.props;
    let items = [];
    React.Children.map(children, function(child, i){
      items.push(cloneElement(child, {
        key: i,
        microdata: microdata,
        myData: myData
      }));
    });
    return items;
  }

  render() {
    return (
      <div>
        <h1>APP!</h1>
        <ul>
          <li><Link to={{pathname: '/all', query: {device: 'all'}}} activeStyle={ACTIVE}>/all</Link></li>
          <li><Link to={{pathname: '/pc', query: {device: 'pc'}}} activeStyle={ACTIVE}>/pc</Link></li>
          <li><Link to={{pathname: '/wireless', query: {device: 'wireless'}}} activeStyle={ACTIVE}>/wireless</Link></li>
        </ul>
        <hr />
        {this.renderChildren()}
      </div>
    );
  }
}

export default IndexView;
