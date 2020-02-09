import React from 'react';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import { Tabs, Icon, Row, Col } from 'antd';
import VideoPlay from 'react-sublime-video';

const TabPane = Tabs.TabPane;

class Content15 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 1,
    };
  }

  onChange = (key) => {
    this.setState({ current: parseFloat(key) });
  };

  getFirstContent = (item) => {
    const { content } = item;
    const { text, img } = content;
    const textChildren = text.children;
    return (
      <div key="content" className={content.className}>
        <div className={img.className}>
          <img src={img.children} width="100%" alt="img" />
        </div>
        <div className={text.className}>
            {textChildren}
        </div>
      </div>
    )
  }

  getSecondContent = (data) => data.content.children.map((item, index) => {
    const { text, video, img } = item;
    const textChildren = text.children;
    let type = 'form'

    if (video) {
      const videoChildren = video.children.video || '';
      const videoNameArray = videoChildren.split('.');
      type = videoNameArray[videoNameArray.length - 1];
    }

    return (
      <Row
        key={`content${index}`}
        className="content15-content"
      >
        {
          video && <Col className={video.className} xs={video.xs} md={video.md}>
            <VideoPlay
              loop
              height="100%"
              poster={video.children.image}
            >
              <source src={video.children.video} type={`video/${type}`} />
            </VideoPlay>
        </Col>
        }
        {
          img && <Col className={img.className} xs={img.xs} md={img.md}>
            <img src={img.children.image} alt="" />
        </Col>
        }
        <Col className={text.className} xs={text.xs} md={text.md}>
          {textChildren}
        </Col>
      </Row>
    )
  })

  getBlockChildren = (item, i) => {
    const { tag } = item;
    const { icon } = tag;
    const iconChildren = icon.children;
    const tagText = tag.text;

    return (
      <TabPane
        key={i + 1}
        tab={
          <div className={tag.className}>
            <Icon type={iconChildren} className={icon.className} />
            <div {...tagText}>{tagText.children}</div>
          </div>
        }
        className={item.className}
      >
        {
          this.state.current === 1 && this.state.current === i + 1 && this.getFirstContent(item)
        }
        {
          this.state.current === 2 && this.state.current === i + 1 && this.getSecondContent(item)
        }
        {
          this.state.current === 3 && this.state.current === i + 1 && this.getFirstContent(item)
        }
        {
          this.state.current === 4 && this.state.current === i + 1 && this.getSecondContent(item)
        }
      </TabPane>
    );
  };

  render() {
    const { ...props } = this.props;
    const { dataSource } = props;
    delete props.dataSource;
    delete props.isMobile;
    const tabsChildren = dataSource.block.children.map(this.getBlockChildren);


    return (
      <div {...props} {...dataSource.wrapper}>
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
                  alt: 'img',
                })
                : item.children
            )
            )}
          </div>

          <OverPack {...dataSource.OverPack}>
            <TweenOne.TweenOneGroup
              key="tabs"
              enter={{
                y: 30,
                opacity: 0,
                delay: 200,
                type: 'from',
              }}
              leave={{ y: 30, opacity: 0 }}
              {...dataSource.tabsWrapper}
            >
              <Tabs
                key="tabs"
                onChange={this.onChange}
                activeKey={`${this.state.current}`}
                {...dataSource.block}
              >
                {tabsChildren}
              </Tabs>
            </TweenOne.TweenOneGroup>
          </OverPack>
        </div>
      </div>
    );
  }
}

export default Content15;
