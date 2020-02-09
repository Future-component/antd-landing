import React from 'react';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import VideoPlay from 'react-sublime-video';

function Content4(props) {
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
  const videoChildren = dataSource.video.children.video || '';
  const content = dataSource.video.children.text
  const videoNameArray = videoChildren.split('.');
  const type = videoNameArray[videoNameArray.length - 1];
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
          {content}
        </div>
        <OverPack {...dataSource.OverPack}>
          <TweenOne
            key="video"
            animation={{ ...animation, delay: 300 }}
            {...dataSource.video}
          >
            {
              type ? <VideoPlay
                loop
                width="100%"
                poster={dataSource.video.children.image}
              >
                <source src={videoChildren} type={`video/${type}`} />
              </VideoPlay> : <img src={dataSource.video.children.image} alt="" />
            }
          </TweenOne>
        </OverPack>
      </div>
    </div>
  );
}

export default Content4;
