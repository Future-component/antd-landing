import React from 'react';
import { findDOMNode } from 'react-dom';
import TweenOne from 'rc-tween-one';
import { Menu, Icon } from 'antd';
import { Link, withRouter } from 'history'

const { Item, SubMenu } = Menu;

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneOpen: false,
      menuHeight: 0,
    };
  }

  phoneClick = () => {
    const menu = findDOMNode(this.menu);
    const phoneOpen = !this.state.phoneOpen;
    this.setState({
      phoneOpen,
      menuHeight: phoneOpen ? menu.scrollHeight : 0,
    });
  };

  render() {
    const { ...props } = this.props;
    const { dataSource, isMobile } = props;
    delete props.dataSource;
    delete props.isMobile;
    const { menuHeight, phoneOpen } = this.state;
    const navData = dataSource.Menu.children;
    const navAry = []
    const navChildren = Object.keys(navData).map((key, i) => {
      navAry.push(navData[key].a.link)
      return (<Item {...navData[key]} key={i.toString()} active>
        {
          navData[key].a.link ? <Link
            {...navData[key].a}
            to={{
              pathname: navData[key].a.link,
              state: {
                breadcrumb: [
                  { name: '首页', path: '/' },
                  { name: navData[key].a.children }
                ],
              }
            }}
            target={navData[key].a.blank && '_blank'}
          >
            {navData[key].a.children}
          </Link> : <a
            {...navData[key].a}
            href={navData[key].a.href}
            target={navData[key].a.blank && '_blank'}
          >
            {navData[key].a.children}
          </a>
        }
      </Item>)
    });

    // user 涉及到数据，请自行替换。
    const userTitle = (
      <div {...dataSource.user}>
        <span className="img" {...dataSource.user.img}>
          <img
            src="https://zos.alipayobjects.com/rmsportal/iXsgowFDTJtGpZM.png"
            width="100%"
            height="100%"
            alt="img"
          />
        </span>
        <span>用户名</span>
      </div>
    );
    // navChildren.push(
    //   // <Item {...dataSource.help} key="help">
    //   //   <Icon type="question-circle-o" />
    //   //   <span>{dataSource.help.children}</span>
    //   // </Item>,
    //   <SubMenu className="user" title={userTitle} key="user">
    //     <Item key="a">用户中心</Item>
    //     <Item key="b">修改密码</Item>
    //     <Item key="c">登出</Item>
    //   </SubMenu>
    // );
    const navIndex = navAry.indexOf(this.props.location.pathname)

    return (
      <TweenOne
        component="header"
        animation={{ opacity: 0, type: 'from' }}
        {...dataSource.wrapper}
        {...props}
      >
        <div
          {...dataSource.page}
          className={`${dataSource.page.className}${phoneOpen ? ' open' : ''}`}
        >
          <TweenOne
            animation={{
              x: -30,
              delay: 100,
              type: 'from',
              ease: 'easeOutQuad',
            }}
            {...dataSource.logo}
          > 
            <a href="https://www..com">
              <img width="100%" src={dataSource.logo.children} alt="img" />
            </a>
          </TweenOne>
          {isMobile && (
            <div
              {...dataSource.mobileMenu}
              onClick={() => {
                this.phoneClick();
              }}
            >
              <em />
              <em />
              <em />
            </div>
          )}
          <TweenOne
            {...dataSource.Menu}
            animation={{ x: 30, type: 'from', ease: 'easeOutQuad' }}
            ref={(c) => {
              this.menu = c;
            }}
            style={isMobile ? { height: menuHeight } : null}
          >
            <Menu
              mode={isMobile ? 'inline' : 'horizontal'}
              defaultSelectedKeys={[`${navIndex}`]}
              theme={isMobile ? 'dark' : 'default'}
            >
              {navChildren}
            </Menu>
          </TweenOne>
        </div>
      </TweenOne>
    );
  }
}

export default withRouter(Header);
