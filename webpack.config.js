var webpack = require('webpack'),
    path = require('path'),
    fs = require('fs'),
    pkg = require('./package.json'),
    merge = require('merge'),
    isDev = process.env.npm_lifecycle_event === "dev",
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    ImageminPlugin = require('imagemin-webpack-plugin').default,
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    _chunks = [],
    oConfig = getOEntry(),
    cfg_eslint = { //eslint配置
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader"
    },
    _exports = { //基础配置
        entry: oConfig.oEntry,
        output: {
            path: path.join(__dirname, 'dist'),
            filename: 'js/[name].js'
        },
        module: {
            rules: getRules()
        }
    },
    _plugins = [
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: 'global', // 将公共模块提取，生成名为`global`的chunk
        //     chunks: _chunks, //提取哪些模块共有的部分
        //     minChunks: Infinity // 提取至少2个模块共有的部分
        // }),
        new ExtractTextPlugin({ filename: 'css/[name].css' }),
        new ImageminPlugin({
          disable: true, 
          pngquant: {
            quality: '95-100'
          }
        })
    ];

//生成入口对象
function getOEntry() {
    var routerPath = './src/router/',
        oEntry = {

        },
        aHtmlWebpackPlugin = [],
        files = fs.readdirSync(routerPath); //遍历router文件夹的文件

    files.forEach(function(item) {
        var tmp = item.split('.');
        if (tmp[1] !== 'js') {
            return;
        }
        _chunks.push(tmp[0]);
        oEntry[tmp[0]] = [
            [routerPath, item].join('')
        ];
        if (tmp[0] === "global") {
            return;
        }
        var fileSrc = tmp[0] + '.html';
        aHtmlWebpackPlugin.push(new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src', 'templates', fileSrc),
            filename: fileSrc,
            chunks: ["global", tmp[0]],
            minify: false
        }));
    });

    return {
        oEntry: oEntry,
        aHtmlWebpackPlugin: aHtmlWebpackPlugin
    };
}

function getExports() {
    var plugins = isDev ? [..._plugins, new webpack.HotModuleReplacementPlugin()] : _plugins;

    _exports.plugins = plugins.concat(oConfig.aHtmlWebpackPlugin);

    if (isDev) {
        _exports = merge(_exports, {
            devServer: {
                host: 'localhost',
                port: 8080,
                inline: true, //可以监控js变化
                hot: true, //热启动
            },
            watch: true,
            watchOptions: {
                poll: true
            }
        })
    };
    return _exports;
}

function getRules() {
    var rules = [{
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
            presets: ['es2015']
        }
    }, {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [{
                loader: "css-loader"
            }, {
                loader: 'postcss-loader'
            }, {
                loader: "sass-loader"
            }]
        })
    }, {
        test: /\.(png|jpg|gif|mp3)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
                name: 'images/[name].[ext]',
                publicPath : '../'
            }  
          }
        ]
    }, {
        test: /\.(htm|html)$/i,
        use: [{
            loader: 'html-loader',
            options: {
              attrs: ['img:src','audio:src',':data-source'],
              minimize: false
            }
        }]
    }];
    return isDev ? [/*cfg_eslint, */...rules] : rules;
}

module.exports = getExports()