// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

module.exports = {
    build: {
        env: {
            NODE_ENV: '"production"'
        },
        index: path.resolve(__dirname, '../dist/index.html'),
        assetsRoot: path.resolve(__dirname, '../dist'),
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
        productionSourceMap: true,
        productionGzip: false,
        productionGzipExtensions: ['js', 'css']
    },
    dev: {
        env: {
            NODE_ENV: '"development"'
        },
        port: 8000,
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
        context: [ //代理路径
            '/shopping'
        ],
        proxyTable: {
            '/users':{
                target: 'https://www.easy-mock.com/mock/5b2f4da70e946a3379e72c9a',
                changeOrigin: true,
                pathRewrite:{
                  '/api':''
              }
            }
          },
       // proxypath: 'http://cangdu.org:8001',
        //proxypath: 'http://elm.cangdu.org',
        cssSourceMap: false
    }
}