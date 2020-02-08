import React from 'react';
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions';

import Content4 from './index'
// import { Button } from 'antd'

export const Content40DataSource = {
  wrapper: { className: 'home-page-wrapper content4-wrapper' },
  page: { className: 'home-page content4' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: '蚂蚁金融云提供专业的服务',
        className: 'title-h1',
      },
      {
        name: 'content',
        className: 'title-content content4-title-content',
        children: '科技想象力，金融创造力',
      },
    ],
  },
  video: {
    className: 'content4-video',
    children: {
      video: 'https://os.alipayobjects.com/rmsportal/EejaUGsyExkXyXr.mp4',
      image: 'https://zos.alipayobjects.com/rmsportal/HZgzhugQZkqUwBVeNyfz.jpg',
    },
  },
};
storiesOf('Content|Content4', module)
  .add('Web', () => <Content4 dataSource={Content40DataSource} isMobile={false} />)
  .add('H5', () => <Content4 dataSource={Content40DataSource} isMobile={true} />)
