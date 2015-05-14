var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var production = process.env.NODE_ENV === 'production';

module.exports = {
    cache: true,
    entry: {
        main: './router.js'
    },
    output: {
        path: production ? './dist' : './build',
        filename: production ? '[name].[chunkhash].js' : '[name].js',
        hash: true
    },
    module: {
        loaders: [
            { test: /\.scss$/, loader: 'style-loader!css-loader!sass-loader' },
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            { test: /\.js$/, loader: 'jsx-loader' }
        ]
    },
    resolve: {
        extensions: ['', '.js']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index_template.html',
            chunks: ['main']
        }),
        new webpack.optimize.OccurenceOrderPlugin(true)
    ]
};