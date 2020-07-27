import React, { PureComponent } from 'react';
import { Row, Col } from 'antd'

import QueueAnim from 'rc-queue-anim';
import Tween, { TweenOneGroup } from 'rc-tween-one';
import ScrollOverPack from 'rc-scroll-anim/lib/ScrollOverPack';

import BezierPlugin from './plugin/BezierPlugin'
import PathPlugin from './plugin/PathPlugin';
import SvgMorphPlugin from './plugin/SvgMorphPlugin';
import SvgDrawPlugin from './plugin/SvgDrawPlugin'

Tween.plugins.push(SvgDrawPlugin)
Tween.plugins.push(SvgMorphPlugin)
Tween.plugins.push(PathPlugin);

const dataStartArr = ['100%', '30 450', '50% 50%', '30% 400', '50 30%', 0];
let i = 0;

const p3 = `M50.952,85.619C31.729,84.841,23.557,73.62,24.095,42.952
    c0.381-21.714,6.667-33.714,30.286-34.476
    c36.572-1.18,59.81,77.714,102.667,76.381c30.108-0.937,34.268-32.381,34.095-41.714
    C190.762,22.571,180.493,6.786,159.524,6C113.81,4.286,98,87.524,50.952,85.619z`;

const p2 = "M0,0,L100, 0L100, 100L0, 100Z";

function Div({ show, children }) {
  return show ? <div>{children}</div> : null;
}

const p1 = 'M0,100 L25,100 C34,20 40,0 100,0';
const p = 'M0,100 C5,120 25,130 25,100 C30,60 40,75 58,90 C69,98.5 83,99.5 100,100';
const t = Tween.easing.path(p);
const t1 = Tween.easing.path(p1);
const anim = [
  {
    repeatDelay: 1000,
    duration: 1000,
    scaleX: 0,
    scaleY: 2,
    repeat: -1,
    yoyo: true,
    ease: t,
  },
  {
    repeatDelay: 1000,
    duration: 1000,
    y: 0,
    appearTo: 0,
    repeat: -1,
    yoyo: true,
    ease: t1,
  },
];

Tween.plugins.push(BezierPlugin);
class TweenAnimComponent extends PureComponent {
  constructor(props) {
    super(props)
    this.imgArray = [
      'https://os.alipayobjects.com/rmsportal/IhCNTqPpLeTNnwr.jpg',
      'https://os.alipayobjects.com/rmsportal/uaQVvDrCwryVlbb.jpg',
    ];
    this.state = {
      show: false,
      tweenData: { translateX: '100px', duration: 3000 },
      childTweenData: { translateY: 200, duration: 1000 },
      animation: {},
      children: [
        <QueueAnim
          style={{
            opacity: 1,
            backgroundColor: '#000fff',
            float: 'left',
            height: 200,
            width: 100,
          }}
          key="aa"
          delay={1000}
        >
          <div key="1">执行动效</div>
          <div key="2">执行动效</div>
        </QueueAnim>,
        <div key="a"
          style={{
            opacity: 1,
            backgroundColor: '#000',
            float: 'left',
            height: 200,
          }}
        >
          <div>执行动效</div>
        </div>,
      ],
      int: 0,
      moment: 2500, // 初始值
      tweenData: '50 30%',
      children1: [<div key="1">依次进入</div>, <div key="2">依次进入</div>],
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        children1: [<div key="1">121221</div>, <div key="2">1122121</div>],
      });
    }, 1000);
    setTimeout(() => {
      this.setState({
        moment: 200,
      });
    }, 1000);
    window.addEventListener('mousemove', this.mouseMove);
    setTimeout(() => {
      this.setState({
        show: true,
      });
    }, 1000);
    setTimeout(() => {
      this.setState({
        tweenData: { opacity: 0.5, marginTop: 100, duration: 1000 },
      });
    }, 1000);
    setTimeout(() => {
      this.setState({
        childTweenData: [
          { translateY: 100 },
          { rotateY: 180, duration: 1000 },
          { rotateY: 0, duration: 1000 },
          { delay: -800, translateY: 0 },
        ],
      });
    }, 2000);
  }

  onClick3 = () => {
    const tweenData = dataStartArr[i];
    this.setState({
      tweenData,
    });
    i++;
    i = i >= dataStartArr.length ? 0 : i;
  }

  onClick2 = () => {
    const tweenData = dataStartArr[i];
    this.setState({
      tweenData,
    });
    i++;
    i = i >= dataStartArr.length ? 0 : i;
  }

  onClick1 = () => {
    let int = this.state.int;
    int++;
    if (int >= this.imgArray.length) {
      int = 0;
    }
    this.setState({ int });
  }

  onClick = () => {
    const children = !this.state.children ? [
      (<QueueAnim
        style={{
          opacity: 1,
          backgroundColor: '#000fff',
          float: 'left',
          height: 200,
          width: 100,
        }}
        key="aa"
        delay={1000}
      >
        <div key="1">执行动效</div>
        <div key="2">执行动效</div>
      </QueueAnim>), (<div key="a"
        style={{
          opacity: 1,
          backgroundColor: '#000',
          float: 'left',
          height: 200,
        }}
      >
        <div>执行动效</div>
      </div>)] : null;
    this.setState({
      children,
    });
  }

  onEnd = (e) => {
    console.log(e);// eslint-disable-line no-console
  }

  enterType = (e) => {
    if (e.key === 'a') {
      return { x: 100, opacity: 0, type: 'from' };
    }
    return { y: 80, opacity: 0, type: 'from' };
  }

  mouseMove = (e) => {
    const x = e.clientX;
    this.setState({
      animation: { x, duration: 1000, ease: 'easeOutQuad' },
    });
  }

  onPlay = () => {
    this.setState({
      paused: false,
      reverse: false,
      moment: null,
    });
  }

  onPause = () => {
    this.setState({
      paused: true,
      moment: null,
    });
  }

  onReverse = () => {
    this.setState({
      reverse: true,
      reverseDelay: 0,
      paused: false,
      moment: null,
    });
  }

  onReverseDelay = () => {
    this.setState({
      reverse: true,
      reverseDelay: 1000,
      paused: false,
      moment: null,
    });
  }

  onRestart = () => {
    this.setState({
      moment: 0,
      paused: false,
      reverse: false,
    });
  }

  onMoment = () => {
    this.setState({
      moment: 500,
    }, () => {
      this.setState({
        moment: null,
      });
    });
  }

  render() {
    return (<div>
      <h1>yoyo 永动机</h1>
      <Tween
        animation={[
          { opacity: 1, duration: 1000 },
          { x: 300, duration: 1000 },
          { translateX: '100px', repeat: -1, duration: 1000, yoyo: true },
        ]} style={{ opacity: 0 }}
      >
        <div>执行动效</div>
      </Tween>
      <h1>Transition3d</h1>
      <Tween
        animation={[
          { rotateY: 180, duration: 3000 },
          { delay: -900, translateX: 100, duration: 3000 },
        ]}
        style={{
          margin: 200, width: 100,
          transform: 'perspective(100px) rotateY(10deg)', backgroundColor: '#fff000',
        }}
      >
        <div>执行动效</div>
      </Tween>
      <h1>TimeLine</h1>
      <Tween
        animation={[
          { translateX: 100, rotate: 10 },
          { translateY: 100, translateX: 500, rotate: 0 },
          { translateX: 0, marginTop: 100 },
          { translateY: 0, marginLeft: 100 },
          { marginLeft: 0, marginTop: 0 },
        ]}
        repeat={3} // 重复
        yoyo
        style={{ height: 400 }}
      >
        {this.state.children1}
      </Tween>
      <h1>svgPoints</h1>
      <svg width="100%" height="600" version="1.2">
        <Tween
          animation={[
            { points: '300,10 500,200 120,230 450,220 0,20' },
            { points: '100,10 200,200 120,430 450,220 0,20' },
          ]}
          style={{ fill: '#fff000', storkeWidth: 1, stroke: '#000fff' }}
          component="polygon"
          points="220,100 300,210 170,250 123,234"
          attr="attr"
        />
      </svg>
      <h1>svgDrawShape</h1>
      <button onClick={this.onClick}>点击切换</button>
      <p>当前参数：{this.state.tweenData}</p>
      <svg width="100%" height="600" version="1.2">
        <Tween
          animation={{ style: { SVGDraw: this.state.tweenData }, duration: 1000 }}
          style={{ fill: '#fff000', strokeWidth: 5,
            stroke: '#000fff', transform: 'translate(10px, 10px)',
          }}
          width="100"
          height="100"
          component="rect"
        />
        <Tween
          animation={{ style: { SVGDraw: this.state.tweenData }, duration: 1000 }}
          style={{ fill: '#fff000', strokeWidth: 5, stroke: '#000fff' }}
          component="polygon"
          points="120,10 200,10 230,110 150,110"
          attr="attr"
        />
        <Tween
          animation={{ style: { SVGDraw: this.state.tweenData }, duration: 1000 }}
          style={{ fill: '#fff000', strokeWidth: 5, stroke: '#000fff' }}
          component="circle"
          cx="300" cy="55" r="50"
          attr="attr"
        />
        <Tween
          animation={{ SVGDraw: this.state.tweenData, duration: 1000 }}
          style={{ fill: '#fff000', strokeWidth: 5, stroke: '#000fff' }}
          component="ellipse"
          cx="500" cy="55" rx="100" ry="50"
        />
        <Tween
          animation={{ SVGDraw: this.state.tweenData, duration: 1000 }}
          style={{ fill: '#fff000', strokeWidth: 5, stroke: '#000fff' }}
          component="line"
          x1="0" y1="150" x2="500" y2="150"
        />
      </svg>
      <h1>svgDraw</h1>
      <button onClick={this.onClick2}>点击切换</button>
      <p>当前参数：{this.state.tweenData}</p>
      <svg width="100%" height="600" version="1.2">
        <Tween
          animation={{ style: { SVGDraw: this.state.tweenData }, duration: 1000 }}
          style={{ fill: 'none', strokeWidth: 20, stroke: '#000fff' }}
          component="path"
          d="M9.13,99.99c0,0,18.53-41.58,49.91-65.11c30-22.5,65.81-24.88,77.39-24.88c33.87,
          0,57.55,11.71,77.05,28.47c23.09,19.85,40.33,46.79,61.71,69.77c24.09,25.89,53.44,
          46.75,102.37,46.75c22.23,0,40.62-2.83,55.84-7.43c27.97-8.45,44.21-22.88,
          54.78-36.7c14.35-18.75,16.43-36.37,16.43-36.37"
          attr="attr"
        />
      </svg>
      <h1>Svg</h1>
      <svg width="100%" height="600" version="1.2">
        <Tween
          animation={{
            d: 'M294.863,134.137c0,0,49.599-76.923,26.082,0' +
            's-55.142,119.658-55.142,19.658S161.53,19.521,294.863,34.137z',
          }}
          style={{ fill: '#fff000', storkeWidth: 1, stroke: '#000fff' }}
          component="path"
          d="M294.863,134.137c0,0,49.599-76.923,126.082,0s-55.142,
          119.658-55.142,119.658S161.53,149.521,294.863,134.137z"
          attr="attr"
        />
      </svg>   
      <h1>simple</h1>
      <Tween
        animation={{ x: 300 }}
        onChange={() => { console.log('---') }}
        style={{ opacity: 1, height: 100, display: 'inline-block' }}
      >
        <div>执行动效</div>
      </Tween>
      <h1>shadowInset</h1>
      <Tween animation={{ boxShadow: '0 0 0 #000 inset', duration: 1000 }}
        style={{ opacity: 1, height: 100, boxShadow: 'rgba(0, 0, 0, 1) 10px 10px 10px 0px inset' }}
      >
        <div>执行动效</div>
      </Tween>
      <h1>shadow</h1>
      <Tween
        style={{ height: 100, backgroundColor: '#fff000' }}
        animation={[
          { textShadow: '0 1em 5px rgba(0,0,0,1)', duration: 1000 },
          { boxShadow: '0 0 30px rgba(255,125,0,0.5)', borderRadius: 50, duration: 1000 },
        ]}
      >
        <div>执行动效</div>
      </Tween>
      <h1>scrollAnim</h1>
      <div style={{ height: 800 }}>往下滚动</div>
      <ScrollOverPack
        style={{ height: 800 }}
        playScale={0.3} // 0 的话就是默认显示
      >
        <Tween
          key="1"
          animation={{ y: 30, type: 'from', ease: 'easeOutQuart', opacity: 0 }}
          // reverseDelay={200}
          style={{ background: '#fff000' }}
        >
          执行动画
        </Tween>
        <Tween
          key="2"
          id="12"
          animation={{ y: 30, delay: 100, ease: 'easeOutQuart', type: 'from', opacity: 0, id: 12 }}
          // reverseDelay={100}
          style={{ background: '#000fff' }}
        >
          执行动画
        </Tween>
      </ScrollOverPack>
      <h1>repeat</h1>
      <Tween
        animation={{
          opacity: 1,
          x: '100px',
          repeat: 1,
          repeatDelay: 1000,
          duration: 1000,
        }}
        style={{ opacity: 0 }}
      >
        <div>执行动效</div>
      </Tween>
      <h1>path</h1>
      <div style={{ position: 'relative', width: 200, margin: 'auto' }}>
        <Tween
          animation={{ duration: 3000, path: p3, repeat: -1, ease: 'linear' }}
          style={{
            opacity: 1,
            position: 'absolute',
            width: '30px',
            height: '30px',
            left: '-15px',
            top: '-15px',
            background: '#fff000',
          }}
        />
        <Tween
          animation={{ duration: 3000, path: p2, repeat: -1, ease: 'linear' }}
          style={{
            opacity: 1,
            position: 'absolute',
            width: '30px',
            height: '30px',
            left: '-15px',
            top: '-15px',
            background: '#fff000',
          }}
        />
        <svg>
          <path fill="none" stroke="#000" d={p3} />
          <path fill="none" stroke="#000" d={p2} />
        </svg>
      </div>
      <h1>momentJump</h1>
      <div>moment初始为2500,所以第一个时间已过,而且第二个已播了1000</div>
      <Tween
        animation={[{ marginLeft: '300px', duration: 1500 }, { y: 300, duration: 5000 }]}
        moment={this.state.moment}
        style={{ opacity: 1, height: 500, transform: 'translate(50px,30px)' }}
      >
        <div>执行动效</div>
      </Tween>
      <h1>gsapWritten</h1>
      <Tween
        animation={{ x: '+=200px', y: '-=40px' }}
        style={{ opacity: 1, height: 100, transform: 'translate(50px,30px)' }}
      >
        <div>执行动效</div>
      </Tween>
      <h1>groupAbsolute</h1>
      <button onClick={this.onClick1}>切换</button>
      <TweenOneGroup style={{ position: 'relative' }}>
        <div key={this.state.int}>
          <img src={this.imgArray[this.state.int]} height="200" alt="img"/>
        </div>
      </TweenOneGroup>
      <h1>group</h1>
      <button onClick={this.onClick}>{this.state.children ? 'show' : 'hide'}</button>
      <TweenOneGroup
        style={{ height: 300 }}
        enter={this.enterType}
        leave={[{ y: 90 }, { x: 100, opacity: 0 }]}
        onEnd={this.onEnd}
        exclusive
      >
        {this.state.children}
      </TweenOneGroup>
      <h1>fromDelay</h1>
      <div style={{ position: 'relative', height: 500 }}>
      <Tween
        animation={[
          { x: 200, delay: 1000, y: '300', blur: '10px', duration: 500, type: 'from' },
          { x: 400, y: 0 },
          { delay: 1000, y: 300, type: 'from' },
        ]}
        style={{ opacity: 1, width: 100, transform: 'translateY(100px)' }}
      >
        <div>执行动效</div>
      </Tween></div>
      <h1>from</h1>
      <div style={{ position: 'relative', height: 300 }}>
      <Tween
        animation={[
          { x: 200, y: '+=100', blur: '10px', type: 'from', duration: 500 },
          { x: 300, y: 0 },
        ]}
        style={{ opacity: 1, width: 100, transform: 'translateY(100px)' }}
      >
        <div>执行动效</div>
      </Tween></div>
      <h1>followMouse</h1>
      <Tween animation={this.state.animation}
        moment={17}
        style={{ height: 100 }}
      >
        <div>执行动效</div>
      </Tween>
      <h1>easingPath</h1>
      <Tween
        animation={anim}
        style={{
          position: 'absolute',
          opacity: 1,
          height: 50,
          width: 50,
          transform: 'translate(150px,150px)',
          background: '#000',
          transformOrigin: 'center bottom',
        }}
      />
      <div style={{ width: 100, height: 100, background: '#fff000', position: 'absolute' }} />
      <svg style={{ position: 'absolute' }}>
        <path fill="none" stroke="#000" d={p} />
        <path d={p1} fill="none" stroke="#000" />
      </svg>
      <h1>Control</h1>
      <div style={{ height: 200 }}>
        <Tween animation={[{ translateX: '500px', duration: 1000 }, { y: 100 }, { x: 100 }]}
          paused={this.state.paused}
          reverse={this.state.reverse}
          reverseDelay={this.state.reverseDelay}
          moment={this.state.moment}
          style={{ opacity: 1, width: 100, transform: 'translate(50px,30px)' }}
        >
          <div>执行动效</div>
        </Tween>
      </div>
      <button onClick={this.onPlay}>play</button>
      <button onClick={this.onPause}>pause</button>
      <button onClick={this.onReverse}>reverse</button>
      <button onClick={this.onReverseDelay}>reverse Delay 1000</button>
      <button onClick={this.onRestart}>restart</button>
      <button onClick={this.onMoment}>moment to 500</button>
      <h1>Color</h1>
      <Tween
        animation={[
          { height: 300, backgroundColor: 'hsla(360,50%,50%,0.5)' },
          { color: 'white' }, { borderColor: 'red' },
        ]}
        style={{ border: '1px solid #000' }}
      >
        <div>执行动效</div>
      </Tween>
      <h1>childrenUpdate</h1>
      <Tween animation={this.state.tweenData}
        style={{ height: 300, width: 60, textAlign: 'center' }}
      >
        <div>大面包</div>
        <Tween animation={this.state.childTweenData} key="tween">小馒头</Tween>
      </Tween>
      <h1>childrenNullChange</h1>
      <Tween
        animation={{ x: 300 }}
        component={Div}
        componentProps={{ show: this.state.show }}
      >
        test
      </Tween>
      <h1>children</h1>
      <div style={{ marginBottom: 20 }}>
        <span>基本数字：</span>
        <Tween
          animation={{ Children: { value: 10000 } }}
        />
      </div>
      <div style={{ marginBottom: 20 }}>
        <span>设置开始数字：</span>
        <Tween
          animation={{ Children: { value: 10000 } }}
        >
          9990
        </Tween>
      </div>
      <div style={{ marginBottom: 20 }}>
        <span>只取整数：</span>
        <Tween
          animation={{ Children: { value: 10000, floatLength: 0 } }}
        />
      </div>
      <div style={{ marginBottom: 20 }}>
        <span>基本数字, 小数后取两位, float length 2：</span>
        <Tween
          animation={{ Children: { value: 10000, floatLength: 2 } }}
        />
      </div>
      <div style={{ marginBottom: 20 }}>
        <span>格式化钱符：</span>
        <div>
          <span>¥</span>
          <Tween
            animation={{ Children: { value: 10000, floatLength: 2, formatMoney: true } }}
            component="span"
          >
            20,000.12
          </Tween>
        </div>
      </div>
      <div style={{ marginBottom: 20 }}>
        <span>自定义钱符格式：</span>
        <div>
          <span>¥</span>
          <Tween
            animation={{
              Children: {
                value: 10000,
                floatLength: 2,
                formatMoney: { thousand: '.', decimal: ',' },
              },
            }}
            component="span"
          >
          20.000,12
          </Tween>
        </div>
      </div>
      <h1>blur</h1>
      <div>
        filter 里的滤镜，&apos;grayScale&apos;, &apos;sepia&apos;, &apos;hueRotate&apos;,
        &apos;invert&apos;, &apos;brightness&apos;, &apos;contrast&apos;, &apos;blur&apos;
      </div>
      <Tween animation={{ blur: '0px', sepia: '10%', grayScale: '50%', duration: 2000 }}
        style={{ filter: 'blur(30px)' }}
      >
        <img
          width="500"
          src="https://t.alipayobjects.com/images/T1CFtgXb0jXXXXXXXX.jpg"
          alt="img"
        />
      </Tween>

      <h1>bezier</h1>
      <div style={{ position: 'relative', height: 300 }}>
        <Tween
          animation={{
            bezier: {
              type: 'thru',
              autoRotate: true,
              vars: [
                { x: 100, y: 200 },
                { x: 200, y: 0 },
                { x: 300, y: 200 },
                { x: 400, y: 0 },
              ],
            },
          }}
          style={{ width: 100 }}
        >
          <div>执行动效</div>
        </Tween>
        <div
          style={{
            width: 5, height: 5, background: '#000',
            position: 'absolute', top: 0, transform: 'translate(100px,200px)',
          }}
        />
        <div
          style={{
            width: 5, height: 5, background: '#000', position: 'absolute',
            top: 0, transform: 'translate(200px,0px)',
          }}
        />
        <div
          style={{
            width: 5, height: 5, background: '#000', position: 'absolute',
            top: 0, transform: 'translate(300px,200px)',
          }}
        />
        <div
          style={{
            width: 5, height: 5, background: '#000', position: 'absolute',
            top: 0, transform: 'translate(400px,0px)',
          }}
        />
      </div>
    </div>)
  }
}

export default TweenAnimComponent