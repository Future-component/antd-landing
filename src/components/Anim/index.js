import React, { PureComponent } from 'react';
import { Row, Col } from 'antd'
import Icon from 'antd/lib/icon';
import Menu from 'antd/lib/menu';

import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class QueueAnimComponent extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      items: [{
        children: '依次进入1',
        key: 1,
      }, {
        children: '依次进入2',
        key: 2,
      }, {
        children: '依次进入3',
        key: 3,
      }, {
        children: '依次进入4',
        key: 4,
      }, {
        children: '依次进入5',
        key: 5,
      }, {
        children: '依次进入6',
        key: 6,
      }],
    }
  }

  removeAll = () => {
    this.setState({
      items: []
    })
  }

  render() {
    return (<div>
      <h1>依次移入animating-class</h1>
      <Row>
        <QueueAnim type="right">
          {
            this.state.items.map(item => (<Col sm={4} key={item.key}>
              {item.children}
            </Col>))
          }
        </QueueAnim>
        <button onClick={this.removeAll}>移出所有</button>
      </Row>
      <h1>appear</h1>
      <QueueAnim appear={false}>
        <div key="1">依次进入</div>
        <div key="2">依次进入</div>
        <div key="3">依次进入</div>
        <div key="4">依次进入</div>
        <div key="5">依次进入</div>
      </QueueAnim>
      <h1>Component</h1>
      <QueueAnim
        component={Menu}
        style={{ width: 240, margin: 20 }}
        componentProps={{ mode: 'vertical' }}
        type="left"
      >
        <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
          <MenuItemGroup title="Item 1">
            <Menu.Item key="1">Option 1</Menu.Item>
            <Menu.Item key="2">Option 2</Menu.Item>
          </MenuItemGroup>
          <MenuItemGroup title="Iteom 2">
            <Menu.Item key="3">Option 3</Menu.Item>
            <Menu.Item key="4">Option 4</Menu.Item>
          </MenuItemGroup>
        </SubMenu>
        <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Navigation Two</span></span>}>
          <Menu.Item key="5">Option 5</Menu.Item>
          <Menu.Item key="6">Option 6</Menu.Item>
          <SubMenu key="sub3" title="Submenu">
            <Menu.Item key="7">Option 7</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item>
          </SubMenu>
        </SubMenu>
        <SubMenu key="sub4" title={<span><icon type="setting" /><span>Navigation Three</span></span>}>
          <Menu.Item key="9">Option 9</Menu.Item>
          <Menu.Item key="10">Option 10</Menu.Item>
          <Menu.Item key="11">Option 11</Menu.Item>
          <Menu.Item key="12">Option 12</Menu.Item>
        </SubMenu>
      </QueueAnim>
      <h1>Config</h1>
      <QueueAnim interval={100} delay={1000} duration={1000}>
        <div key="1">依次进入</div>
        <div key="2">依次进入</div>
        <div key="3">依次进入</div>
        <div key="4">依次进入</div>
        <div key="5">依次进入</div>
      </QueueAnim>
      <h1>custom-ease</h1>
      <div style={{ height: 500 }}>
        <QueueAnim ease={[[0.175, 0.885, 0.32, 1.275]]}>
          <div key="1">div 1</div>
          <div key="2">div 1</div>
          <div key="3">div 1</div>
          <div key="4">div 1</div>
          <div key="5">div 1</div>
        </QueueAnim>
        <br />
        <QueueAnim ease={[[0.42, 0, 0.58, 1], [0.42, 0, 0.58, 1]]}>
          <div key="1">div 2</div>
          <div key="2">div 2</div>
          <div key="3">div 2</div>
          <div key="4">div 2</div>
          <div key="5">div 2</div>
        </QueueAnim>
      </div>
      <h1>Custom</h1>
      <QueueAnim animConfig={{ translateX: [100, 0] }}>
        <div key="1">依次进入</div>
        <div key="2">依次进入</div>
        <div key="3">依次进入</div>
        <div key="4">依次进入</div>
        <div key="5">依次进入</div>
      </QueueAnim>
      <h1>nested嵌套</h1>
      <QueueAnim>
        <div key="1">依次进入</div>
        <div key="2">依次进入</div>
        <div key="3">依次进入</div>
        <div key="4">依次进入</div>
        <div key="5">依次进入</div>
        <QueueAnim key="6" style={{ backgroundColor: 'red' }} delay={1000}>
          <div key="7">依次进入</div>
          <div key="8">依次进入</div>
          <div key="9">依次进入</div>
          <QueueAnim key="10" style={{ backgroundColor: 'yellow' }}>
            <div key="11">依次进入</div>
            <div key="12">依次进入</div>
            <div key="13">依次进入</div>
          </QueueAnim>
        </QueueAnim>
      </QueueAnim>
    </div>)
  }
}

export default QueueAnimComponent