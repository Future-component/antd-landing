import React, { PureComponent } from 'react'
import { Carousel, Row, Col } from 'antd'
import Link from '../Link'
import { imageCroppingUrl } from '../../utils/index'

export default class index extends PureComponent {
  renderLinkContent = (children) => (
    children.link ?
    <Link to={children.link}>
      <div {...children.wrapper}>
        <span style={{
          ...children.img.style,
          backgroundImage: children.img.style.backgroundImage ?
            `url(${imageCroppingUrl(children.img.style.backgroundImage.replace('url(', '').replace(')', ''), 'm_fill,h_426,w_672')})`
            : 'initial',
        }}></span>
        <p {...children.content}>{children.content.children}</p>
      </div>
    </Link>
    :
    <div {...children.wrapper}>
      <span style={{
        ...children.img.style,
        backgroundImage: children.img.style.backgroundImage ?
          `url(${imageCroppingUrl(children.img.style.backgroundImage.replace('url(', '').replace(')', ''), 'm_fill,h_426,w_672')})`
          : 'initial',
      }}></span>
      <p {...children.content}>{children.content.children}</p>
    </div>
  )

  getBlockChildren = data => data.map((item, i) => ((<Row {...item} key={i.toString()}>
    {
      item.children.map((subItem, subI) => {
        const children = subItem.children
        return (<Col key={subI.toString()} {...subItem}>
          {this.renderLinkContent(children)}
        </Col>)
      })
    }
  </Row>)))

  getBlockChildrenMoile = data => {
    let wrapper = ''
    let newData = []
    data.forEach((item) => {
      wrapper = item
      newData = newData.concat(item.children)
    })
    return (newData.map((subItem, subI) => {
      const children = subItem.children
      return (<div {...wrapper}>
        <div {...subItem}>
          {this.renderLinkContent(children)}
        </div>
      </div>)
    }) )
  }

  render() {
    const { ...props } = this.props
    const { dataSource } = props;
    const listChildren = !props.isMobile ? this.getBlockChildren(dataSource.block.children) :
      this.getBlockChildrenMoile(dataSource.block.children)
    delete props.dataSource;
    delete props.isMobile;
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
          <Carousel>{listChildren}</Carousel>
        </div>
      </div>
    )
  }
}
