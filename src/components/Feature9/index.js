import React from 'react';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import QueueAnim from 'rc-queue-anim';
import { Row, Col } from 'antd';
import TweenOne from 'rc-tween-one';
import Children from 'rc-tween-one/lib/plugin/ChildrenPlugin';

TweenOne.plugins.push(Children);

class Feature9 extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  renderChildren = (children) => children.map(($item, i) => {
    const { number, children: child, ...childProps } = $item;
    const numberChild = number.children.replace(/[^0-9.-]/g, '');
    const { unit, toText, ...numberProps } = number;
    return (
      <Col {...childProps} key={i.toString()}>
        <TweenOne
          {...numberProps}
          animation={{
            Children: {
              value: parseFloat(numberChild),
              floatLength:
                parseFloat(numberChild) -
                  Math.floor(parseFloat(numberChild)) >
                0
                  ? 2
                  : 0,
              formatMoney: true,
            },
            duration: 1000,
            delay: 300,
            ease: 'easeInOutCirc',
          }}
          component="span"
        >
          0
        </TweenOne>
        {unit && <span {...unit}>{unit.children}</span>}
        <span {...child}>{child.children}</span>
      </Col>
    );
  })

  render() {
    const { dataSource, isMobile, ...props } = this.props;
    console.log(dataSource.Content)
    return (
      <div {...props} {...dataSource.wrapper}>
        <div>
          <OverPack {...dataSource.OverPack}>
            <QueueAnim
              type="bottom"
              component={Row}
              className={dataSource.Content.className}
            >
              {this.renderChildren(dataSource.Content.children)}
            </QueueAnim>
          </OverPack>
        </div>
      </div>
    );
  }
}
export default Feature9;
