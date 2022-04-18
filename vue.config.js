module.exports = {
  transpileDependencies: true,
  lintOnSave: false,
  configureWebpack: {
    resolve: {
      // 后缀名
      extensions: [],
      // 别名配置
      alias: {
        'assets': '@/assets',
        'views': '@/views',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
      }
    }
  }
}
