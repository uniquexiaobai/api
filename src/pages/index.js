import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import '../styles/index.css';

const list = [
    {
        name: 'HTTP',
        logo: 'http',
        api: 'https://developer.mozilla.org/zh-CN/docs/Web/HTTP',
    },
    {
        name: 'HTML5',
        logo: 'html',
        api: 'https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element',
    },
    {
        name: 'DOM',
        logo: 'dom',
        api:
            'https://developer.mozilla.org/zh-CN/docs/Web/API/Document_Object_Model',
    },
    {
        name: 'DOM Events',
        logo: 'dom_events',
        api: 'https://developer.mozilla.org/zh-CN/docs/Web/Events',
    },
    {
        name: 'Canvas',
        api: 'https://www.canvasapi.cn/',
    },
    {
        name: 'Web API',
        api: 'https://developer.mozilla.org/zh-CN/docs/Web/API',
    },
    {
        name: 'CSS3',
        logo: 'css',
        api: 'https://developer.mozilla.org/zh-CN/docs/Web/CSS/Reference',
    },
    {
        name: 'Vue',
        logo: 'vue',
        api: 'https://cn.vuejs.org/v2/guide/',
        github: 'https://github.com/vuejs/vue',
    },
    {
        name: 'React',
        logo: 'react',
        api: 'https://zh-hans.reactjs.org/docs/getting-started.html',
        github: 'https://github.com/facebook/react/',
    },
    {
        name: 'Redux',
        logo: 'redux',
        api: 'https://redux.js.org/advanced/asyncactions',
        github: 'https://github.com/reduxjs/redux',
    },
    {
        name: 'Mobx',
        logo: 'mobx',
        api: 'http://cn.mobx.js.org/',
        github: 'https://github.com/mobxjs/mobx',
    },
    {
        name: 'R-Router',
        logo: 'react-router',
        api: 'https://reacttraining.com/react-router/core/guides/quick-start',
        github: 'https://github.com/ReactTraining/react-router',
    },
    {
        name: 'Next.js',
        logo: 'nextjs',
        api: 'https://nextjs.org/docs',
        github: 'https://github.com/zeit/next.js',
    },
    {
        name: 'Umi',
        api: 'https://umijs.org/zh/guide/',
        github: 'https://github.com/umijs/umi',
    },
    {
        name: 'Gatsby',
        logo: 'gatsby',
        api: 'https://www.gatsbyjs.org/docs/',
        github: 'https://github.com/gatsbyjs/gatsby',
    },
    {
        name: 'Ant Design',
        logo: 'ant-design',
        api: 'https://ant.design/docs/react/introduce-cn',
        github: 'https://github.com/ant-design/ant-design',
    },
    {
        name: 'GraphQL',
        logo: 'graphql',
        api: 'https://graphql.cn/learn/',
    },
    {
        name: 'Docusaurus',
        logo: 'docusaurus',
        api: 'https://docusaurus.io/docs/zh-CN/installation',
    },
    {
        name: 'JavaScript',
        logo: 'javascript',
        api:
            'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference',
    },
    {
        name: 'ECMA 2019',
        logo: 'ecmascript',
        api: 'https://tc39.es/ecma262/',
    },
    {
        name: 'TypeScript',
        logo: 'typescript',
        api: 'https://www.tslang.cn/docs/home.html',
        github: 'https://github.com/Microsoft/TypeScript',
    },
    {
        name: 'RxJS',
        logo: 'rxjs',
        api: 'https://rxjs-dev.firebaseapp.com/guide/overview',
        github: 'https://github.com/ReactiveX/RxJS',
    },
    {
        name: 'Ramda',
        logo: 'ramda',
        api: 'http://ramda.cn/docs/',
        github: 'https://github.com/ramda/ramda',
    },
    {
        name: 'Lodash',
        logo: 'lodash',
        api: 'https://lodash.com/docs/4.16.4',
        github: 'https://github.com/lodash/lodash',
    },
    {
        name: 'Zepto',
        logo: 'zepto',
        api: 'http://www.css88.com/doc/zeptojs_api/',
        github: 'https://github.com/madrobby/zepto',
    },
    {
        name: 'AntV',
        logo: 'ant-v',
        api: 'https://antv.alipay.com/zh-cn/index.html',
    },
    {
        name: 'Workbox',
        logo: 'workbox',
        api:
            'https://developers.google.com/web/tools/workbox/guides/get-started',
        github: 'https://github.com/GoogleChrome/workbox',
    },
    {
        name: 'date-fns',
        logo: 'date-fns',
        api: 'https://date-fns.org/docs/Getting-Started',
        github: 'https://github.com/date-fns/date-fns',
    },
    {
        name: 'Node.js',
        logo: 'nodejs',
        api: 'http://nodejs.cn/api/',
    },
    {
        name: 'Express',
        logo: 'express',
        api: 'http://www.expressjs.com.cn/4x/api.html',
        github: 'https://github.com/expressjs/express',
    },
    {
        name: 'Egg.js',
        logo: 'egg',
        api: 'https://eggjs.org/zh-cn/intro/',
        github: 'https://github.com/eggjs/egg',
    },
    {
        name: 'Puppeteer',
        logo: 'puppeteer',
        api: 'https://zhaoqize.github.io/puppeteer-api-zh_CN/#/',
        github: 'https://github.com/GoogleChrome/puppeteer',
    },
    {
        name: 'Axios',
        api: 'https://github.com/axios/axios',
    },
    {
        name: 'Cheerio',
        api: 'https://github.com/cheeriojs/cheerio',
    },
    {
        name: 'Haskell',
        logo: 'haskell',
        api: 'https://downloads.haskell.org/~ghc/latest/docs/html/libraries/',
    },
    {
        name: 'Python',
        logo: 'python',
        api: 'https://www.rddoc.com/doc/Python/3.6.0/zh/',
    },
    {
        name: 'Nginx',
        logo: 'nginx',
        api: 'http://nginx.org/en/docs/',
    },
    {
        name: 'Jest',
        logo: 'jest',
        api: 'https://jestjs.io/docs/en/getting-started',
    },
    {
        name: 'Storybook',
        logo: 'storybook',
        api: 'https://storybook.js.org/basics/introduction/',
    },
    {
        name: 'Prepack',
        logo: 'prepack',
        api: 'https://prepack.io/getting-started.html',
    },
    {
        name: 'Create R App',
        logo: 'create-react-app',
        api: 'https://facebook.github.io/create-react-app/docs/getting-started',
    },
    {
        name: 'Eslint',
        logo: 'eslint',
        api: 'https://cn.eslint.org/docs/rules/',
        github: 'https://github.com/eslint/eslint',
    },
    {
        name: 'Prettier',
        logo: 'prettier',
        api: 'https://prettier.io/docs/en/options.html',
        github: 'https://github.com/prettier/prettier',
    },
    {
        name: 'Babel',
        logo: 'babel',
        api: 'https://www.babeljs.cn/docs/',
    },
    {
        name: 'Gulp',
        logo: 'gulp',
        api: 'http://www.gulpjs.com.cn/docs/api/',
        github: 'https://github.com/gulpjs/gulp',
    },
    {
        name: 'Webpack',
        logo: 'webpack',
        api: 'https://www.webpackjs.com/configuration/',
        github: 'https://github.com/webpack/webpack',
    },
    {
        name: 'Parcel',
        logo: 'parcel',
        api: 'https://parceljs.org/getting_started.html',
        github: 'https://github.com/parcel-bundler/parcel',
    },
    {
        name: 'Taro',
        logo: 'taro',
        api: 'https://taro-docs.jd.com/taro/docs/README.html',
    },
    {
        name: '小程序',
        logo: 'weapp',
        api: 'https://developers.weixin.qq.com/miniprogram/dev/framework/',
    },
];

const IndexPage = () => (
    <Layout>
        <SEO title="Home" />

        <ul class="list">
            {list.map(item => (
                <li key={item.name} class="item">
                    <a href={item.api} class="item__api">
                        <img
                            src={require(`../images/${item.logo ||
                                'default'}.png`)}
                            class="item__logo"
                        />
                        <span class="item__name">{item.name}</span>
                    </a>
                </li>
            ))}
        </ul>
    </Layout>
);

export default IndexPage;
