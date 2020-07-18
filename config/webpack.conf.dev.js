const path = require('path')
const config = require('./webpack.config')
const merge = require('webpack-merge')
const webpack = require('webpack')

module.exports = merge(config, {
    mode: 'development',
    devServer: {
        hot: true,
        // proxy: {
        //     '/api': {
        //         target: 'http://www.slslsl.com/api/',
        //         changeOrigin: true,
        //         pathRewrite: {
        //             '^/api': '/'
        //         }
        //     }
        // }
    },
    devtool: 'inline-source-map',
    // API_ROOT:'//www.slslsl.com'
    //跨域请求配置
})
