import React from 'react';
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions';

import Banner4 from './index'
// import { Button } from 'antd'


export const Banner40DataSource = {
  wrapper: { className: 'home-page-wrapper banner4' },
  page: { className: 'home-page banner4-page' },
  childWrapper: {
    className: 'banner4-title-wrapper',
    children: [
      { name: 'title', children: 'Ant Design Pro', className: 'banner4-title' },
      {
        name: 'content',
        className: 'banner4-content',
        children: '开箱即用的中台前端/设计解决方案',
      },
      {
        name: 'button',
        children: { href: '#', type: 'primary', children: '开始使用' },
      },
    ],
  },
  image: {
    className: 'banner4-image',
    children:
      'https://gw.alipayobjects.com/mdn/rms/afts/img/A*k3InRLiZDk4AAAAAAAAAAABjARQnAQ',
  },
};

storiesOf('Banner|Banner4', module)
  .add('Web', () => <Banner4 dataSource={Banner40DataSource} isMobile={false} />)
  .add('H5', () => <Banner4 dataSource={Banner40DataSource} isMobile={true} />)
