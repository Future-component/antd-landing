import React from 'react';
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions';

import Content1 from './index'
// import { Button } from 'antd'

export const Content10DataSource = {
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
storiesOf('Content|Content1', module)
  .add('Web', () => <Content1 dataSource={Content10DataSource} isMobile={false} />)
  .add('H5', () => <Content1 dataSource={Content10DataSource} isMobile={true} />)
