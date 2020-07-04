import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import '../styles/index.css';

const list = [
  {
    name: 'Browser',
    logo: 'chrome.svg',
    api: 'https://platform.html5.org/',
  },
  {
    name: 'HTML',
    logo: 'html.svg',
    api: 'https://whatwg-cn.github.io/html/',
  },
  {
    name: 'Canvas',
    api: 'https://www.canvasapi.cn/',
  },
  {
    name: 'Svelte',
    logo: 'svelte.svg',
    api: 'https://svelte.dev/docs',
  },
  {
    name: 'Vue',
    logo: 'vue.svg',
    api: 'https://cn.vuejs.org/v2/guide/',
  },
  {
    name: 'Preact',
    logo: 'preact.svg',
    api: 'https://preactjs.com/guide/v10/getting-started',
  },
  {
    name: 'React',
    logo: 'react.svg',
    api: 'https://zh-hans.reactjs.org/docs/getting-started.html',
  },
  {
    name: 'React Router',
    logo: 'react-router.svg',
    api: 'https://reacttraining.com/react-router/core/guides/quick-start',
  },
  {
    name: 'Redux',
    logo: 'redux.svg',
    api: 'https://redux.js.org/introduction/getting-started',
  },
  {
    name: 'React Redux',
    logo: 'redux.svg',
    api: 'https://react-redux.js.org/introduction/quick-start',
  },
  {
    name: 'Redux Toolkit',
    logo: 'redux.svg',
    api: 'https://redux-toolkit.js.org/introduction/quick-start',
  },
  {
    name: 'Mobx',
    logo: 'mobx.svg',
    api: 'https://mobx.js.org/README.html',
  },
  {
    name: 'Next.js',
    logo: 'nextjs.svg',
    api: 'https://nextjs.org/docs',
  },
  {
    name: 'Nuxt.js',
    logo: 'nuxtjs.svg',
    api: 'https://zh.nuxtjs.org/guide',
  },
  {
    name: 'Gatsby',
    logo: 'gatsby.svg',
    api: 'https://www.gatsbyjs.cn/docs/',
  },
  {
    name: 'Docusaurus',
    logo: 'docusaurus.svg',
    api: 'https://v2.docusaurus.io/docs/introduction/',
  },
  {
    name: 'VuePress',
    logo: 'vuepress.png',
    api: 'https://vuepress.vuejs.org/zh/guide/',
  },
  {
    name: 'Ant Design',
    logo: 'antd.svg',
    api: 'https://ant.design/docs/react/introduce-cn',
  },
  {
    name: 'JavaScript',
    logo: 'javascript.svg',
    api: 'https://zh.javascript.info/',
  },
  {
    name: 'ECMA 2020',
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
    api: 'https://rxjs.dev/guide/overview',
  },
  {
    name: 'Immer',
    logo: 'immer.png',
    api: 'https://immerjs.github.io/immer/docs/introduction',
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
    logo: 'chrome.svg',
    api: 'https://developers.google.com/web/tools/workbox/guides/get-started',
  },
  {
    name: 'Day.js',
    logo: 'dayjs.png',
    api: 'https://day.js.org/docs/en/installation/node-js',
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
    name: 'Apollo',
    logo: 'apollo.svg',
    api: 'https://www.apollographql.com/docs/',
  },
  {
    name: 'Webassembly',
    logo: 'webassembly.svg',
    api: 'https://www.rust-lang.org/zh-CN/what/wasm',
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
    name: 'Click',
    logo: 'python.svg',
    api: 'https://click.palletsprojects.com/',
  },
  {
    name: 'Requests',
    logo: 'python.svg',
    api: 'http://cn.python-requests.org/zh_CN/latest/',
  },
  {
    name: 'Beautiful Soup',
    logo: 'python.svg',
    api: 'https://beautifulsoup.readthedocs.io/zh_CN/v4.4.0/',
  },
  {
    name: 'Nginx',
    logo: 'nginx.svg',
    api: 'http://nginx.org/en/docs/',
  },
  {
    name: 'Jest',
    logo: 'jest.svg',
    api: 'https://jestjs.io/docs/zh-Hans/getting-started',
  },
  {
    name: 'Testing Library',
    logo: 'testing-library.png',
    api: 'https://testing-library.com/docs/intro',
  },
  {
    name: 'Storybook',
    logo: 'storybook.svg',
    api: 'https://storybook.js.org/docs/basics/introduction/',
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
    api: 'https://webpack.docschina.org/concepts/',
  },
  {
    name: 'Rollup',
    logo: 'rollup.svg',
    api: 'https://rollupjs.org/guide/zh/',
  },
  {
    name: 'Parcel',
    logo: 'parcel.svg',
    api: 'https://parceljs.org/getting_started.html',
  },
  {
    name: 'Remax',
    api: 'https://remaxjs.org/',
  },
  {
    name: '小程序',
    logo: 'minapp.svg',
    api: 'https://developers.weixin.qq.com/miniprogram/dev/framework/',
  },
];

const getLogoUrl = (logo = 'default.svg') => {
  let url = 'https://uniquexiaobai.oss-cn-hangzhou.aliyuncs.com/api/' + logo;

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
