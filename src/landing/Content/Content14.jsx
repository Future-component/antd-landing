import React from 'react';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import QueueAnim from 'rc-queue-anim';
import Link from '../Link'
import { Carousel } from 'antd'

class Content14 extends React.PureComponent {
  renderLink = (item) => {
    if (item.link) {
      return (<Link to={item.link}>
        <div
          className="img-box"
          style={{
            backgroundImage: `url(${item.img})`
          }}
        >
        </div>
      </Link>)
    } else if (item.href) {
      return (<a href={item.href} target="_blank" without rel="noopener noreferrer">
        <div
          className="img-box"
          style={{
            backgroundImage: `url(${item.img})`
          }}
        ></div>
      </a>)
    }
    return (<div
      className="img-box"
      style={{
        backgroundImage: `url(${item.img})`
      }}
    ></div>)
  }

  render() {
    const { ...props } = this.props;
    const { dataSource } = props;
    delete props.dataSource;
    delete props.isMobile;

    return (
      <OverPack {...props} {...dataSource.OverPack}>
        <QueueAnim
          type="bottom"
          key="page"
          delay={[0, 100]}
        >
          {
            dataSource.titleWrapper.length > 1 ? <Carousel>
              {
                dataSource.titleWrapper.map((item, index) => (<div key={index}>
                  {this.renderLink(item)}
                </div>))
              }
            </Carousel> : this.renderLink(dataSource.titleWrapper[0])
          }
        </QueueAnim>
      </OverPack>
    );
  }
}

export default Content14;
