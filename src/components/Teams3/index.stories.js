import React from 'react';
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions';

import Teams3 from './index'
// import { Button } from 'antd'

export const Teams30DataSource = {
  wrapper: { className: 'home-page-wrapper teams3-wrapper' },
  page: { className: 'home-page teams3' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [{ name: 'title', children: '团队成员' }],
  },
  blockTop: {
    className: 'block-top-wrapper',
    children: [
      {
        name: 'block0',
        className: 'block-top',
        md: 8,
        xs: 24,
        titleWrapper: {
          children: [
            {
              name: 'image',
              className: 'teams3-top-image',
              children:
                'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*--rVR4hclJYAAAAAAAAAAABjARQnAQ',
            },
            {
              name: 'title',
              className: 'teams3-top-title',
              children: '叶秀英',
            },
            {
              name: 'content',
              className: 'teams3-top-job',
              children: '公司+职位 信息暂缺',
            },
            {
              name: 'content1',
              className: 'teams3-top-content',
              children:
                'AntV 是蚂蚁金服全新一代数据可视化解决方案，致力于提供一套简单方便、专业可靠、无限可能的数据可视化最佳实践。',
            },
          ],
        },
      },
      {
        name: 'block1',
        className: 'block-top',
        md: 8,
        xs: 24,
        titleWrapper: {
          children: [
            {
              name: 'image',
              className: 'teams3-top-image',
              children:
                'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*njqxS5Ky7CQAAAAAAAAAAABjARQnAQ',
            },
            { name: 'title', className: 'teams3-top-title', children: '韩勇' },
            {
              name: 'content',
              className: 'teams3-top-job',
              children: '公司+职位 信息暂缺',
            },
            {
              name: 'content1',
              className: 'teams3-top-content',
              children:
                '语雀是一款优雅高效的在线文档编辑与协同工具， 让每个企业轻松拥有文档中心阿里巴巴集团内部使用多年，众多中小企业首选。',
            },
          ],
        },
      },
      {
        name: 'block2',
        className: 'block-top',
        md: 8,
        xs: 24,
        titleWrapper: {
          children: [
            {
              name: 'image',
              className: 'teams3-top-image',
              children:
                'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*--rVR4hclJYAAAAAAAAAAABjARQnAQ',
            },
            {
              name: 'title',
              className: 'teams3-top-title',
              children: '叶秀英',
            },
            {
              name: 'content',
              className: 'teams3-top-job',
              children: '公司+职位 信息暂缺',
            },
            {
              name: 'content1',
              className: 'teams3-top-content',
              children:
                'AntV 是蚂蚁金服全新一代数据可视化解决方案，致力于提供一套简单方便、专业可靠、无限可能的数据可视化最佳实践。',
            },
          ],
        },
      },
    ],
  },
  block: {
    className: 'block-wrapper',
    gutter: 72,
    children: [
      {
        name: 'block0',
        className: 'block',
        md: 8,
        xs: 24,
        image: {
          name: 'image',
          className: 'teams3-image',
          children:
            'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*--rVR4hclJYAAAAAAAAAAABjARQnAQ',
        },
        titleWrapper: {
          className: 'teams3-textWrapper',
          children: [
            { name: 'title', className: 'teams3-title', children: '叶秀英' },
            {
              name: 'content',
              className: 'teams3-job',
              children: '公司+职位 信息暂缺',
            },
            {
              name: 'content1',
              className: 'teams3-content',
              children: 'AntV 是蚂蚁金服全新一代数据可视化解决方案。',
            },
          ],
        },
      },
      {
        name: 'block1',
        className: 'block',
        md: 8,
        xs: 24,
        image: {
          name: 'image',
          className: 'teams3-image',
          children:
            'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*njqxS5Ky7CQAAAAAAAAAAABjARQnAQ',
        },
        titleWrapper: {
          className: 'teams3-textWrapper',
          children: [
            { name: 'title', className: 'teams3-title', children: '韩勇' },
            {
              name: 'content',
              className: 'teams3-job',
              children: '公司+职位 信息暂缺',
            },
            {
              name: 'content1',
              className: 'teams3-content',
              children: '语雀是一款优雅高效的在线文档编辑与协同工具。',
            },
          ],
        },
      },
      {
        name: 'block2',
        className: 'block',
        md: 8,
        xs: 24,
        image: {
          name: 'image',
          className: 'teams3-image',
          children:
            'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*--rVR4hclJYAAAAAAAAAAABjARQnAQ',
        },
        titleWrapper: {
          className: 'teams3-textWrapper',
          children: [
            { name: 'title', className: 'teams3-title', children: '叶秀英' },
            {
              name: 'content',
              className: 'teams3-job',
              children: '公司+职位 信息暂缺',
            },
            {
              name: 'content1',
              className: 'teams3-content',
              children: 'AntV 是蚂蚁金服全新一代数据可视化解决方案。',
            },
          ],
        },
      },
      {
        name: 'block3',
        className: 'block',
        md: 8,
        xs: 24,
        image: {
          name: 'image',
          className: 'teams3-image',
          children:
            'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*--rVR4hclJYAAAAAAAAAAABjARQnAQ',
        },
        titleWrapper: {
          className: 'teams3-textWrapper',
          children: [
            { name: 'title', className: 'teams3-title', children: '叶秀英' },
            {
              name: 'content',
              className: 'teams3-job',
              children: '公司+职位 信息暂缺',
            },
            {
              name: 'content1',
              className: 'teams3-content',
              children: 'AntV 是蚂蚁金服全新一代数据可视化解决方案。',
            },
          ],
        },
      },
      {
        name: 'block4',
        className: 'block',
        md: 8,
        xs: 24,
        image: {
          name: 'image',
          className: 'teams3-image',
          children:
            'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*njqxS5Ky7CQAAAAAAAAAAABjARQnAQ',
        },
        titleWrapper: {
          className: 'teams3-textWrapper',
          children: [
            { name: 'title', className: 'teams3-title', children: '韩勇' },
            {
              name: 'content',
              className: 'teams3-job',
              children: '公司+职位 信息暂缺',
            },
            {
              name: 'content1',
              className: 'teams3-content',
              children: '语雀是一款优雅高效的在线文档编辑与协同工具。',
            },
          ],
        },
      },
      {
        name: 'block5',
        className: 'block',
        md: 8,
        xs: 24,
        image: {
          name: 'image',
          className: 'teams3-image',
          children:
            'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*--rVR4hclJYAAAAAAAAAAABjARQnAQ',
        },
        titleWrapper: {
          className: 'teams3-textWrapper',
          children: [
            { name: 'title', className: 'teams3-title', children: '叶秀英' },
            {
              name: 'content',
              className: 'teams3-job',
              children: '公司+职位 信息暂缺',
            },
            {
              name: 'content1',
              className: 'teams3-content',
              children: 'AntV 是蚂蚁金服全新一代数据可视化解决方案。',
            },
          ],
        },
      },
      {
        name: 'block6',
        className: 'block',
        md: 8,
        xs: 24,
        image: {
          name: 'image',
          className: 'teams3-image',
          children:
            'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*--rVR4hclJYAAAAAAAAAAABjARQnAQ',
        },
        titleWrapper: {
          className: 'teams3-textWrapper',
          children: [
            { name: 'title', className: 'teams3-title', children: '叶秀英' },
            {
              name: 'content',
              className: 'teams3-job',
              children: '公司+职位 信息暂缺',
            },
            {
              name: 'content1',
              className: 'teams3-content',
              children: 'AntV 是蚂蚁金服全新一代数据可视化解决方案。',
            },
          ],
        },
      },
      {
        name: 'block7',
        className: 'block',
        md: 8,
        xs: 24,
        image: {
          name: 'image',
          className: 'teams3-image',
          children:
            'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*njqxS5Ky7CQAAAAAAAAAAABjARQnAQ',
        },
        titleWrapper: {
          className: 'teams3-textWrapper',
          children: [
            { name: 'title', className: 'teams3-title', children: '韩勇' },
            {
              name: 'content',
              className: 'teams3-job',
              children: '公司+职位 信息暂缺',
            },
            {
              name: 'content1',
              className: 'teams3-content',
              children: '语雀是一款优雅高效的在线文档编辑与协同工具。',
            },
          ],
        },
      },
      {
        name: 'block8',
        className: 'block',
        md: 8,
        xs: 24,
        image: {
          name: 'image',
          className: 'teams3-image',
          children:
            'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*--rVR4hclJYAAAAAAAAAAABjARQnAQ',
        },
        titleWrapper: {
          className: 'teams3-textWrapper',
          children: [
            { name: 'title', className: 'teams3-title', children: '叶秀英' },
            {
              name: 'content',
              className: 'teams3-job',
              children: '公司+职位 信息暂缺',
            },
            {
              name: 'content1',
              className: 'teams3-content',
              children: 'AntV 是蚂蚁金服全新一代数据可视化解决方案。',
            },
          ],
        },
      },
    ],
  },
};
storiesOf('Teams|Teams3', module)
  .add('Web', () => <Teams3 dataSource={Teams30DataSource} isMobile={false} />)
  .add('H5', () => <Teams3 dataSource={Teams30DataSource} isMobile={true} />)
