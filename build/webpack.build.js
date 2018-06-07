const HtmlWebpackPlugin = require('html-webpack-plugin'); // 通过 npm 安装
const webpack = require('webpack'); // 用于访问内置插件
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')
console.log('start dev')
const config = {
    mode: 'development',
    entry: './src/main',
    resolve: {
        alias: {
            '@': '../src',
            vue: 'vue/dist/vue.js'
        },
        extensions: [".js", ".json", ".vue"]
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, '../dist')
    },
    module: {
        rules: [
            {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"},
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
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
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
        new VueLoaderPlugin()
    ]

    // optimization: {
    //     uglifyOptions: { compress: { inline: false }},
    //     splitChunks: {
    //         cacheGroups: {
    //             vendors: {
    //                 name: 'vendors',
    //                 chunks: 'all',
    //                 reuseExistingChunk: true,
    //                 priority: 1,
    //                 enforce: true,
    //                 test(module, chunks) {
    //                     const name = module.nameForCondition && module.nameForCondition();
    //                     return chunks.some(chunk => {
    //                         return chunk.name === 'main' && /[\\/]node_modules[\\/]/.test(name);
    //                     });
    //                 }
    //             },
    //             secondary: {
    //                 name: 'secondary',
    //                 chunks: 'all',
    //                 priority: 2,
    //                 enforce: true,
    //                 test(module, chunks) {
    //                     return chunks.some(chunk => chunk.name === 'secondary');
    //                 }
    //             }
    //         }
    //     }
    // }
};

module.exports = config;
console.log('start rpo')
