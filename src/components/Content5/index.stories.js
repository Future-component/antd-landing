import React from 'react';
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions';

import Content5 from './index'
// import { Button } from 'antd'

export const Content50DataSource = {
  wrapper: { className: 'home-page-wrapper content5-wrapper' },
  page: { className: 'home-page content5' },
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
    className: 'content5-img-wrapper',
    gutter: 16,
    children: [
      {
        name: 'block0',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content' },
          img: {
            children:
              'https://t.alipayobjects.com/images/rmsweb/T11aVgXc4eXXXXXXXX.svg',
          },
          content: { children: 'Ant Design' },
        },
      },
      {
        name: 'block1',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content' },
          img: {
            children:
              'https://zos.alipayobjects.com/rmsportal/faKjZtrmIbwJvVR.svg',
          },
          content: { children: 'Ant Motion' },
        },
      },
      {
        name: 'block2',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content' },
          img: {
            children:
              'https://t.alipayobjects.com/images/rmsweb/T11aVgXc4eXXXXXXXX.svg',
          },
          content: { children: 'Ant Design' },
        },
      },
      {
        name: 'block3',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content' },
          img: {
            children:
              'https://zos.alipayobjects.com/rmsportal/faKjZtrmIbwJvVR.svg',
          },
          content: { children: 'Ant Motion' },
        },
      },
      {
        name: 'block4',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content' },
          img: {
            children:
              'https://t.alipayobjects.com/images/rmsweb/T11aVgXc4eXXXXXXXX.svg',
          },
          content: { children: 'Ant Design' },
        },
      },
      {
        name: 'block5',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content' },
          img: {
            children:
              'https://zos.alipayobjects.com/rmsportal/faKjZtrmIbwJvVR.svg',
          },
          content: { children: 'Ant Motion' },
        },
      },
      {
        name: 'block6',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content' },
          img: {
            children:
              'https://t.alipayobjects.com/images/rmsweb/T11aVgXc4eXXXXXXXX.svg',
          },
          content: { children: 'Ant Design' },
        },
      },
      {
        name: 'block7',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content' },
          img: {
            children:
              'https://zos.alipayobjects.com/rmsportal/faKjZtrmIbwJvVR.svg',
          },
          content: { children: 'Ant Motion' },
        },
      },
    ],
  },
};
storiesOf('Content|Content5', module)
  .add('Web', () => <Content5 dataSource={Content50DataSource} isMobile={false} />)
  .add('H5', () => <Content5 dataSource={Content50DataSource} isMobile={true} />)
