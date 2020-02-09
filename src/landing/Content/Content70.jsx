import React from 'react';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import { Tabs, Icon, Row, Col } from 'antd';

const TabPane = Tabs.TabPane;

class Content7 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 1,
    };
  }

  onChange = (key) => {
    this.setState({ current: parseFloat(key) });
  };

  getChildrenToRender = data => data.map((item) => {
    return (
      <Col key={item.name} {...item}>
        <div {...item.children.wrapper}>
          <span {...item.children.img}>
            <img src={item.children.img.children} height="100%" alt="img" />
          </span>
          <p {...item.children.content}>{item.children.content.children}</p>
        </div>
      </Col>
    );
  });

  getBlockChildren = (item, i) => {
    const { tag, content } = item;
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
        <TweenOne.TweenOneGroup
          enter={{
            y: 30,
            delay: 300,
            opacity: 0,
            type: 'from',
            ease: 'easeOutQuad',
          }}
          leave={null}
          component=""
        >
          {this.state.current === i + 1 && (
            <Row
              key="content"
              className={content.className}
              gutter={content.gutter}
            >
              {this.getChildrenToRender(content.children)} 
            </Row>
          )}
        </TweenOne.TweenOneGroup>
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
              typeof item.children === 'string'
                ? item.children : item.children[this.state.current - 1]
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

export default Content7;
