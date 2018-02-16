var path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.resolve('./src/index.js'),
    output: {
        path: path.resolve('./dist'),
        filename: 'bundle.js'
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['react', 'es2015'],
                    plugins: ['transform-class-properties']
                }
            }
        ]
    },
    devServer: {
        contentBase: path.resolve('./dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            inject: 'body'
        })
    ]
};
