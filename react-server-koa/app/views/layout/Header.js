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

class Header extends Component {

  static propTypes = {
    microdata: PropTypes.object
  };

  render() {
    const { microdata } = this.props;
    const { userInfo={} } = microdata;

    return (
      <div className="alizs-header">
        <div className="header-wrapper">
          <h1 className="logo">
            <div className="logo-link">
              <a href="/home">MyApp</a>
            </div>
          </h1>
          <div className="login-wrapper">
            {
              !(userInfo.userId && userInfo.userName) ? (
                <div className="not-login">
                  <span className="to-login">登录</span>
                </div>
              ) : (
                <div className="has-login">
                  <span className="say-hello">{`你好，${userInfo.userName}`}</span>
                  <a className="to-quit">
                    退出
                  </a>
                </div>
              )
            }
            <div className="to-about">关于我们</div>
          </div>
        </div>
      </div>
    );
  }
};

export default Header;
