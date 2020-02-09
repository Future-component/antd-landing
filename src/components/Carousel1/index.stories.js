import React from 'react';
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions';

import Carousel1 from './index'
// import { Button } from 'antd'


export const carouselData1 = {
  wrapper: { className: 'home-page-wrapper carousel1-wrapper' },
  page: { className: 'home-page carousel1' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        className: 'title-h1',
        children: '双师团队',
      },
      {
        name: 'content',
        className: 'title-content',
        children: (<div>100%纯北美外教，美国小学现役老师，纯正母语熏陶<br />中教专业英语或教育背景出身，为孩子学习问题提供专业解决方案</div>),
      },
    ],
  },
  block: {
    children: [{
      item: 1,
      className: 'carousel1-img-wrapper',
      gutter: 16,
      children: [{
        name: 'block0',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          wrapper: { className: 'carousel1-block-content' },
          img: {
            style: {
              backgroundImage: `url(https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*njqxS5Ky7CQAAAAAAAAAAABjARQnAQ)`
            },
          },
          name: 'Tori Magin',
          desc: (<div>纽卡斯尔大学 (澳大利亚）/金融专业/学士<br />2016-2018 外教关系主管 </div>),
          content: { children: '我有13年的教育从业经历，6年的课堂教学经验和7年的任职校长经验，我希望成为一名优秀的老师，我的学生不仅是在学校，也要在生活中成功。 ' },
        },
      },
      {
        name: 'block1',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          wrapper: { className: 'carousel1-block-content' },
          img: {
            style: {
              backgroundImage: `url(https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*njqxS5Ky7CQAAAAAAAAAAABjARQnAQ)`
            },
          },
          name: 'Mike Madden',
          desc: (<div>南卡罗莱纳大学/金融学/学士<br />2017-至今 全职外教 </div>),
          content: { children: '大家好，我是一名来自美国的老师目前住在北京。我在南卡罗莱纳大学学习金融和中文，很快就在广州当了幼儿园老师。我喜欢使我的课有趣和令人兴奋，我期待在教室里看到你！ ' },
        },
      },
      {
        name: 'block2',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          wrapper: { className: 'carousel1-block-content' },
          img: {
            style: {
              backgroundImage: `url(https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*njqxS5Ky7CQAAAAAAAAAAABjARQnAQ)`
            }
          },
          name: 'Denise Stueven',
          desc: (<div>瓦尔登大学/阅读和文学专业/硕士<br />2016-2018中国苏州 线上ESL英语老师 </div>),
          content: { children: '我是Denise老师。我很喜欢孩子，我已在美国小学执教20年，我热爱教育事业，也有在线下教授中国孩子的经验，请把你的孩子放心地交给我，相信我们会在课堂收获更多知识和快乐! ' },
        },
      }],
    }, {
      item: 2,
      className: 'carousel1-img-wrapper',
      gutter: 16,
      children: [{
        name: 'block0',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          wrapper: { className: 'carousel1-block-content' },
          img: {
            style: {
              backgroundImage: `url(https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*njqxS5Ky7CQAAAAAAAAAAABjARQnAQ)`
            }
          },
          name:'Abby Huff',
          desc: (<div>密苏里浸会大学/人类服务科学专业/本科<br />2016-至今线上ESL英语教师 </div>),
          content: { children: '我是Abby老师。我从事教育事业已经20多年了。我非常享受与孩子们在一起的时光，每当孩子们在课堂中与我分享他们的生活和收获，都是我最幸福的时刻。对于任何年龄的孩子我都有足够的耐心，请将你的孩子放心地交给我。 ' },
        },
      },
      {
        name: 'block1',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          wrapper: { className: 'carousel1-block-content' },
          img: {
            style: {
              backgroundImage: `url(https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*njqxS5Ky7CQAAAAAAAAAAABjARQnAQ)`
            }
          },
          name:'Julie Cooper',
          desc: (<div>北亚利桑那大学/特殊教育专业/硕士<br />1996-至今小学教师 </div>),
          content: { children: '成为一名老师是我从小的梦想，我从事教育事业已经20年了。在这过程中我教授过英语母语的孩子和非英语母语的孩子，我也是一名特殊教育老师。我热爱我的工作，我会继续在这个领域里探索，期待为学生带来改变。 ' },
        },
      },
      {
        name: 'block0',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          wrapper: { className: 'carousel1-block-content' },
          img: {
            style: {
              backgroundImage: `url(https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*njqxS5Ky7CQAAAAAAAAAAABjARQnAQ)`
            }
          },
          name:'Katharine Clark-Keene',
          desc: (<div>伊利诺伊大学芝加哥分校/特殊教育/硕士<br />2016-至今线上ESL英语老师</div>),
          content: { children: '我是Katherine老师。我拥有教育学硕士学位及超过12年的K12教学经验。我对工作充满热情，如果你正在寻找一个有趣且有能力的英语老师，请选择我。 ' },
        }, 
      }],
    },
    {
      item: 3,
      className: 'carousel1-img-wrapper',
      gutter: 16,
      children: [{
        name: 'block0',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          wrapper: { className: 'carousel1-block-content' },
          img: {
            style: {
              backgroundImage: `url(https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*njqxS5Ky7CQAAAAAAAAAAABjARQnAQ)`
            }
          },
          name:'刘璇 Lavenna',
          desc: (<div>美国海归硕士<br /></div>),
          content: { children: '从北京到波士顿，我始终相信我们可以教给孩子们的不仅仅是英语。陪他们去探索这个世界，分享身边的点滴，从不将课堂拘泥于教室之中。教学相长，孩子们也帮助我成长为更优秀的老师。愿我们一起努力，一起变得更好！' },
        },
      },
      {
        name: 'block2',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          wrapper: { className: 'carousel1-block-content' },
          img: {
            style: {
              backgroundImage: `url(https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*njqxS5Ky7CQAAAAAAAAAAABjARQnAQ)`
            }
          },
          name:'陈希峰 Rocky',
          desc: (<div>资深K12英语老师 <br /></div>),
          content: { children: '从事幼少儿英语教育9年有余。最喜欢的是孩子们无邪的笑容和无穷的能量，孩子们的活力感染我，使我感到年轻，与孩子们在一起很开心。少年强则中国强，未来希望能帮助更多从事英语启蒙教育的老师，从而帮助更多孩子学好英语！我们一起努力！' },
        },
      },
      {
        name: 'block1',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          wrapper: { className: 'carousel1-block-content' },
          img: {
            style: {
              backgroundImage: `url(https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*njqxS5Ky7CQAAAAAAAAAAABjARQnAQ)`
            }
          },
          name:'苏琛琛 Susan',
          desc: (<div>资深K12英语老师 <br /></div>),
          content: { children: '从事多年少儿英语教育，课堂活动新颖，善于发现孩子的优点，关注每一位孩子的成长，深受孩子和家长喜爱。我相信：作为一名培训师，不仅要培养孩子，更要培养老师。愿自己怀一颗纯净而美好的心，付出不亚于任何人的努力！' },
        },
      }],
    }
  ]},
};

storiesOf('Carousel|Carousel1', module)
  .add('Web', () => <Carousel1 dataSource={carouselData1} isMobile={false} />)
  .add('H5', () => <Carousel1 dataSource={carouselData1} isMobile={true} />)
