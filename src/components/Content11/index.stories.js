import React from 'react';
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions';

import Content11 from './index'
// import { Button } from 'antd'

export const Content110DataSource = {
  wrapper: { className: 'home-page-wrapper content11-wrapper', style: { backgroundImage: 'url(https://gw.alipayobjects.com/os/s/prod/seeconf/c66ebea962cdf544926ca5a472dea5ea.jpg)' } },
  Content: {
    className: 'icon-wrapper',
    children: {
      content: {
        className: 'content11-text',
        // children:
        //   'https://gw.alipayobjects.com/zos/rmsportal/zIUVomgdcKEKcnnQdOzw.svg',
        children: '解决方案',
      },
      // iconShadow: {
      //   className: 'icon-shadow',
      //   // children:
      //   //   'https://gw.alipayobjects.com/zos/rmsportal/WIePwurYppfVvDNASZRN.svg',
      //   name: '图标影阴',
      //   children: '解决方案',
      // },
      // url: { children: 'https://gaode.com/place/B0FFH3KPBX', name: '跳转地址' },
      // title: { children: '大会地址', name: '弹框标题' },
      // content: {
      //   children: '蚂蚁 Z 空间  浙江省杭州市西湖区西溪路556号',
      //   name: '弹框内容',
      // },
    },
  },
};
storiesOf('Content|Content11', module)
  .add('Web', () => <Content11 dataSource={Content110DataSource} isMobile={false} />)
  .add('H5', () => <Content11 dataSource={Content110DataSource} isMobile={true} />)
