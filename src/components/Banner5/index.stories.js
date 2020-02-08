import React from 'react';
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions';

import Banner5 from './index'
// import { Button } from 'antd'

export const Banner50DataSource = {
  wrapper: { className: 'home-page-wrapper banner5' },
  page: { className: 'home-page banner5-page' },
  childWrapper: {
    className: 'banner5-title-wrapper',
    children: [
      { name: 'title', children: '产品名', className: 'banner5-title' },
      {
        name: 'explain',
        className: 'banner5-explain',
        children: '产品标语介绍',
      },
      {
        name: 'content',
        className: 'banner5-content',
        children: '产品的详细说明，如是什么东西之类的文字',
      },
      {
        name: 'button',
        className: 'banner5-button-wrapper',
        children: {
          href: '#',
          className: 'banner5-button',
          type: 'primary',
          children: '开始使用',
        },
      },
    ],
  },
  image: {
    className: 'banner5-image',
    children:
      'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*-wAhRYnWQscAAAAAAAAAAABkARQnAQ',
  },
};
storiesOf('Banner|Banner5', module)
  .add('Web', () => <Banner5 dataSource={Banner50DataSource} isMobile={false} />)
  .add('H5', () => <Banner5 dataSource={Banner50DataSource} isMobile={true} />)
