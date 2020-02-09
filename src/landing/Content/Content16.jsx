import React from 'react';
import { Tabs, Icon, Row, Col } from 'antd';

const TabPane = Tabs.TabPane;

class Content16 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 1,
    };
  }

  onChange = (key) => {
    this.setState({ current: parseFloat(key) });
  };

  getRowContent = (content) => {
    return content.children.map((item, index) => {
      const { text, img } = item;
      const textChildren = text.children;
      return (<div key={`item-${index}`}>
        <Row
          key={index}
          className={content.className}
          gutter={content.gutter}
        >
          <Col className={img.className} xs={img.xs} md={img.md}>
            <img src={img.children.image} height="100%" alt="img" />
          </Col>
          <Col className={text.className} xs={text.xs} md={text.md}>
            {textChildren}
          </Col>
        </Row>
      </div>)
    })
  }

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
        {this.state.current === i + 1 && this.getRowContent(content)}
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
          {/* <OverPack {...dataSource.OverPack}>
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
            
            </TweenOne.TweenOneGroup>
          </OverPack> */}
          <Tabs
            key="tabs"
            onChange={this.onChange}
            activeKey={`${this.state.current}`}
            {...dataSource.block}
          >
            {tabsChildren}
          </Tabs>
        </div>
      </div>
    );
  }
}

export default Content16;
