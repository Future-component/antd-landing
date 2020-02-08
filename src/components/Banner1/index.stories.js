import React from 'react';
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions';

import Banner1 from './index'
// import { Button } from 'antd'

export const Banner10DataSource = {
  wrapper: { className: 'banner1' },
  BannerAnim: {
    children: [
      {
        name: 'elem0',
        BannerElement: { className: 'banner-user-elem' },
        textWrapper: { className: 'banner1-text-wrapper' },
        bg: { className: 'bg bg0' },
        title: {
          className: 'banner1-title',
          children:
            'https://zos.alipayobjects.com/rmsportal/HqnZZjBjWRbjyMr.png',
        },
        content: {
          className: 'banner1-content',
          children: '一个高效的页面动画解决方案',
        },
        button: { className: 'banner1-button', children: 'Learn More' },
      },
      {
        name: 'elem1',
        BannerElement: { className: 'banner-user-elem' },
        textWrapper: { className: 'banner1-text-wrapper' },
        bg: { className: 'bg bg1' },
        title: {
          className: 'banner1-title',
          children:
            'https://zos.alipayobjects.com/rmsportal/HqnZZjBjWRbjyMr.png',
        },
        content: {
          className: 'banner1-content',
          children: '一个高效的页面动画解决方案',
        },
        button: { className: 'banner1-button', children: 'Learn More' },
      },
      {
        name: 'elem2',
        BannerElement: { className: 'banner-user-elem' },
        textWrapper: { className: 'banner1-text-wrapper' },
        bg: { className: 'bg bg1' },
        title: {
          className: 'banner1-title',
          children:
            'https://zos.alipayobjects.com/rmsportal/HqnZZjBjWRbjyMr.png',
        },
        content: {
          className: 'banner1-content',
          children: '一个高效的页面动画解决方案',
        },
        button: { className: 'banner1-button', children: 'Learn More' },
      },
    ],
  },
};

storiesOf('Banner|Banner1', module)
  .add('Web', () => <Banner1 dataSource={Banner10DataSource} isMobile={false} />)
  .add('H5', () => <Banner1 dataSource={Banner10DataSource} isMobile={true} />)
