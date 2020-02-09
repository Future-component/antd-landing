import React from 'react'
import { Affix, BackTop } from 'antd'
import Link from '../Link'

export default (props) => {
  return props.isMobile ? null : (<Affix
    offsetTop={props.dataSource.wrapper.offsetTop}
    style={props.dataSource.wrapper.style}
    className={props.dataSource.wrapper.className}
  >
    {
      props.dataSource.content.map((item, index) => (<div key={index} className={item.className}>
        <Link to={item.children.link}>
          {
            item.children.tooltip && <div className="ant-tooltip ant-tooltip-placement-left">
              <div class="ant-tooltip-content">
                <div class="ant-tooltip-arrow"></div>
                <div class="ant-tooltip-inner" role="tooltip">
                  {item.children.tooltip}
                </div>
              </div>
            </div>
          }
          <div className="affix-sub-item">
            <img src={item.children.img} width="24" alt="" />
            {item.children.text}
          </div>
        </Link>
      </div>))
    }
    <BackTop />
  </Affix>)
}
