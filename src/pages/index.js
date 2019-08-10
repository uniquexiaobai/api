import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import '../styles/index.css';

const list = [
    {
        name: 'Canvas',
        api: 'https://www.canvasapi.cn/',
    },
    {
        name: 'Vue',
        logo: 'vue.svg',
        api: 'https://cn.vuejs.org/v2/guide/',
    },
    {
        name: 'React',
        logo: 'react.svg',
        api: 'https://zh-hans.reactjs.org/docs/getting-started.html',
    },
    {
        name: 'Redux',
        logo: 'redux.svg',
        api: 'https://redux.js.org/advanced/asyncactions',
    },
    {
        name: 'Mobx',
        logo: 'mobx.png',
        api: 'http://cn.mobx.js.org/',
    },
    {
        name: 'Dva',
        api: 'https://dvajs.com/guide/',
    },
    {
        name: 'React Router',
        logo: 'react-router.svg',
        api: 'https://reacttraining.com/react-router/core/guides/quick-start',
    },
    {
        name: 'Next.js',
        logo: 'nextjs.svg',
        api: 'https://nextjs.org/docs',
    },
    {
        name: 'Gatsby',
        logo: 'gatsby.svg',
        api: 'https://www.gatsbyjs.org/docs/',
    },
    {
        name: 'Docusaurus',
        logo: 'docusaurus.svg',
        api: 'https://docusaurus.io/docs/zh-CN/installation',
    },
    {
        name: 'Ant Design',
        logo: 'antd.png',
        api: 'https://ant.design/docs/react/introduce-cn',
    },
    {
        name: 'JavaScript',
        logo: 'javascript.png',
        api:
            'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference',
    },
    {
        name: 'ECMA 2019',
        logo: 'ecmascript.png',
        api: 'https://tc39.es/ecma262/',
    },
    {
        name: 'TypeScript',
        logo: 'typescript.svg',
        api: 'https://www.tslang.cn/docs/home.html',
    },
    {
        name: 'RxJS',
        logo: 'rxjs.png',
        api: 'https://rxjs-dev.firebaseapp.com/guide/overview',
    },
    {
        name: 'Ramda',
        logo: 'ramda.png',
        api: 'http://ramda.cn/docs/',
    },
    {
        name: 'Lodash',
        logo: 'lodash.png',
        api: 'https://lodash.com/docs/4.16.4',
    },
    {
        name: 'Zepto',
        logo: 'zepto.png',
        api: 'http://www.css88.com/doc/zeptojs_api/',
    },
    {
        name: 'AntV',
        logo: 'ant-v.png',
        api: 'https://antv.alipay.com/zh-cn/index.html',
    },
    {
        name: 'Workbox',
        logo: 'workbox.png',
        api:
            'https://developers.google.com/web/tools/workbox/guides/get-started',
    },
    {
        name: 'date-fns',
        logo: 'date-fns.png',
        api: 'https://date-fns.org/docs/Getting-Started',
    },
    {
        name: 'Axios',
        api: 'https://github.com/axios/axios',
    },
    {
        name: 'Node.js',
        logo: 'nodejs.png',
        api: 'http://nodejs.cn/api/',
    },
    {
        name: 'Express',
        logo: 'express.png',
        api: 'http://www.expressjs.com.cn/4x/api.html',
    },
    {
        name: 'Egg.js',
        logo: 'egg.png',
        api: 'https://eggjs.org/zh-cn/intro/',
    },
    {
        name: 'Electron',
        logo: 'electron.png',
        api: 'https://electronjs.org/docs',
    },
    {
        name: 'Puppeteer',
        logo: 'puppeteer.png',
        api: 'https://zhaoqize.github.io/puppeteer-api-zh_CN/#/',
    },
    {
        name: 'Cheerio',
        api: 'https://github.com/cheeriojs/cheerio',
    },
    {
        name: 'GraphQL',
        logo: 'graphql.svg',
        api: 'https://graphql.cn/learn/',
    },
    {
        name: 'Haskell',
        logo: 'haskell.png',
        api: 'https://downloads.haskell.org/~ghc/latest/docs/html/libraries/',
    },
    {
        name: 'Python',
        logo: 'python.png',
        api: 'https://www.rddoc.com/doc/Python/3.6.0/zh/',
    },
    {
        name: 'Nginx',
        logo: 'nginx.png',
        api: 'http://nginx.org/en/docs/',
    },
    {
        name: 'Umi',
        api: 'https://umijs.org/zh/guide/',
    },
    {
        name: 'Jest',
        logo: 'jest.svg',
        api: 'https://jestjs.io/docs/zh-Hans/getting-started',
    },
    {
        name: 'Prepack',
        logo: 'prepack.png',
        api: 'https://prepack.io/getting-started.html',
    },
    {
        name: 'Eslint',
        logo: 'eslint.png',
        api: 'https://cn.eslint.org/docs/rules/',
    },
    {
        name: 'Prettier',
        logo: 'prettier.svg',
        api: 'https://prettier.io/docs/en/options.html',
    },
    {
        name: 'Babel',
        logo: 'babel.png',
        api: 'https://www.babeljs.cn/docs/',
    },
    {
        name: 'Webpack',
        logo: 'webpack.svg',
        api: 'https://www.webpackjs.com/configuration/',
    },
    {
        name: 'Parcel',
        logo: 'parcel.png',
        api: 'https://parceljs.org/getting_started.html',
    },
    {
        name: '小程序',
        logo: 'weapp.png',
        api: 'https://developers.weixin.qq.com/miniprogram/dev/framework/',
    },
];

const getLogoUrl = (logo = 'default.png') => {
    let url = 'https://unique-api.oss-ap-southeast-1.aliyuncs.com/logo/' + logo;

    if (!/svg$/.test(logo)) {
        url += '?x-oss-process=style/webp';
    }

    return url;
};

const IndexPage = () => (
    <Layout>
        <SEO title="Home" />

        <ul class="list">
            {list.map(item => (
                <li key={item.name} class="item">
                    <a href={item.api} class="item__api">
                        <img src={getLogoUrl(item.logo)} class="item__logo" />
                        <span class="item__name">{item.name}</span>
                    </a>
                </li>
            ))}
        </ul>
    </Layout>
);

export default IndexPage;
