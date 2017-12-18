const path = require('path');
var webpack = require('webpack');
const ZipPlugin = require('zip-webpack-plugin');

module.exports = {
  entry: './handler.js',
  externals: {
    'aws-sdk': {
      commonjs: "aws-sdk",
      commonjs2: "aws-sdk",
      amd: "aws-sdk",
      root: "aws-sdk"
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
            presets: ["es2015"]
        }
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'commonjs2',
    filename: 'bundle.js'
  },
  plugins: [
    new ZipPlugin({
      filename: 'bundle.zip'
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new webpack.optimize.UglifyJsPlugin({
      beautify: true,
      mangle: false,
      compress: false,
      comments: false,
      sourceMap: false
    })
  ],
  resolve: {
    extensions: ['.webpack.js', '.js']
  }
};
