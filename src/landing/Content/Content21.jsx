import React from 'react';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import { Row, Col } from 'antd';
import Link from '../Link'
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

function Content21(props) {
  const { ...tagProps } = props;
  const { dataSource, isMobile } = tagProps;
  delete tagProps.dataSource;
  delete tagProps.isMobile;
  const animType = {
    queue: isMobile ? 'bottom' : 'left',
    one: isMobile
      ? {
        scaleY: '+=0.3',
        opacity: 0,
        type: 'from',
        ease: 'easeOutQuad',
      }
      : {
        x: '+=30',
        opacity: 0,
        type: 'from',
        ease: 'easeOutQuad',
      },
  };
  const img = (
    <TweenOne
      key="img"
      animation={animType.one}
      resetStyle
      {...dataSource.imgWrapper}
      component={Col}
      componentProps={{
        md: dataSource.imgWrapper.md,
        xs: dataSource.imgWrapper.xs,
      }}
    >
      <span>
        <img src={dataSource.imgWrapper.children} width="100%" alt="img" />
      </span>
    </TweenOne>
  );
  return (
    <div {...tagProps} {...dataSource.wrapper}>
      <div {...dataSource.page}>
        <div {...dataSource.titleWrapper}>
          {dataSource.titleWrapper.children.map((item, i) => React.createElement(
            item.name.indexOf('title') === 0 ? 'h1' : 'div',
            { key: i.toString(), ...item },
            typeof item.children === 'string' &&
            item.children.match(
              /\.(svg|gif|jpg|jpeg|png|JPG|PNG|GIF|JPEG)$/
            )
              ? React.createElement('img', {
                src: item.children,
                height: '100%',
                alt: 'img',
              })
              : item.children
          )
          )}
        </div>

        <OverPack {...dataSource.OverPack} component={Row}>
          {isMobile && img}
          <QueueAnim
            type={animType.queue}
            key="text"
            // leaveReverse
            ease={['easeOutCubic', 'easeInCubic']}
            {...dataSource.textWrapper}
            component={Col}
            componentProps={{
              md: dataSource.textWrapper.md,
              xs: dataSource.textWrapper.xs,
            }}
          >
            <div {...dataSource.content.block1}>
              <p>{dataSource.content.block1.title}</p>
              {
                dataSource.content.block1.children.map(item => (
                  <div className='icon'>
                    <span className="icon-box"><img src={item.icon} alt="" /></span>
                    <span>{item.text}</span>
                  </div>
                ))
              }
            </div>
            <div {...dataSource.content.block2}>
              <p>{dataSource.content.block2.title}</p>
              {
                dataSource.content.block2.children.map(item => (
                  <div className='icon'>
                    <span className="icon-box"><img src={item.icon} alt="" /></span>
                    <span>{item.text}</span>
                  </div>
                ))
              }
            </div>
            {/* <div {...dataSource.content.block3}>
              <p>{dataSource.content.block3.title}</p>
              {
                dataSource.content.block3.children.map((item, index) => (
                  <div className='step'>
                    <div className="num-box" style={{ color: index === 0 ? 'red': '#000' }}>{item.topText}</div>
                    <div className="text">{item.text}</div>
                  </div>
                ))
              }
            </div>
            <div {...dataSource.content.block4}>
              <Link className="btn" to="/teacher">{dataSource.content.block4.children}</Link>
            </div> */}
          </QueueAnim>
          {!isMobile && img}
        </OverPack>
      </div>
    </div>
  );
}

export default Content21;
