import React from 'react';
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions';

import Feature9 from './index'
// import { Button } from 'antd'

export const Feature90DataSource = {
  wrapper: { className: 'home-page-wrapper feature9-wrapper' },
  OverPack: { className: 'home-page feature9', playScale: 0.3 },
  Content: {
    title: { className: 'feature9-title-text', children: '服务指标' },
    className: 'feature9-item',
    name: 'block0',
    children: [
      {
        md: 8,
        xs: 24,
        className: 'feature9-number-wrapper',
        name: 'child0',
        number: {
          className: 'feature9-number',
          unit: { className: 'feature9-unit', children: '万' },
          toText: true,
          children: '116',
        },
        children: { className: 'feature9-text', children: '/ 模型数据' },
      },
      {
        md: 8,
        xs: 24,
        className: 'feature9-number-wrapper',
        name: 'child1',
        number: {
          className: 'feature9-number',
          unit: { className: 'feature9-unit', children: '亿' },
          toText: true,
          children: '1.17',
        },
        children: { className: 'feature9-text', children: '/ 模型迭代数量' },
      },
      {
        md: 8,
        xs: 24,
        className: 'feature9-number-wrapper',
        name: 'child2',
        number: {
          className: 'feature9-number',
          unit: { className: 'feature9-unit', children: '亿' },
          toText: true,
          children: '2.10',
        },
        children: { className: 'feature9-text', children: '/ 训练样本数量' },
      },
    ],
  },
  Carousel: {
    className: 'feature9-content',
    dots: false,
    wrapper: { className: 'feature9-content-wrapper' },
    titleWrapper: {
      className: 'feature9-title-wrapper',
      barWrapper: {
        className: 'feature9-title-bar-wrapper',
        children: { className: 'feature9-title-bar' },
      },
      title: { className: 'feature9-title' },
    },
    children: [
      {
        title: { className: 'feature9-title-text', children: '服务指标' },
        className: 'feature9-item',
        name: 'block1',
        children: [
          {
            md: 8,
            xs: 24,
            name: 'child0',
            className: 'feature9-number-wrapper',
            number: {
              className: 'feature9-number',
              unit: { className: 'feature9-unit', children: '万' },
              toText: true,
              children: '116',
            },
            children: { className: 'feature9-text', children: '模型数据' },
          },
          {
            md: 8,
            xs: 24,
            name: 'child1',
            className: 'feature9-number-wrapper',
            number: {
              className: 'feature9-number',
              unit: { className: 'feature9-unit', children: '亿' },
              toText: true,
              children: '1.17',
            },
            children: { className: 'feature9-text', children: '模型迭代数量' },
          },
          {
            md: 8,
            xs: 24,
            name: 'child2',
            className: 'feature9-number-wrapper',
            number: {
              className: 'feature9-number',
              unit: { className: 'feature9-unit', children: '亿' },
              toText: true,
              children: '2.10',
            },
            children: { className: 'feature9-text', children: '训练样本数量' },
          },
        ],
      },
    ],
  },
};
storiesOf('Feature|Feature9', module)
  .add('Web', () => <Feature9 dataSource={Feature90DataSource} isMobile={false} />)
  .add('H5', () => <Feature9 dataSource={Feature90DataSource} isMobile={true} />)
