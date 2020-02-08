import React from 'react';
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions';

import Banner0 from './index'
// import { Button } from 'antd'

export const Banner00DataSource = {
  wrapper: { className: 'banner0' },
  textWrapper: { className: 'banner0-text-wrapper' },
  title: {
    className: 'banner0-title',
    children: 'https://zos.alipayobjects.com/rmsportal/HqnZZjBjWRbjyMr.png',
  },
  content: {
    className: 'banner0-content',
    children: '一个高效的页面动画解决方案',
  },
  button: { className: 'banner0-button', children: 'Learn More' },
};

storiesOf('Banner|Banner0', module)
  .add('Web', () => <Banner0 dataSource={Banner00DataSource} isMobile={false} />)
  .add('H5', () => <Banner0 dataSource={Banner00DataSource} isMobile={true} />)
