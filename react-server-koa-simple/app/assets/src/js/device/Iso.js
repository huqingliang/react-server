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
import {
  Router,
  Route,
  IndexRoute,
  IndexRedirect,
  browserHistory,
  createMemoryHistory
} from 'react-router'

import LayoutView from '../device/components/LayoutView.js';
import DeviceView from '../device/components/DeviceView.js';
import ContentView from '../device/components/ContentView.js';

class Iso extends Component {
  static propTypes = {
    isServer: PropTypes.bool,
    microdata: PropTypes.object,
    mydata: PropTypes.object
  };

   wrapComponent(Component) {
    let { microdata, mydata } = this.props;
    return React.createClass({
      render() {
        return React.createElement(Component, {
          microdata: microdata,
          mydata: mydata
        }, this.props.children);
      }
    });
  }

  render() {
    let { isServer, mydata } = this.props;
    return (
      <Router history={isServer ? createMemoryHistory(mydata.path || '/') : browserHistory}>
        <Route path="/"
          component={this.wrapComponent(LayoutView)}>
          <IndexRoute component={this.wrapComponent(DeviceView)} />
          <Route path="/device/:deviceID" component={DeviceView} />
        </Route>
      </Router>
    );
  }
}

export default Iso;
