const HtmlWebpackPlugin = require('html-webpack-plugin'); // 通过 npm 安装
const webpack = require('webpack'); // 用于访问内置插件
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const path = require('path')

const config = {
    mode:'production',
    entry:'./src/main',
    context: path.resolve(__dirname, "../"),
    /*
    * entry: {
    main: './path/to/my/entry/file.js'
  }
    * */
    resolve:{
        alias:{
            '@':'../src',
            vue: 'vue/dist/vue.js'
        },
        extensions: [".js", ".json" , ".vue"]
    },
    devtool:"source-map",
    module: {
        rules: [
            {test:/\.jsx?$/ , exclude: /node_modules/, loader: "babel-loader" },
            {
                test: /\.scss$/,
                use: [
                    "style-loader", // creates style nodes from JS strings
                    "css-loader", // translates CSS into CommonJS
                    "sass-loader" // compiles Sass to CSS
                ]
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            title: 'Custom template',
        }),
        new VueLoaderPlugin()
    ],
    devServer: {
        port: 9000,
        open:true
    }
};

module.exports = config;
