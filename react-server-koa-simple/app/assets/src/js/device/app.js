/**!
 * project - filepath
 * app.js
 *
 * Copyright(c) Alibaba Group Holding Limited.
 *
 * Authors:
 *   谋士 <qingliang.hql@alibaba-inc.com>
 */
'use strict';

import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router'

import IndexView from '../device/components/IndexView.js';
import AllView from '../device/components/AllView.js';
import PcView from '../device/components/PcView.js';
import WirelessView from '../device/components/WirelessView.js';

const appEle = document.getElementById('demoApp');
let microdata = JSON.parse(appEle.getAttribute('data-microdata'));
let myData = JSON.parse(appEle.getAttribute('data-mydata'));

const wrapComponent = (Component)=> {
  return React.createClass({
    render: function() {
      return React.createElement(Component, {
        microdata: microdata,
        myData: myData
      }, this.props.children);
    }
  });
};
const onRouteEnter = (nextState, replaceState, callback) => {
  console.log(nextState);
  console.log(replaceState);
  callback();
};
render((
  <Router history={browserHistory}>
    <Route path="/" component={wrapComponent(IndexView)} onEnter={onRouteEnter}>
      <Route path="all" component={wrapComponent(AllView)} />
      <Route path="pc" component={wrapComponent(PcView)} />
      <Route path="wireless" component={wrapComponent(WirelessView)} />
    </Route>
  </Router>
), appEle);
