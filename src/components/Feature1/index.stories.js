import React from 'react';
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions';

import Feature1 from './index'
// import { Button } from 'antd'

export const Feature10DataSource = {
  wrapper: { className: 'home-page-wrapper content1-wrapper' },
  OverPack: { className: 'home-page content1', playScale: 0.3 },
  imgWrapper: { className: 'content1-img', md: 10, xs: 24 },
  img: {
    children: 'https://zos.alipayobjects.com/rmsportal/nLzbeGQLPyBJoli.png',
  },
  textWrapper: { className: 'content1-text', md: 14, xs: 24 },
  title: { className: 'content1-title', children: '企业资源管理' },
  content: {
    className: 'content1-content',
    children:
      '云资源集中编排、弹性伸缩、持续发布和部署，高可用及容灾。云资源集中编排、弹性伸缩、持续发布和部署，高可用及容灾。云资源集中编排、弹性伸缩、持续发布和部署，高可用及容灾。',
  },
};
storiesOf('Feature|Feature1', module)
  .add('Web', () => <Feature1 dataSource={Feature10DataSource} isMobile={false} />)
  .add('H5', () => <Feature1 dataSource={Feature10DataSource} isMobile={true} />)
