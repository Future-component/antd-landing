import React from 'react';
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions';

import Content13 from './index'
// import { Button } from 'antd'

export const Content130DataSource = {
  OverPack: {
    className: 'home-page-wrapper content13-wrapper',
    playScale: 0.3,
  },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'image',
        children:
          'https://gw.alipayobjects.com/zos/rmsportal/PiqyziYmvbgAudYfhuBr.svg',
        className: 'title-image',
      },
      { name: 'title', children: '丰富的特色展台', className: 'title-h1' },
      {
        name: 'content',
        children:
          '特色展台包括 Ant Design 、AntV、AntG、Egg 等明星产品，更有产品专家',
        className: 'title-content',
      },
      {
        name: 'content2',
        children: '现场问诊，为你答疑解难',
        className: 'title-content',
      },
    ],
  },
};
storiesOf('Content|Content13', module)
  .add('Web', () => <Content13 dataSource={Content130DataSource} isMobile={false} />)
  .add('H5', () => <Content13 dataSource={Content130DataSource} isMobile={true} />)
