import React from 'react';
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions';

import Content6 from './index'
// import { Button } from 'antd'

export const Content60DataSource = {
  wrapper: { className: 'home-page-wrapper content6-wrapper' },
  page: { className: 'home-page content6' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      { name: 'title', children: '客户案例', className: 'title-h1' },
      {
        name: 'content',
        className: 'title-content',
        children: '在这里用一段话介绍服务的案例情况',
      },
    ],
  },
  block: {
    className: 'content6-img-wrapper',
    gutter: 16,
    children: [
      {
        name: 'block0',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'content6-block-content' },
          img: {
            children:
              'https://t.alipayobjects.com/images/rmsweb/T11aVgXc4eXXXXXXXX.svg',
          },
          title: { children: 'Ant Design' },
          content: { children: '网站，一个全新的互联网营销渠道' },
          a: { children: '在线联系', href: '#' },
        },
      },
      {
        name: 'block1',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'content6-block-content' },
          img: {
            children:
              'https://zos.alipayobjects.com/rmsportal/faKjZtrmIbwJvVR.svg',
          },
          title: { children: 'Ant Design' },
          content: { children: '网站，一个全新的互联网营销渠道' },
          a: { children: '在线联系', href: '#' },
        },
      },
      {
        name: 'block2',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'content6-block-content' },
          img: {
            children:
              'https://t.alipayobjects.com/images/rmsweb/T11aVgXc4eXXXXXXXX.svg',
          },
          title: { children: 'Ant Design' },
          content: { children: '网站，一个全新的互联网营销渠道' },
          a: { children: '在线联系', href: '#' },
        },
      },
      {
        name: 'block3',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'content6-block-content' },
          img: {
            children:
              'https://zos.alipayobjects.com/rmsportal/faKjZtrmIbwJvVR.svg',
          },
          title: { children: 'Ant Design' },
          content: { children: '网站，一个全新的互联网营销渠道' },
          a: { children: '在线联系', href: '#' },
        },
      },
    ],
  },
};
storiesOf('Content|Content6', module)
  .add('Web', () => <Content6 dataSource={Content60DataSource} isMobile={false} />)
  .add('H5', () => <Content6 dataSource={Content60DataSource} isMobile={true} />)
