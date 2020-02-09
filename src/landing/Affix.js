import React from 'react'
import { Affix, BackTop } from 'antd'
import Link from '../Link'

export default (props) => {
  return props.isMobile ? null : (<Affix
    offsetTop={200}
    style={{ width: '64px' }}
    className="affix-module"
  >
    {
      queryString().token && <div className="affix-item">
        <Link to={`/article/create?${objTranslateUrl(queryString())}`}>
          <img src={img5} width="24" alt="免费领取体验课" />
          添加文章 
        </Link>
      </div>  
    }
    <div className="affix-item affix-item-hotline">
      <img src={img1} alt="咨询热线" />
      咨询热线
      <div className="ant-tooltip ant-tooltip-placement-left">
        <div class="ant-tooltip-content">
          <div class="ant-tooltip-arrow"></div>
          <div class="ant-tooltip-inner" role="tooltip">
            课程报名：400-606-9595<br />授权合作：400-893-0918
          </div>
        </div>
      </div>
    </div>

    <div className="affix-item">
      <Link to="/audition">
        <img src={img2} alt="免费领取体验课" />
        免费试听
      </Link>
    </div> 
    
    <div className="affix-item">
      <Link to="/joinin">
        <img src={img3} alt="加盟留言" />
        合作留言
      </Link>
    </div>

    <div className="affix-item affix-item-wx">
      <img src={img4} alt="微信公众号" />
      公众号
      <div className="ant-tooltip ant-tooltip-placement-left">
        <div class="ant-tooltip-content">
          <div class="ant-tooltip-arrow"></div>
          <div class="ant-tooltip-inner" role="tooltip">
            <div>
              <img src={wxImg} alt="" />
              <b>扫一扫</b>
              关注官方微信
            </div>
          </div>
        </div>
      </div>
    </div>

    <BackTop />
  </Affix>)
}
