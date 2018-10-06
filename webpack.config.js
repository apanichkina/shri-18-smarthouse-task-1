const path = require('path');
const PUBLIC_PATH = path.join(__dirname, 'public');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const cssExtractTextPlugin = new ExtractTextPlugin('style.css');

module.exports = {
  mode: 'development',
  cache: false,
  entry: `${PUBLIC_PATH}/js/index.js`,
  output: {
    path: `${PUBLIC_PATH}/dist`,
    filename: 'index.js',
    publicPath: PUBLIC_PATH
  },
  resolve: {
    extensions: ['.js', '.css'],
  },
  module: {
    rules: [
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        use: ['css-hot-loader'].concat(cssExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'postcss-loader'],
        })),
      },
    ],
  },
  plugins: [
    cssExtractTextPlugin,
  ],
};
