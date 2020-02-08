import React from 'react';
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions';

import Footer0 from './index'
// import { Button } from 'antd'

export const Footer00DataSource = {
  wrapper: { className: 'home-page-wrapper footer0-wrapper' },
  OverPack: { className: 'home-page footer0', playScale: 0.05 },
  copyright: {
    className: 'copyright',
    children: (
      <p>
        <span>
          ©2018 <a href="https://motion.ant.design">Ant Motion</a> All Rights
          Reserved
        </span>
      </p>
    ),
  },
};
storiesOf('Footer|Footer0', module)
  .add('Web', () => <Footer0 dataSource={Footer00DataSource} isMobile={false} />)
  .add('H5', () => <Footer0 dataSource={Footer00DataSource} isMobile={true} />)
