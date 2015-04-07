var webpack = require('webpack');
//var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');

module.exports = {
    cache: true,
    entry: {
        main: './router.js'
        //Projects: './app/projects/projects.js',
        //People: './app/people/people.js'
    },
    output: {
        path: './build',
        publicPath: '/geese71/build/',
        filename: '[name].js'
    },
    module: {
        loaders: [
            { test: /\.scss$/, loader: 'style-loader!css-loader!sass-loader' },
            { test: /\.js$/, loader: 'jsx-loader' }
        ]
    },
    resolve: {
        extensions: ['', '.js']
    }
    //plugins: [commonsPlugin]
};