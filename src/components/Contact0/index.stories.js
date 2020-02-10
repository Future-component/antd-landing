import React from 'react';
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions';

import Contact0 from './index'
// import { Button } from 'antd'

export const Contact00DataSource = {
  wrapper: { className: 'home-page-wrapper contact0-wrapper' },
  Content: {
    className: 'icon-wrapper',
    children: {
      icon: {
        className: 'icon',
        children:
          'https://gw.alipayobjects.com/zos/rmsportal/zIUVomgdcKEKcnnQdOzw.svg',
        name: '主要图标',
      },
      iconShadow: {
        className: 'icon-shadow',
        children:
          'https://gw.alipayobjects.com/zos/rmsportal/WIePwurYppfVvDNASZRN.svg',
        name: '图标影阴',
      },
      url: { children: 'https://gaode.com/place/B0FFH3KPBX', name: '跳转地址' },
      title: { children: '大会地址', name: '弹框标题' },
      content: {
        children: '蚂蚁 Z 空间  浙江省杭州市西湖区西溪路556号',
        name: '弹框内容',
      },
    },
  },
};
storiesOf('Contact|Contact0', module)
  .add('Web', () => <Contact0 dataSource={Contact00DataSource} isMobile={false} />)
  .add('H5', () => <Contact0 dataSource={Contact00DataSource} isMobile={true} />)
