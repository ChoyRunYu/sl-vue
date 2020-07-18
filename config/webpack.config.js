const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
// const HttpProxyMiddleware = require('http-proxy-middleware')


module.exports = {
    entry: {
        app: ['./src/main']
    },
    output: {
        path: path.join(__dirname, '../dist'),
        publicPath: '/',
        filename: 'js/[name].js',
        chunkFilename: 'js/[chunkhash].chunk.js'
    },
    resolve: {
        //配置别名 @ -> src
        alias: {
            '@': path.resolve('src')
        },
        //自动寻找文件名后缀
        extensions: ['.js', '.json', '.vue', '.css']
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                use: 'css-loader',
                fallback: 'style-loader'
            })
        }, {
            test: /\.vue$/,
            loader: 'vue-loader',
            options: {
                loaders: {
                    css: ExtractTextPlugin.extract({
                        publicPath: '/',
                        use: 'css-loader',
                        fallback: 'vue-style-loader'
                    })
                }
            }
        }, {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }, {
            test: /\.(gif|jpg|png)$/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 1024,
                    name: './static/img/[hash:8].[name].[ext]'
                }
            }]
        }, {
            test: /\.(woff|woff2|eot|ttf|svg|otf)$/,
            use: [{
                loader: 'url-loader',
                options: {
                    name: './static/font/[hash:8].[name].[ext]'
                }
            }]
        }]
    },
    plugins: [
        new ExtractTextPlugin({ filename: "./css/[name].css", allChunks: true }),
        new VueLoaderPlugin(),
        // new HttpProxyMiddleware(),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: './index.html',
            template: './static/index.html',
            favicon: './static/favicon.png',
            inject: 'body'
        })
    ]
}
