/**!
 * react-server-koa-simple /app/assets/src/js/device/app.js
 * clientRender entry for device page
 *
 * Copyright(c) Alibaba Group Holding Limited.
 *
 * Authors:
 *   谋士 <qingliang.hql@alibaba-inc.com>
 */
'use strict';

import React from 'react';
import { render } from 'react-dom';
import Iso from './Iso.js';
import { appEle, microdata, myData } from './common/Appoint.js';

render(<Iso microdata={microdata} myData={myData} isServer={false} />, appEle);
