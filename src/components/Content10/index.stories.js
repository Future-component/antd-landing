import React from 'react';
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions';

import Content10 from './index'
// import { Button } from 'antd'

export const Content100DataSource = {
  wrapper: { className: 'home-page-wrapper content10-wrapper' },
  page: { className: 'home-page content10' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [{ name: 'title', children: '产品与服务' }],
  },
  childWrapper: {
    className: 'content10-block-wrapper',
    children: [
      {
        name: 'block0',
        className: 'content10-block',
        md: 6,
        xs: 24,
        children: {
          className: 'content10-block-item',
          children: [
            {
              name: 'image',
              className: 'content10-block-icon',
              style: { background: 'linear-gradient(45deg, #8ad0f8, #3c6bfe)' },
              children:
                (<div className="content10-block-title">一站式业务接入</div>),
            },
            { name: 'content', children: (<ul>
              <li>核算接入产品</li>
              <li>核算接入产品</li>
              <li>核算接入产品</li>
              <li>核算接入产品</li>
            </ul>) },
          ],
        },
      },
      {
        name: 'block1',
        className: 'content10-block',
        md: 6,
        xs: 24,
        children: {
          className: 'content10-block-item',
          children: [
            {
              name: 'image',
              className: 'content10-block-icon',
              style: { background: 'linear-gradient(45deg, #fcabcf, #fa7bb1)' },
              children:
                (<div className="content10-block-title">一站式业务接入</div>),
            },
            {
              name: 'content',
              children: '在所有需求配置环节事前风险控制和质量控制能力',
            },
          ],
        },
      },
      {
        name: 'block2',
        className: 'content10-block',
        md: 6,
        xs: 24,
        children: {
          className: 'content10-block-item',
          children: [
            {
              name: 'image',
              className: 'content10-block-icon',
              style: { background: 'linear-gradient(45deg, #84e6da, #22a8ea)' },
              children:
                (<div className="content10-block-title">一站式业务接入</div>),
            },
            {
              name: 'content',
              children: '沉淀产品接入效率和运营小二工作效率数据',
            },
          ],
        },
      },
      {
        name: 'block2',
        className: 'content10-block',
        md: 6,
        xs: 24,
        children: {
          className: 'content10-block-item',
          children: [
            {
              name: 'image',
              className: 'content10-block-icon',
              style: { background: 'linear-gradient(45deg, #b274ec, #7f62fb)' },
              children:
                (<div className="content10-block-title">一站式业务接入</div>),
            },
            {
              name: 'content',
              children: '沉淀产品接入效率和运营小二工作效率数据',
            },
          ],
        },
      },
    ],
  },
};
storiesOf('Content|Content10', module)
  .add('Web', () => <Content10 dataSource={Content100DataSource} isMobile={false} />)
  .add('H5', () => <Content10 dataSource={Content100DataSource} isMobile={true} />)
