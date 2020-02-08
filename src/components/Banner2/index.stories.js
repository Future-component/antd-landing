import React from 'react';
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions';

import Banner2 from './index'
// import { Button } from 'antd'

export const Banner20DataSource = {
  wrapper: { className: 'banner2' },
  BannerAnim: {
    children: [
      {
        name: 'elem0',
        BannerElement: { className: 'banner-user-elem' },
        page: { className: 'home-page banner2-page' },
        textWrapper: { className: 'banner2-text-wrapper' },
        bg: { className: 'bg bg0' },
        title: { className: 'banner2-title', children: 'Ant Motion' },
        content: {
          className: 'banner2-content',
          children: '一个高效的页面动画解决方案',
        },
        button: { className: 'banner2-button', children: 'Learn More' },
      },
    ],
  },
};

storiesOf('Banner|Banner2', module)
  .add('Web', () => <Banner2 dataSource={Banner20DataSource} isMobile={false} />)
  .add('H5', () => <Banner2 dataSource={Banner20DataSource} isMobile={true} />)
