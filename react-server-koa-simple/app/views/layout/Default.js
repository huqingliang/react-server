/**!
 * react-server-koa-simple - app/views/layout/Default.js
 * default layout
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
    scriptUrls.map((url, i)=>{
      items.push(<script key={i} src={url} />);
    });
    return items;
  }

  render() {
    const { microdata, title, children } = this.props;
    // let vendorsJs = `${microdata.domain}/build/${microdata.version}/js/vendors.js`;
    // <script src={vendorsJs} />
    return (
      <html>
        <div>first layouts</div>
        <head>
          <div>second  layouts</div>
          <meta charSet='utf-8' />
          <div>
            <span>second</span>
            <p><span>gogogo444</span><span>555555555555</span></p>
          </div>
          <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
          <meta httpEquiv='Cache-Control' content='no-siteapp' />
          <meta name='renderer' content='webkit' />
          <meta name='keywords' content='demo' />
          <meta name='description' content='demo' />
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <title>{title}</title>
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
