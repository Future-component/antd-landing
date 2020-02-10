import React from 'react';
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions';

import Banner6 from './index'
// import { Button } from 'antd'

export const Banner60DataSource = {
  wrapper: { className: 'home-page-wrapper banner6' },
  page: { className: 'home-page banner6-page' },
  childWrapper: {
    className: 'banner6-title-wrapper',
    children: [
      { name: 'title', children: '产品名', className: 'banner6-title' },
      {
        name: 'explain',
        // className: 'banner6-explain',
        className: 'banner6-title',
        children: '产品标语介绍',
      },
      {
        name: 'content',
        className: 'banner6-content',
        children: <ul>
          <li><span>●</span>产品的详细</li>
          <li><span>●</span>产品的详细</li>
          <li><span>●</span>产品的详细</li>
          <li><span>●</span>产品的详细</li>
        </ul>,
      },
      {
        name: 'button',
        className: 'banner6-button-wrapper',
        children: {
          href: '#',
          className: 'banner6-button',
          type: 'primary',
          children: '开始使用',
        },
      },
    ],
  },
  image: {
    className: 'banner6-image',
    children:
      'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*-wAhRYnWQscAAAAAAAAAAABkARQnAQ',
  },
};
storiesOf('Banner|Banner6', module)
  .add('Web', () => <Banner6 dataSource={Banner60DataSource} isMobile={false} />)
  .add('H5', () => <Banner6 dataSource={Banner60DataSource} isMobile={true} />)
