import React from 'react';
import { Row, Col } from 'antd';
import { TweenOneGroup } from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

class Content20 extends React.PureComponent {
  getChildrenToRender = data => {
    return <Row className="row-box">
      {
        data.map(item => {
          return <Col md={item.md} xs={item.xs} className="col-box">
            <div className="li-box">
              <span className="dot"></span>
              {item.children}
            </div>
          </Col>
        })
      }
    </Row>
  }
  render() {
    const { ...props } = this.props;
    const { dataSource } = props;
    delete props.dataSource;
    delete props.isMobile;
    const childrenToRender = this.getChildrenToRender(
      dataSource.block.children
    );
    return (
      <div {...props} {...dataSource.wrapper}>
        <div {...dataSource.page}>
          <div key="title" {...dataSource.titleWrapper}>
            {dataSource.titleWrapper.children.map((item, i) => React.createElement(
              item.name.indexOf('title') === 0 ? 'h1' : 'div',
              { key: i.toString(), ...item },
              typeof item.children === 'string' &&
              item.children
            )
            )}
          </div>
          <OverPack
            className={`content-template ${props.className}`}
            {...dataSource.OverPack}
          >
            <TweenOneGroup
              component={Row}
              key="ul"
              enter={{
                y: '+=30',
                opacity: 0,
                type: 'from',
                ease: 'easeInOutQuad',
              }}
              leave={{ y: '+=30', opacity: 0, ease: 'easeInOutQuad' }}
              {...dataSource.block}
            >
              {childrenToRender}
            </TweenOneGroup>
          </OverPack>
        </div>
      </div>
    );
  }
}

export default Content20;
