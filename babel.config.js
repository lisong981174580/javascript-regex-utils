// 配置参考：https://www.cnblogs.com/bai1218/p/12392180.html
module.exports = {
  presets: [
    [
      '@babel/preset-env', {
        modules: false,
        useBuiltIns: 'usage',
        corejs: 3,
        targets: {
          browsers: ['ie >= 8', 'iOS 7'] // 支持ie8，直接使用iOS浏览器版本7
        }
      }
    ],
    '@babel/preset-typescript',
  ],
  plugins: [
    [
      '@babel/plugin-transform-runtime',
      {
        corejs: 2
      }
    ]
  ]
}
