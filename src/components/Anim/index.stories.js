import React from 'react';
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions';

import Queue from './index'
import Tween from './tween'
// import { Button } from 'antd'

const queueData = {}

storiesOf('Anim|Queue', module)
  .add('Web', () => <Queue dataSource={queueData} isMobile={false} />)
  .add('H5', () => <Queue dataSource={queueData} isMobile={true} />)

storiesOf('Anim|Tween', module)
  .add('Web', () => <Tween dataSource={queueData} isMobile={false} />)
  .add('H5', () => <Tween dataSource={queueData} isMobile={true} />)
