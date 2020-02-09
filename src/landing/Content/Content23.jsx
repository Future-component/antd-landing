import React from 'react';
import QueueAnim from 'rc-queue-anim';
import classNames from 'classnames';
import TweenOne from 'rc-tween-one';
import { Row, Col } from 'antd';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import { imageCroppingUrl } from '../../utils/index'

const renderChildren = (item) => (<div {...item.children.wrapper}>
  <div className="new-image-wrapper">
    <span {...item.children.img} className={classNames({
      [`${item.children.img.className}`]: item.children.img.className,
      // 'filter-modal filter-modal-earlybird': true,
    })} style={{
      ...item.children.img.style,
      backgroundImage: item.children.img.style.backgroundImage ?
        `url(${imageCroppingUrl(item.children.img.style.backgroundImage.replace('url(', '').replace(')', ''), 'm_fill,h_270,w_276')})`
        : 'initial',
    }}></span>
    <div className="curl"></div>
  </div>
</div>)

function Content23(props) {
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

        <Row {...dataSource.block}>
          {
            dataSource.block.children.map((item) => {
              return (
                <Col key={item.name} {...item}>
                  {renderChildren(item)} 
                </Col>
              );
            })
          }
        </Row>

        <OverPack {...dataSource.OverPack} component={Row}>
          <TweenOne
            key="img"
            animation={animType.one}
            // resetStyle
            {...dataSource.imgWrapper}
            component={Col}
            componentProps={{
              md: dataSource.imgWrapper.md,
              xs: dataSource.imgWrapper.xs,
            }}
          >
            <div className="img-box">
              <img src={dataSource.imgWrapper.children} width="100%" alt="img" />
            </div>
          </TweenOne>

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
            <div key="p" {...dataSource.textWrapper}>
              {dataSource.textWrapper.children}
            </div>
          </QueueAnim>
        </OverPack>
      </div>
    </div>
  );
}

export default Content23;
