import React from 'react';
import newLogoImg from '@/assets/new-logo.svg'

export const Nav00DataSource = {
  wrapper: { className: 'header0 home-page-wrapper' },
  page: { className: 'home-page' },
  logo: {
    className: 'header0-logo',
    children: newLogoImg,
  },
  Menu: {
    className: 'header0-menu',
    children: [
      { name: 'item0', a: { children: '首页', href: '' } },
      { name: 'item1', a: { children: '课程介绍', href: '' } },
      { name: 'item2', a: { children: '双师团队', href: '' } },
      { name: 'item3', a: { children: '学堂分布', href: '' } },
      { name: 'item3', a: { children: '酷娃养成', href: '' } },
      { name: 'item3', a: { children: '合作者说', href: '' } },
      { name: 'item3', a: { children: '品牌加盟', href: '' } },
      { name: 'item3', a: { children: '关于', href: '' } },
    ],
  },
  mobileMenu: { className: 'header0-mobile-menu' },
};
export const Nav20DataSource = {
  isScrollLink: true,
  wrapper: { className: 'header2 home-page-wrapper' },
  page: { className: 'home-page' },
  logo: {
    className: 'header2-logo',
    children: newLogoImg,
  },
  Menu: {
    className: 'header2-menu',
    children: [
      {
        name: 'Banner1_0',
        to: 'Banner1_0',
        children: 'Banner1_0',
        className: 'menu-item',
      },
    ],
  },
  mobileMenu: { className: 'header2-mobile-menu' },
  menuLink: { children: []},
};

export const Nav10DataSource = {
  wrapper: { className: 'header1 home-page-wrapper' },
  page: { className: 'home-page' },
  logo: {
    className: 'header1-logo',
    children: newLogoImg,
  },
  Menu: {
    className: 'header1-menu',
    children: [
      { name: 'item0', a: { children: '首页', link: '/' } },
      { name: 'item1', a: { children: '课程介绍', link: '/course' } },
      { name: 'item2', a: { children: '双师团队', link: '/teacher' } },
      // { name: 'item3', a: { children: '学堂分布', link: '/school' } },
      { name: 'item3', a: { children: '酷娃养成', link: '/article' } },
      { name: 'item3', a: { children: '合作者说', link: '/case' } },
      { name: 'item3', a: { children: '品牌加盟', link: '/joinin' } },
      { name: 'item3', a: { children: '关于', link: '/about' } },
    ],
  },
  mobileMenu: { className: 'header1-mobile-menu' },
  // help: { className: 'help', children: '帮助' },
  user: {},
};

export const Nav30DataSource = {
  wrapper: { className: 'header3 home-page-wrapper' },
  page: { className: 'home-page' },
  logo: {
    className: 'header3-logo',
    children: newLogoImg,
  },
  Menu: {
    className: 'header3-menu',
    children: [
      { name: 'item0', a: { children: '首页', link: '/' } },
      { name: 'item1', a: { children: '课程介绍', link: '/course' } },
      { name: 'item2', a: { children: '双师团队', link: '/teacher' } },
      { name: 'item3', a: { children: '英文绘本馆', href: 'https://static..com/official/gjdl/index.html', blank: true } },
      // { name: 'item3', a: { children: '学堂分布', link: '/school' } },
      { name: 'item4', a: { children: '品牌加盟', link: '/cooperation' } },
      // { name: 'item5', a: { children: '产品植入', link: '/cooperation' } },
      { name: 'item6', a: { children: '学堂动态', link: '/article' } },
    ],
  },
  mobileMenu: { className: 'header3-mobile-menu' },
  // help: { className: 'help', children: '帮助' },
  user: {},
};