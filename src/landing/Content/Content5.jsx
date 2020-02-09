import React from 'react';
import { Row, Col } from 'antd';
import classNames from 'classnames';
import { TweenOneGroup } from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import Link from '../Link'
import { imageCroppingUrl } from '../../utils/index'

class Content5 extends React.PureComponent {
  renderChildren = (item) => {
    const backgroundImage = item.children.img.style.backgroundImage ?
      `url(${imageCroppingUrl(item.children.img.style.backgroundImage.replace('url(', '').replace(')', ''), 'm_fill,h_180,w_320')})`
      : 'initial'
    return (<div {...item.children.wrapper}>
      <div className="new-image-wrapper">
        <span {...item.children.img} className={classNames({
          [`${item.children.img.className}`]: item.children.img.className,
          // 'filter-modal filter-modal-earlybird': true,
        })} style={{
          ...item.children.img.style,
          backgroundImage,
        }}></span>
        <div className="curl"></div>
      </div>
      {
        item.children.descTitle && <div className="desc-title">{item.children.descTitle}</div>
      }
      <p {...item.children.content}>{item.children.content.children}</p>
    </div>)
  }

  getChildrenToRender = data => data.map((item) => {
    return (
      <Col key={item.name} {...item}>
        {
          item.children.link ?
          <Link to={item.children.link}>
            {this.renderChildren(item)} 
          </Link>
          : this.renderChildren(item)
        }

      </Col>
    );
  });

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

export default Content5;
