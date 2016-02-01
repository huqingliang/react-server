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

const appEle = document.getElementById('demoApp');
const getServerData = (key)=> {
  return JSON.parse(appEle.getAttribute(`data-${key}`));
};

let microdata = getServerData('microdata');
let mydata = getServerData('mydata');

export { appEle, microdata, mydata, getServerData };
