const path = require('path')
const merge = require('webpack-merge')
const config = require('./webpack.config')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = merge(config, {
    mode: 'production',
    devtool: 'source-map',
})