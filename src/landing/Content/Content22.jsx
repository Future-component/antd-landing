import React from 'react';
import QueueAnim from 'rc-queue-anim';
import { Row, Col } from 'antd';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

class Content22 extends React.PureComponent {
  getBlockChildren = data => data.map((item, i) => {
    const children = item.children;
    return (
      <Row>
        <Col md={item.md} xs={item.md}>
        <div key={i.toString()} className={item.className}>
          <div {...children.icon}>
            <img src={children.icon.children} alt=""/>
          </div>

          <div className="right-text">
            <div {...children.title}>{children.title.children}</div>
            <div {...children.content}>{children.content.children}</div>
          </div>
        </div>
        </Col>
      </Row>
    );
  });

  render() {
    const { ...props } = this.props;
    const { dataSource } = props;
    delete props.dataSource;
    delete props.isMobile;
    const listChildren = this.getBlockChildren(dataSource.block.children);
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
                  height: '100%',
                  alt: 'img',
                })
                : item.children
            )
            )}
          </div>
          <OverPack {...dataSource.OverPack}>
            <QueueAnim
              type="bottom"
              key="block"
              // leaveReverse
              {...dataSource.block}
              component={Row}
            >
              {listChildren}
              <div className={dataSource.picture.className}>
                <img src={dataSource.picture.img} alt=""/>
              </div>
            </QueueAnim>
          </OverPack>
        </div>
      </div>
    );
  }
}

export default Content22;
