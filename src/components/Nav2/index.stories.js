import React from 'react';
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions';

import Nav2 from './index'
// import { Button } from 'antd'

export const Nav20DataSource = {
  isScrollLink: true,
  wrapper: { className: 'header2 home-page-wrapper' },
  page: { className: 'home-page' },
  logo: {
    className: 'header2-logo',
    children: 'https://os.alipayobjects.com/rmsportal/mlcYmsRilwraoAe.svg',
  },
  LinkMenu: {
    className: 'header2-menu',
    children: [
      {
        name: 'linkNav',
        to: '当前页面 ID 地址，参考如上',
        children: '导航名称',
        className: 'menu-item',
      },
    ],
  },
  mobileMenu: { className: 'header2-mobile-menu' },
};
storiesOf('Nav|Nav2', module)
  .add('Web', () => <Nav2 dataSource={Nav20DataSource} isMobile={false} />)
  .add('H5', () => <Nav2 dataSource={Nav20DataSource} isMobile={true} />)
