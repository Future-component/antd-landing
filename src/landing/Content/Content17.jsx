import React from 'react';
import QueueAnim from 'rc-queue-anim';
import { Row, Col } from 'antd';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

function Content17(props) {
  const { ...tagProps } = props;
  const { dataSource, isMobile } = tagProps;
  delete tagProps.dataSource;
  delete tagProps.isMobile;
  const animType = {
    queue: isMobile ? 'bottom' : 'right',
    one: isMobile
      ? {
        scaleY: '+=0.3',
        opacity: 0,
        type: 'from',
        ease: 'easeOutQuad',
      }
      : {
        x: '-=30',
        opacity: 0,
        type: 'from',
        ease: 'easeOutQuad',
      },
  };
  return (
    <div {...tagProps} {...dataSource.wrapper}>
      <OverPack {...dataSource.OverPack} component={Row}>
        <QueueAnim
          key="text"
          type={animType.queue}
          // leaveReverse
          ease={[ 'easeInQuad', 'easeOutQuad']}
          {...dataSource.textWrapper}
          component={Col}
          componentProps={{
            md: dataSource.textWrapper.md,
            xs: dataSource.textWrapper.xs,
          }}
        >
          <div className="content-box">
            <h2 key="h1" {...dataSource.leftText.title}>
              {dataSource.leftText.title.children}
            </h2>
            <div key="p" {...dataSource.leftText.content}>
              {dataSource.leftText.content.children}
            </div>
          </div>
        </QueueAnim>
        <QueueAnim
          key="text"
          type={animType.queue}
          // leaveReverse
          ease={['easeOutQuad', 'easeInQuad']}
          {...dataSource.textWrapper}
          component={Col}
          componentProps={{
            md: dataSource.textWrapper.md,
            xs: dataSource.textWrapper.xs,
          }}
        >
          <div className="content-box">
            <h2 key="h1" {...dataSource.rightText.title}>
              {dataSource.rightText.title.children}
            </h2>
            <div key="p" {...dataSource.rightText.content}>
              {dataSource.rightText.content.children}
            </div>
          </div>
        </QueueAnim>
      </OverPack>
    </div>
  );
}

export default Content17;
