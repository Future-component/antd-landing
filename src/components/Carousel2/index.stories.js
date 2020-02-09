import React from 'react';
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions';

import Carousel2 from './index'
// import { Button } from 'antd'


const honorData = [{
  img: 'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*njqxS5Ky7CQAAAAAAAAAAABjARQnAQ',
  text: '国家高新技术企业'
}, {
  img: 'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*njqxS5Ky7CQAAAAAAAAAAABjARQnAQ',
  text: '网易教育2017年度品牌影响力教育机构',
}, {
  img: 'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*njqxS5Ky7CQAAAAAAAAAAABjARQnAQ',
  text: '2017中关村高成长企业TOP100',
}, {
  img: 'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*njqxS5Ky7CQAAAAAAAAAAABjARQnAQ',
  text: '2018年度阳光招商教育品牌TOP50-创业黑马',
}, {
  img: 'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*njqxS5Ky7CQAAAAAAAAAAABjARQnAQ',
  text: '2018年度教育产业准独角兽TOP30-创业黑马',
}, {
  img: 'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*njqxS5Ky7CQAAAAAAAAAAABjARQnAQ',
  text: '2018年度品牌影响力国际教育机构-新浪教育'
}, {
  img: 'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*njqxS5Ky7CQAAAAAAAAAAABjARQnAQ',
  text: '2018中国教育产业年度创新力企业-亿欧网'
}, {
  img: 'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*njqxS5Ky7CQAAAAAAAAAAABjARQnAQ',
  text: '2018年度品牌影响力少儿英语机构-网易教育'
}, {
  img: 'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*njqxS5Ky7CQAAAAAAAAAAABjARQnAQ',
  text: '26年度品牌价值机构-爱奇艺'
}, {
  img: 'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*njqxS5Ky7CQAAAAAAAAAAABjARQnAQ',
  text: '创业邦2018中国教育创新成长企业30强'
}, {
  img: 'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*njqxS5Ky7CQAAAAAAAAAAABjARQnAQ',
  text: '中国创新教育产品匠心独运奖'
}]

const cooperationData = [
  'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*njqxS5Ky7CQAAAAAAAAAAABjARQnAQ',
  'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*njqxS5Ky7CQAAAAAAAAAAABjARQnAQ',
  'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*njqxS5Ky7CQAAAAAAAAAAABjARQnAQ',
  'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*njqxS5Ky7CQAAAAAAAAAAABjARQnAQ',
  'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*njqxS5Ky7CQAAAAAAAAAAABjARQnAQ',
  'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*njqxS5Ky7CQAAAAAAAAAAABjARQnAQ',
  'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*njqxS5Ky7CQAAAAAAAAAAABjARQnAQ',
  'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*njqxS5Ky7CQAAAAAAAAAAABjARQnAQ',
  'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*njqxS5Ky7CQAAAAAAAAAAABjARQnAQ',
]

export const carouselData2 = {
  wrapper: { className: 'home-page-wrapper carousel2-wrapper', style: { background: '#F5FAFF'} },
  page: { className: 'home-page carousel2' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        className: 'title-h1',
        children: '企业荣誉',
      },
      {
        name: 'content',
        className: 'title-content',
        children: '百度、许国彰家族基金、中科院国科嘉和、远洋集团、世纪金源等知名资本联合战略投资的少儿国际教育领导品牌',
      },
    ],
  },
  block: {
    className: 'carousel2-img-wrapper',
    gutter: 16,
    data: honorData,
    title: '荣誉嘉奖',
    description: '入选国家科技部火炬计划、国家高新技术企业',
    item: {
      name: 'block0',
      className: 'block',
      md: 8,
      xs: 24,
      children: {
        wrapper: { className: 'carousel2-block-content' },
        img: {
          style: {
            backgroundImage: `url(https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*njqxS5Ky7CQAAAAAAAAAAABjARQnAQ)`
          }
        },
        content: { children: '2018年度品牌影响力少儿英语机构' },
      },
    },
  },
  block1: {
    className: 'cooperation-img-wrapper',
    gutter: 16,
    title: '战略合作',
    description: '累计合作机构超9000家',
    data: cooperationData,  
    item: {
      name: 'block0',
      className: 'block',
      xs: 8,
    },
  },
};

storiesOf('Carousel|Carousel2', module)
  .add('Web', () => <Carousel2 dataSource={carouselData2} isMobile={false} />)
  .add('H5', () => <Carousel2 dataSource={carouselData2} isMobile={true} />)
