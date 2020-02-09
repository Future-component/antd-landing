import React from 'react';
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions';

import Affix0 from './index'
// import { Button } from 'antd'

export const Affix00Data = {
  wrapper: { className: 'affix-module', offsetTop: 100, style: {width: '64px'} },
  content: [{
    className: 'affix-item',
    children: {
      img: 'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*njqxS5Ky7CQAAAAAAAAAAABjARQnAQ',
      text: '添加内容',
      link: 'to',
    },
  }, {
    className: 'affix-item affix-item-hotline',
    children: {
      img: 'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*njqxS5Ky7CQAAAAAAAAAAABjARQnAQ',
      text: '热线电话',
      tooltip: <p>联系电话：1000000</p>
    },
  }, {
    className: 'affix-item',
    children: {
      img: 'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*njqxS5Ky7CQAAAAAAAAAAABjARQnAQ',
      text: '合作留言',
      link: 'to',
    },
  }, {
    className: 'affix-item affix-item-wx',
    children: {
      img: 'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*njqxS5Ky7CQAAAAAAAAAAABjARQnAQ',
      text: '公众号',
      tooltip: <div>
        <img src="https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*njqxS5Ky7CQAAAAAAAAAAABjARQnAQ" alt="" />
        <b>扫一扫</b>
        关注官方微信
      </div>
    },
  }],
};

storiesOf('Affix|Affix0', module)
  .add('Web', () => <Affix0 dataSource={Affix00Data} isMobile={false} />)
  .add('H5', () => <Affix0 dataSource={Affix00Data} isMobile={true} />)
