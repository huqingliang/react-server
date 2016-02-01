/**!
 * react-server-koa-simple /app/assets/src/js/device/Iso.js
 * common components for serverRender and clientRender
 *
 * Copyright(c) Alibaba Group Holding Limited.
 *
 * Authors:
 *   谋士 <qingliang.hql@alibaba-inc.com>
 */
'use strict';

import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, Link, browserHistory, createMemoryHistory } from 'react-router'

import IndexView from '../device/components/IndexView.js';
import AllView from '../device/components/AllView.js';
import PcView from '../device/components/PcView.js';
import WirelessView from '../device/components/WirelessView.js';

class Iso extends Component {
  static propTypes = {
    isServer: PropTypes.bool,
    microdata: PropTypes.object,
    myData: PropTypes.object
  };

  wrapComponent(Component) {
    let { microdata, myData } = this.props;
    return React.createClass({
      render() {
        return React.createElement(Component, {
          microdata: microdata,
          myData: myData
        }, this.props.children);
      }
    });
  }

  render() {
    let { microdata, myData, isServer } = this.props;
    return (
      <Router history={isServer ? createMemoryHistory(myData.path || '/') : browserHistory}>
        <Route path="/"
          component={this.wrapComponent(IndexView)}>
          <IndexRoute component={AllView} />
          <Route path="all" component={AllView} />} />
          <Route path="pc" component={PcView} />
          <Route path="wireless" component={WirelessView} />
        </Route>
      </Router>
    );
  }
}

export default Iso;
