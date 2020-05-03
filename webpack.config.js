const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist'),
        publicPath: 'dist/',
    },
    mode: 'none',
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
                    'style-loader',
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
            }
        ]
    },
    plugins: [
        new TerserPlugin(),
    ]
}