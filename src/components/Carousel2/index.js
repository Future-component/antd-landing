import React, { PureComponent } from 'react'
import { Carousel, Row, Col } from 'antd'
import { imageCroppingUrl } from '../../utils/index'

export default class index extends PureComponent {

  getBlockChildren = (isMobile, { data, item, ...rest }) => {
    const itemStyle = item
    if (!isMobile) {
      const newData = []
      let tmp = []
      data.forEach((item) => {
        if (tmp.length >= 3) {
          newData.push(tmp)
          tmp = []
        } else {
          tmp.push(item)
        }
      })
      return newData.map((dataItem, dataIndex) => (<Row {...rest} key={`${dataIndex}`}>
        {
          dataItem.map((subItem, subI) => {
            const children = itemStyle.children
            return (<Col key={subI.toString()} className={itemStyle.className} md={itemStyle.md} xs={itemStyle.xs}>
              <div className={children.wrapper.className}>
                <span style={{ backgroundImage: `url(${imageCroppingUrl(subItem.img, 'm_lfit,h_130,w_160')})` }}></span>
                <p>{subItem.text}</p>
              </div>
            </Col>)
          })
        }
      </Row>))
    } else {
      return data.map((subItem, subI) => {
        const children = itemStyle.children
        return (<Row {...rest}>
          <Col key={subI.toString()} className={itemStyle.className} md={itemStyle.md} xs={itemStyle.xs}>
            <div className={children.wrapper.className}>
              <span style={{ backgroundImage: `url(${subItem.img})` }}></span>
              <p>{subItem.text}</p>
            </div>
          </Col>
        </Row>)
      })
    }
  }

  render() {
    const { ...props } = this.props
    const { dataSource } = props;
    const listChildren = this.getBlockChildren(props.isMobile, dataSource.block)
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
          <Row>
            <Col sm={24} md={11}>
              <div className="col-title">{dataSource.block.title}<span>{dataSource.block.description}</span></div>
              <Carousel autoplay dots>{listChildren}</Carousel>
            </Col>
            <Col sm={24} md={11} offset={2}>
              <div className="col-title">{dataSource.block1.title}</div>
              <Row
                className={dataSource.block1.className}
                gutter={dataSource.block1.gutter}
              >
                {
                  dataSource.block1.data.map((item, index) => (<Col
                    key={index}
                    { ...dataSource.block1.item }
                  >
                    <div className="cooperation-img" style={{ backgroundImage: `url(${imageCroppingUrl(item, 'm_mfit,h_144,w_56')})` }} />
                  </Col>))
                }
              </Row>
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}
