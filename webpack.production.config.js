const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        'hello-world': './src/hello-world.js',
        'kiwi': './src/kiwi.js',
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, './dist'),
        publicPath: '',
    },
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.(png|jpg)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test: /\.js/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/env'],
                            plugins: ['transform-class-properties'],
                        }
                    }
                ]
            },
            {
                test: /\.hbs$/,
                use: [
                    {
                        loader: 'handlebars-loader'
                    }
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
        }),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Hello world webpack',
            template: 'src/index.hbs',
            description: 'Some desc',
        }),
    ]
}