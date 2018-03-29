const path = require('path');

const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: './src/js/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist/js')
  },
  module: {
    rules: [
        {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,   //不包括的路径
            use: {
                loader: 'babel-loader',
                options: {
                    // presets: ['@babel/preset-env']
                    presets: ['env']
                }
            }
        },
        {
            test: /\.(sass|css|scss)$/,
            exclude:/node_modules/,
            use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader", // translates CSS into CommonJS
                options:{
                    importLoaders:1
                }
            }, {
                loader:"postcss-loader"  //自动加前缀的loader
            },
            {
                loader: "sass-loader" // compiles Sass to CSS
            }]
        }
    ]
  }
};