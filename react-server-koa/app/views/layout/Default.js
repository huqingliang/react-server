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

class Default extends Component {
  static propTypes = {
    microdata: PropTypes.object,
    children: PropTypes.object,
    title: PropTypes.string,
    scriptUrls: PropTypes.array
  };

  renderScripts() {
    const {scriptUrls} = this.props;
    let items = [];
    scriptUrls.map((url)=>{
      items.push(<script src={url} />);
    });
    return items;
  }

  render() {
    const { microdata, title, children } = this.props;

    return (
      <html>
        <head>
          <meta charSet='utf-8' />
          <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
          <meta httpEquiv='Cache-Control' content='no-siteapp' />
          <meta name='renderer' content='webkit' />
          <meta name='keywords' content='demo' />
          <meta name='description' content='demo' />
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <title>{title}</title>
          <link rel='stylesheet' href='//g.alicdn.com/dt/op-base/3.1.5/css/op-base.css' />
          <link rel='stylesheet' href='//g.alicdn.com/dt/op-alizs/1.0.1/style.css' />
        </head>
        <body>
          {children}
          {this.renderScripts()}
        </body>
      </html>
    );
  }
};
module.exports = Default;
