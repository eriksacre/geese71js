var webpack = require('webpack');

module.exports = {
    cache: true,
    entry: {
        main: './router.js'
    },
    output: {
        path: './build',
        publicPath: '/build/',
        filename: '[name].js'
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
    }
};