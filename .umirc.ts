import { defineConfig } from 'dumi';
// const rollupPluginCommonjs = require('rollup-plugin-commonjs');
const prorem = require('postcss-plugin-px2rem');

const repo = 'oto_saas_component';

export default defineConfig({
  title: '@anon/design-mobile',
  description: '一个企业级React组件库',
  // favicon: 'https://bosscdn.otosaas.com/test/20220907/20220907110858oto.png?path=0,539,540',
  // logo: 'https://bosscdn.otosaas.com/test/20220907/20220907110858oto.png?path=0,539,540',
  outputPath: 'dist',
  mode: 'site',
  hash: true,
  // Because of using GitHub Pages
  base: `/${repo}/`,
  publicPath: `/`,
  navs: [
    null,
    {
      title: '配置',
      path: '',
    },
  ],
  // cssLoader:{
  // },
  locales: [['zh-CN', '中文']],
  mfsu: {},
  nodeModulesTransform: {
    type: 'none',
  },
  sass: {},
  extraPostCSSPlugins: [
    prorem({
      remValue: 100, // 根据设计稿设置
      propList: ['*'],
      exclude: /(node_modules|components)/i,
    }),
  ],
  plugins: [
    'rollup-plugin-commonjs',
    // 'umi-plugin-react',
  ],
  // alias:{
  //   "antd-mobile-v5": path.resolve(__dirname, "node_modules/antd-mobile"),
  // },
  // extraBabelPlugins: [
  //   ['babel-plugin-import', {
  //       libraryName: 'antd-mobile-v5',
  //       libraryDirectory: 'es/components',
  //       style: true,
  //   }]
  // ],
  // chainWebpack(config:any, { webpack } : {webpack:any}) {
  //   console.log('21321321')
  //   config.plugin('rollupPluginCommonjs')
  //       .use(rollupPluginCommonjs)
  // },
  // menus: {
  //   // 需要自定义侧边菜单的路径，没有配置的路径还是会使用自动生成的配置
  //   '/components': [
  //     {
  //       title: '菜单项',
  //       path: '/components',
  //       children: [
  //         // 菜单子项（可选）
  //         '/Foo/index.zh-CN.md', // 对应的 Markdown 文件，路径是相对于 resolve.includes 目录识别的
  //         '/KpButton/index.zh-CN.md',
  //       ],
  //     },
  //   ],
  // },
});
