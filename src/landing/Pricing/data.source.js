import React from 'react';
export const Pricing00DataSource = {
  wrapper: { className: 'home-page-wrapper pricing0-wrapper' },
  OverPack: { playScale: 0.3, className: 'home-page pricing0' },
  imgWrapper: { className: 'pricing0-img-wrapper', md: 12, xs: 24 },
  img: {
    className: 'pricing0-img',
    name: 'image',
    children:
      'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*OnyWT4Nsxy0AAAAAAAAAAABjARQnAQ',
  },
  childWrapper: {
    className: 'pricing0-text-wrapper',
    md: 12,
    xs: 24,
    children: [
      {
        name: 'title',
        children: 'OceanBase 服务器',
        className: 'pricing0-title',
      },
      {
        name: 'content',
        children:
          '云资源集中编排、弹性伸缩、持续发布和部署，高可用及容灾。按金融企业安全要求打造的完整云上安全体系，全方位保障金融应用及数据安全。<br/>500-5Gbps，10 GB-50TB（含），1TB流量包，国内按峰值。',
        className: 'pricing0-content',
      },
      { name: 'pricing', children: '¥2,200', className: 'pricing0-pricing' },
      {
        name: 'button',
        children: {
          icon: 'shopping-cart',
          href: '#',
          type: 'primary',
          children: '立即购买',
        },
      },
    ],
  },
};
export const Pricing10DataSource = {
  wrapper: { className: 'home-page-wrapper pricing1-wrapper' },
  page: { className: 'home-page pricing1' },
  OverPack: { playScale: 0.3, className: 'pricing1-content-wrapper' },
  titleWrapper: {
    className: 'pricing1-title-wrapper',
    children: [
      { name: 'title', children: '价目表', className: 'pricing1-title-h1' },
    ],
  },
  block: {
    className: 'pricing1-block-wrapper',
    children: [
      {
        name: 'block0',
        className: 'pricing1-block',
        md: 8,
        xs: 24,
        children: {
          wrapper: { className: 'pricing1-block-box ' },
          topWrapper: { className: 'pricing1-top-wrapper' },
          name: { className: 'pricing1-name', children: 'Free' },
          money: { className: 'pricing1-money', children: '¥0' },
          content: {
            className: 'pricing1-content',
            children: (
              <>
                <span>
                  140-500Mbps<br /> 140 GB-50TB（含）<br /> 14500GB流量包<br />{' '}
                  14国内按峰值宽带账单<br /> 14弹性计算<br /> 14云服务器 ECS{' '}
                </span>
              </>
            ),
          },
          line: { className: 'pricing1-line' },
          buttonWrapper: {
            className: 'pricing1-button-wrapper',
            children: {
              a: {
                className: 'pricing1-button',
                href: '#',
                children: '免费试用',
              },
            },
          },
        },
      },
      {
        name: 'block1',
        className: 'pricing1-block',
        md: 8,
        xs: 24,
        children: {
          wrapper: { className: 'pricing1-block-box active' },
          topWrapper: { className: 'pricing1-top-wrapper' },
          name: { className: 'pricing1-name', children: 'Starter' },
          money: { className: 'pricing1-money', children: '¥199' },
          content: {
            className: 'pricing1-content',
            children: (
              <>
                <span>
                  14500-5Gbps<br />1410 GB-50TB（含）<br />141TB流量包<br />14国内按峰值宽带账单<br />14弹性计算<br />云服务器
                  ECS
                </span>
              </>
            ),
          },
          line: { className: 'pricing1-line' },
          buttonWrapper: {
            className: 'pricing1-button-wrapper',
            children: {
              a: {
                className: 'pricing1-button',
                href: '#',
                children: '立即购买',
              },
            },
          },
        },
      },
      {
        name: 'block2',
        className: 'pricing1-block',
        md: 8,
        xs: 24,
        children: {
          wrapper: { className: 'pricing1-block-box ' },
          topWrapper: { className: 'pricing1-top-wrapper' },
          name: { className: 'pricing1-name', children: 'Pro' },
          money: { className: 'pricing1-money', children: '¥999' },
          content: {
            className: 'pricing1-content',
            children: (
              <>
                <span>
                  14大于5Gbps<br />1450 GB-100TB（含）<br />145TB流量包<br />14国内按峰值宽带账单<br />14弹性计算<br />14云服务器
                  ECS
                </span>
              </>
            ),
          },
          line: { className: 'pricing1-line' },
          buttonWrapper: {
            className: 'pricing1-button-wrapper',
            children: {
              a: {
                className: 'pricing1-button',
                href: '#',
                children: '立即购买',
              },
            },
          },
        },
      },
    ],
  },
};
export const Pricing20DataSource = {
  wrapper: { className: 'home-page-wrapper pricing2-wrapper' },
  page: { className: 'home-page pricing2' },
  OverPack: { playScale: 0.3, className: 'pricing2-content-wrapper' },
  titleWrapper: {
    className: 'pricing2-title-wrapper',
    children: [
      { name: 'title', children: '价目表', className: 'pricing2-title-h1' },
    ],
  },
  Table: {
    name: 'tabsTitle',
    size: 'default',
    columns: {
      children: [
        {
          dataIndex: 'name',
          key: 'name',
          name: 'name',
          childWrapper: {
            children: [
              { name: 'name', children: ' ' },
              { name: 'content', children: ' ' },
            ],
          },
        },
        {
          dataIndex: 'free',
          key: 'free',
          name: 'free',
          childWrapper: {
            className: 'pricing2-table-name-block',
            children: [
              {
                name: 'name',
                className: 'pricing2-table-name',
                children: 'Free',
              },
              {
                name: 'content',
                className: 'pricing2-table-money',
                children: '¥0',
              },
              { name: 'button', children: { href: '#', children: '免费试用' } },
            ],
          },
        },
        {
          dataIndex: 'basic',
          key: 'basic',
          name: 'basic',
          childWrapper: {
            className: 'pricing2-table-name-block',
            children: [
              {
                name: 'name',
                className: 'pricing2-table-name',
                children: 'Basic',
              },
              {
                name: 'content',
                className: 'pricing2-table-money',
                children: '¥550',
              },
              { name: 'button', children: { href: '#', children: '立即购买' } },
            ],
          },
        },
        {
          dataIndex: 'pro',
          key: 'pro',
          name: 'pro',
          childWrapper: {
            className: 'pricing2-table-name-block',
            children: [
              {
                name: 'name',
                className: 'pricing2-table-name',
                children: 'Pro',
              },
              {
                name: 'content',
                className: 'pricing2-table-money',
                children: '¥2,200',
              },
              {
                name: 'button',
                children: { href: '#', type: 'primary', children: '立即购买' },
              },
            ],
          },
        },
        {
          dataIndex: 'unlimited',
          key: 'unlimited',
          name: 'unlimited',
          childWrapper: {
            className: 'pricing2-table-name-block',
            children: [
              {
                name: 'name',
                className: 'pricing2-table-name',
                children: 'Unlimited',
              },
              {
                name: 'content',
                className: 'pricing2-table-money',
                children: '¥5,600',
              },
              { name: 'button', children: { href: '#', children: '立即购买' } },
            ],
          },
        },
      ],
    },
    dataSource: {
      children: [
        {
          name: '实例系列1',
          children: [
            { className: 'pricing2-table-content-name', children: '实例系列1' },
            { children: 'Limited', className: 'pricing2-table-content' },
            { children: 'Unlimited', className: 'pricing2-table-content' },
            { children: 'Unlimited', className: 'pricing2-table-content' },
            { children: 'Unlimited', className: 'pricing2-table-content' },
          ],
        },
        {
          name: '实例系列2',
          children: [
            { className: 'pricing2-table-content-name', children: '实例系列2' },
            { children: 'Limited', className: 'pricing2-table-content' },
            { children: 'Unlimited', className: 'pricing2-table-content' },
            { children: 'Unlimited', className: 'pricing2-table-content' },
            { children: 'Unlimited', className: 'pricing2-table-content' },
          ],
        },
        {
          name: '固定宽带计费',
          children: [
            {
              className: 'pricing2-table-content-name',
              children: '固定宽带计费',
            },
            { children: '50GB', className: 'pricing2-table-content' },
            { children: '250GB', className: 'pricing2-table-content' },
            { children: '600GB', className: 'pricing2-table-content' },
            { children: 'Unlimited', className: 'pricing2-table-content' },
          ],
        },
        {
          name: '闲置负载均衡',
          children: [
            {
              className: 'pricing2-table-content-name',
              children: '闲置负载均衡',
            },
            { children: '-', className: 'pricing2-table-content' },
            {
              children:
                'https://gw.alipayobjects.com/zos/basement_prod/14ce3060-34e6-4b30-9a45-1a6b95542310.svg',
              className: 'pricing2-table-content',
            },
            {
              children:
                'https://gw.alipayobjects.com/zos/basement_prod/14ce3060-34e6-4b30-9a45-1a6b95542310.svg',
              className: 'pricing2-table-content',
            },
            {
              children:
                'https://gw.alipayobjects.com/zos/basement_prod/14ce3060-34e6-4b30-9a45-1a6b95542310.svg',
              className: 'pricing2-table-content',
            },
          ],
        },
        {
          name: '4核',
          children: [
            { className: 'pricing2-table-content-name', children: '4核' },
            { children: '-', className: 'pricing2-table-content' },
            { children: '-', className: 'pricing2-table-content' },
            {
              children:
                'https://gw.alipayobjects.com/zos/basement_prod/14ce3060-34e6-4b30-9a45-1a6b95542310.svg',
              className: 'pricing2-table-content',
            },
            {
              children:
                'https://gw.alipayobjects.com/zos/basement_prod/14ce3060-34e6-4b30-9a45-1a6b95542310.svg',
              className: 'pricing2-table-content',
            },
          ],
        },
        {
          name: '系统盘（线性计费）',
          children: [
            {
              className: 'pricing2-table-content-name',
              children: '系统盘（线性计费）',
            },
            { children: '-', className: 'pricing2-table-content' },
            { children: '-', className: 'pricing2-table-content' },
            { children: '-', className: 'pricing2-table-content' },
            {
              children:
                'https://gw.alipayobjects.com/zos/basement_prod/14ce3060-34e6-4b30-9a45-1a6b95542310.svg',
              className: 'pricing2-table-content',
            },
          ],
        },
      ],
    },
  },
};


export const Pricing30DataSource = {
  wrapper: { className: 'home-page-wrapper pricing3-wrapper' },
  page: { className: 'home-page pricing3' },
  OverPack: { playScale: 0.3, className: 'pricing3-content-wrapper' },
  titleWrapper: {
    className: 'pricing3-title-wrapper',
    children: [
      { name: 'title', children: '价目表', className: 'pricing3-title-h1' },
    ],
  },
  block: {
    className: 'pricing3-block-wrapper',
    children: [
      {
        name: 'block0',
        className: 'pricing3-block',
        md: 8,
        xs: 24,
        children: {
          wrapper: { className: 'pricing3-block-box ' },
          topWrapper: { className: 'pricing3-top-wrapper' },
          name: { className: 'pricing3-name', children: 'Free' },
          money: { className: 'pricing3-money', children: '¥0' },
          content: {
            className: 'pricing3-content',
            children: (
              <>
                <span>
                  140-500Mbps<br /> 140 GB-50TB（含）<br /> 14500GB流量包<br />{' '}
                  14国内按峰值宽带账单<br /> 14弹性计算<br /> 14云服务器 ECS{' '}
                </span>
              </>
            ),
          },
          line: { className: 'pricing3-line' },
          buttonWrapper: {
            className: 'pricing3-button-wrapper',
            children: {
              a: {
                className: 'pricing3-button',
                href: '#',
                children: '免费试用',
              },
            },
          },
        },
      },
      {
        name: 'block1',
        className: 'pricing3-block',
        md: 8,
        xs: 24,
        children: {
          wrapper: { className: 'pricing3-block-box active' },
          topWrapper: { className: 'pricing3-top-wrapper' },
          name: { className: 'pricing3-name', children: 'Starter' },
          money: { className: 'pricing3-money', children: '¥199' },
          content: {
            className: 'pricing3-content',
            children: (
              <>
                <span>
                  14500-5Gbps<br />1410 GB-50TB（含）<br />141TB流量包<br />14国内按峰值宽带账单<br />14弹性计算<br />云服务器
                  ECS
                </span>
              </>
            ),
          },
          line: { className: 'pricing3-line' },
          buttonWrapper: {
            className: 'pricing3-button-wrapper',
            children: {
              a: {
                className: 'pricing3-button',
                href: '#',
                children: '立即购买',
              },
            },
          },
        },
      },
      {
        name: 'block2',
        className: 'pricing3-block',
        md: 8,
        xs: 24,
        children: {
          wrapper: { className: 'pricing3-block-box ' },
          topWrapper: { className: 'pricing3-top-wrapper' },
          name: { className: 'pricing3-name', children: 'Pro' },
          money: { className: 'pricing3-money', children: '¥999' },
          content: {
            className: 'pricing3-content',
            children: (
              <>
                <span>
                  14大于5Gbps<br />1450 GB-100TB（含）<br />145TB流量包<br />14国内按峰值宽带账单<br />14弹性计算<br />14云服务器
                  ECS
                </span>
              </>
            ),
          },
          line: { className: 'pricing3-line' },
          buttonWrapper: {
            className: 'pricing3-button-wrapper',
            children: {
              a: {
                className: 'pricing3-button',
                href: '#',
                children: '立即购买',
              },
            },
          },
        },
      },
    ],
  },
};
