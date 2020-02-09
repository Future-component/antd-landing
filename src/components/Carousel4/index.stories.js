import React from 'react';
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions';

import Carousel4 from './index'
// import { Button } from 'antd'

export const Carousel4Data = {
  wrapper: { className: 'home-page-wrapper carousel4-wrapper' },
  page: { className: 'home-page carousel4' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        className: 'title-h1',
        children: '权威认证外教',
      },
      {
        name: 'content',
        className: 'title-content',
        children: '未来的世界充满不确定性，孩子的思维能力远比知识能力更重要',
      },
    ],
  },
  block: {
    children: [{
      item: 1,
      className: 'carousel4-img-wrapper',
      gutter: 16,
      children: [{
        name: 'block0',
        className: 'block',
        xs: 24,
        children: {
          wrapper: { className: 'carousel4-block-content' },
          img: {
            style: {
              backgroundImage: `url(https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*njqxS5Ky7CQAAAAAAAAAAABjARQnAQ)`
            }
          },
        },
      }],
    }, {
      item: 1,
      className: 'carousel4-img-wrapper',
      gutter: 16,
      children: [{
        name: 'block0',
        className: 'block',
        xs: 24,
        children: {
          wrapper: { className: 'carousel4-block-content' },
          img: {
            style: {
              backgroundImage: `url(https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*njqxS5Ky7CQAAAAAAAAAAABjARQnAQ)`
            }
          },
        },
      }],
    }],
  },
};

storiesOf('Carousel|Carousel4', module)
  .add('Web', () => <Carousel4 dataSource={Carousel4Data} isMobile={false} />)
  .add('H5', () => <Carousel4 dataSource={Carousel4Data} isMobile={true} />)
