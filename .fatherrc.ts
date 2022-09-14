export default {
  esm: 'babel',
  cjs: 'babel',
  lessInBabelMode: true,
  extraBabelPresets: [
    [
      '@babel/env',
      {
        loose: true,
        modules: false,
        // 按需加载
        // useBuiltIns: 'usage',
        // 不使用模块化  交给其它打包工具处理
      },
    ],
    '@babel/react',
  ],
  extraBabelPlugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        root: ['./'],
        alias: {
          '@': './src',
        },
      },
    ],
  ],
  // extraBabelPlugins: [
  //   ['babel-plugin-import', {
  //     libraryName: 'antd-mobile',
  //     libraryDirectory: 'es/components',
  //     style: false,
  //   }]
  // ],
  // antd:{
  //   mobile:false,
  // }
  // cjs: 'rollup'
  // esm: 'babel',
};
