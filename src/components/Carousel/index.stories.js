import React from 'react';
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions';

import Carousel from './index'
// import { Button } from 'antd'


export const carouselData = {
  wrapper: { className: 'home-page-wrapper carousel-wrapper' },
  page: { className: 'home-page carousel' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        className: 'title-h1',
        children: '赋能家长',
      },
      {
        name: 'content',
        className: 'title-content',
        children: '我们不仅关注孩子，也关心你',
      },
    ],
  },
  block: {
    children: [{
      item: 1,
      className: 'carousel-img-wrapper',
      gutter: 16,
      children: [{
        name: 'block0',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          wrapper: { className: 'carousel-block-content' },
          img: {
            style: {
              backgroundImage: `url(https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*njqxS5Ky7CQAAAAAAAAAAABjARQnAQ)`
            }
          },
          content: { children: '一位清华新生的父亲给儿子的一封信，讲述了与众不同的教育观' },
        },
      },
      {
        name: 'block1',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          wrapper: { className: 'carousel-block-content' },
          img: {
            style: {
              backgroundImage: `url(https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*njqxS5Ky7CQAAAAAAAAAAABjARQnAQ)`
            }
          },
          content: { children: '孩子平时表现消极，该如何正确引导？' },
        },
      },
      {
        name: 'block2',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          wrapper: { className: 'carousel-block-content' },
          img: {
            style: {
              backgroundImage: `url(https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*njqxS5Ky7CQAAAAAAAAAAABjARQnAQ)`
            }
          },
          content: { children: '全班95%孩子不认识蜡烛！科学老师很无奈：到底是孩子无知，还是课本OUT了' },
        },
      }],
    }, {
      item: 2,
      className: 'carousel-img-wrapper',
      gutter: 16,
      children: [{
        name: 'block0',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          wrapper: { className: 'carousel-block-content' },
          img: {
            style: {
              backgroundImage: `url(https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*njqxS5Ky7CQAAAAAAAAAAABjARQnAQ)`
            }
          },
          content: { children: '一位宝妈的分享：如何做一个让孩子信服的家长？' },
        },
      },
      {
        name: 'block1',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          wrapper: { className: 'carousel-block-content' },
          img: {
            style: {
              backgroundImage: `url(https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*njqxS5Ky7CQAAAAAAAAAAABjARQnAQ)`
            }
          },
          content: { children: '如何让我们的孩子不再成为下一个《狗十三》的李玩?' },
        },
      },
      {
        name: 'block2',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          wrapper: { className: 'carousel-block-content' },
          img: {
            style: {
              backgroundImage: `url(https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*njqxS5Ky7CQAAAAAAAAAAABjARQnAQ)`
            }
          },
          content: { children: '张柏芝生第三胎了！她的“权威型”育儿方式值得学习' },
        },
      }],
    }],
  },
};

storiesOf('Carousel|Carousel0', module)
  .add('Web', () => <Carousel dataSource={carouselData} isMobile={false} />)
  .add('H5', () => <Carousel dataSource={carouselData} isMobile={true} />)
