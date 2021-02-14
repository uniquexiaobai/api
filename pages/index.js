import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout';
import styles from '../styles/Home.module.css';

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
    name: 'Tailwind',
    logo: 'tailwind.png',
    api: 'https://tailwindcss.com/docs',
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
    name: 'Dva',
    api: 'https://dvajs.com/guide/',
  },
  {
    name: 'Next.js',
    logo: 'nextjs.svg',
    api: 'https://nextjs.org/docs',
  },
  {
    name: 'VuePress',
    logo: 'vuepress.png',
    api: 'https://vuepress.vuejs.org/zh/guide/',
  },
  {
    name: 'Zeit UI',
    api: 'https://react.zeit-ui.co/zh-cn/guide/introduction',
  },
  {
    name: 'Ant Design',
    logo: 'antd.svg',
    api: 'https://ant.design/docs/react/introduce-cn',
  },
  {
    name: 'Ant Design Pro',
    logo: 'antd.svg',
    api: 'https://pro.ant.design/docs/getting-started-cn',
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
    name: 'BizCharts',
    logo: 'bizcharts.png',
    api: 'https://bizcharts.net/product/BizCharts4/category/61/page/98',
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
    name: 'Got',
    api: 'https://github.com/sindresorhus/got',
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
    name: 'Cheerio',
    api: 'https://cheerio.js.org/',
  },
  {
    name: 'Webassembly',
    logo: 'webassembly.svg',
    api: 'https://www.rust-lang.org/zh-CN/what/wasm',
  },
  {
    name: 'Python',
    logo: 'python.svg',
    api: 'https://www.rddoc.com/doc/Python/3.6.0/zh/',
  },
  {
    name: 'Flask',
    logo: 'flask.svg',
    api: 'https://dormousehole.readthedocs.io/en/latest/',
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
    name: 'Umi',
    logo: 'umijs.png',
    api: 'https://umijs.org/zh-CN/docs',
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
    <Head>
      <title>Api</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>

    <ul className={styles.list}>
      {list.map(item => (
        <li key={item.name} className={styles.item}>
          <a href={item.api} className={styles.item__api}>
            <img
              src={getLogoUrl(item.logo)}
              className={styles.item__logo}
              alt={item.name}
            />
            <span className={styles.item__name}>{item.name}</span>
          </a>
        </li>
      ))}
    </ul>
  </Layout>
);

export default IndexPage;

/*
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
*/
