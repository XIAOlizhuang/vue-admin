const path = require('path');
module.exports = {
    //基本路径
    publicPath: process.env.NODE_ENV === 'production' ? '' : '/',
    //输出文件目录
    outputDir: process.env.NODE_ENV === 'production' ? 'dist' : 'devdist',
    //eslint-loader 是否在保存的时候检查
    lintOnSave: true,
    chainWebpack:(config) => {},
    configureWebpack: (config) => {
        // config.resolve = {//配置解析别名
        //   extensions: ['.js','.json','.vue'],
        //   alias: {
        //       '@': path.resolve(__dirname, './src'),
        //       'public': path.resolve(__dirname, './public'),
        //       'components': path.resolve(__dirname, 'components'),
        //       'api': path.resolve(_dirname,'./src/api'),
        //       'views': path.resolve(_dirname, './src/views')
        //   }
        // }
    },
    //生产环境是否生成sourceMap文件
    productionSourceMap: false,
    //css相关配置
    css: {
        //是否使用css分离插件
        extract: true,
        //开启css source map
        sourceMap: false,
        //css预设器配置项
        loaderOptions: {
            sass: {
                prependData: `@import "./src/styles/main.scss";`
            }
        },
        //启用css modules for all css
        modules: false
    },
    devServer: {
        open: true, // 编译完成是否打开网页
        host: '0.0.0.0',//指定使用地址,默认localhost,0.0.0.0代表可以被外界访问
        port: 8080, //访问端口
        https: false, //编译失败时刷新页面
        hot: true, //开启热加载
        proxy: null,//设置代理
    },
    //第三方插件配置
    pluginOptions: {}
}