import React from 'react';

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
        logo: 'mobx.svg',
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
        api:
            'https://deploy-preview-1655--docusaurus-2.netlify.com/docs/introduction',
    },
    {
        name: 'Ant Design',
        logo: 'antd.svg',
        api: 'https://ant.design/docs/react/introduce-cn',
    },
    {
        name: 'JavaScript',
        logo: 'javascript.svg',
        api:
            'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference',
    },
    {
        name: 'ECMA 2019',
        logo: 'javascript.svg',
        api: 'https://tc39.es/ecma262/',
    },
    {
        name: 'TypeScript',
        logo: 'typescript.svg',
        api: 'https://www.tslang.cn/docs/home.html',
    },
    {
        name: 'RxJS',
        logo: 'rxjs.svg',
        api: 'https://rxjs-dev.firebaseapp.com/guide/overview',
    },
    {
        name: 'Ramda',
        logo: 'ramda.svg',
        api: 'http://ramda.cn/docs/',
    },
    {
        name: 'Lodash',
        logo: 'lodash.svg',
        api: 'https://lodash.com/docs/4.16.4',
    },
    {
        name: 'Zepto',
        logo: 'zepto.png',
        api: 'http://www.css88.com/doc/zeptojs_api/',
    },
    {
        name: 'AntV',
        logo: 'antv.svg',
        api: 'https://antv.alipay.com/zh-cn/index.html',
    },
    {
        name: 'Workbox',
        logo: 'workbox.svg',
        api:
            'https://developers.google.com/web/tools/workbox/guides/get-started',
    },
    {
        name: 'date-fns',
        logo: 'date-fns.svg',
        api: 'https://date-fns.org/docs/Getting-Started',
    },
    {
        name: 'Axios',
        api: 'http://www.axios-js.com/zh-cn/docs/',
    },
    {
        name: 'Node.js',
        logo: 'nodejs.svg',
        api: 'http://nodejs.cn/api/',
    },
    {
        name: 'Express',
        logo: 'express.svg',
        api: 'http://www.expressjs.com.cn/4x/api.html',
    },
    {
        name: 'Egg.js',
        logo: 'eggjs.png',
        api: 'https://eggjs.org/zh-cn/intro/',
    },
    {
        name: 'Electron',
        logo: 'electron.svg',
        api: 'https://electronjs.org/docs',
    },
    {
        name: 'Puppeteer',
        logo: 'puppeteer.svg',
        api: 'https://zhaoqize.github.io/puppeteer-api-zh_CN/#/',
    },
    {
        name: 'Cheerio',
        api: 'https://cheerio.js.org/',
    },
    {
        name: 'GraphQL',
        logo: 'graphql.svg',
        api: 'https://graphql.cn/learn/',
    },
    {
        name: 'Haskell',
        logo: 'haskell.svg',
        api: 'https://downloads.haskell.org/~ghc/latest/docs/html/libraries/',
    },
    {
        name: 'Python',
        logo: 'python.svg',
        api: 'https://www.rddoc.com/doc/Python/3.6.0/zh/',
    },
    {
        name: 'Nginx',
        logo: 'nginx.svg',
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
        logo: 'eslint.svg',
        api: 'https://cn.eslint.org/docs/rules/',
    },
    {
        name: 'Prettier',
        logo: 'prettier.svg',
        api: 'https://prettier.io/docs/en/options.html',
    },
    {
        name: 'Babel',
        logo: 'babel.svg',
        api: 'https://www.babeljs.cn/docs/',
    },
    {
        name: 'Webpack',
        logo: 'webpack.svg',
        api: 'https://www.webpackjs.com/configuration/',
    },
    {
        name: 'Parcel',
        logo: 'parcel.svg',
        api: 'https://parceljs.org/getting_started.html',
    },
    {
        name: '小程序',
        logo: 'minapp.svg',
        api: 'https://developers.weixin.qq.com/miniprogram/dev/framework/',
    },
];

const getLogoUrl = (logo = 'default.svg') => {
    let url = 'https://uniquexiaobai.cn/api/' + logo;

    if (!/svg$/.test(logo)) {
        url += '!w200';
    }

    return url;
};

const IndexPage = () => (
    <Layout>
        <SEO title="Home" />

        <ul className="list">
            {list.map(item => (
                <li key={item.name} className="item">
                    <a href={item.api} className="item__api">
                        <img
                            src={getLogoUrl(item.logo)}
                            className="item__logo"
                            alt={item.name}
                        />
                        <span className="item__name">{item.name}</span>
                    </a>
                </li>
            ))}
        </ul>
    </Layout>
);

export default IndexPage;
