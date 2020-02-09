import React from 'react';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

function Content24(props) {
  const { ...tagProps } = props;
  const { dataSource, isMobile } = tagProps;
  delete tagProps.dataSource;
  delete tagProps.isMobile;
  const animation = {
    y: '+=30',
    opacity: 0,
    type: 'from',
    ease: 'easeOutQuad',
  };
  return (
    <div {...tagProps} {...dataSource.wrapper}>
      <div {...dataSource.page}>
        <div key="title" {...dataSource.titleWrapper}>
          {dataSource.titleWrapper.children.map((item, i) => React.createElement(
            item.name.indexOf('title') === 0 ? 'h1' : 'div',
            { key: i.toString(), ...item },
            typeof item.children === 'string' &&
            item.children.match(/\.(svg|gif|jpg|jpeg|png|JPG|PNG|GIF|JPEG)$/)
              ? React.createElement('img', { src: item.children, alt: 'img' })
              : item.children
          )
          )}
        </div>
        <OverPack {...dataSource.OverPack}>
          <TweenOne
            key="video"
            animation={{ ...animation, delay: 300 }}
            {...dataSource.video}
          >
            <div className={dataSource.textContent.className}>
              {dataSource.textContent.children}
            </div>
          </TweenOne>
        </OverPack>
      </div>
    </div>
  );
}

export default Content24;
