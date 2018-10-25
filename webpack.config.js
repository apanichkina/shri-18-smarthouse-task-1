const path = require('path');

const PUBLIC_PATH = path.join(__dirname, 'public');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

const cssExtractTextPlugin = new ExtractTextPlugin('style.css');

module.exports = {
  mode: 'development',
  cache: false,
  entry: `${PUBLIC_PATH}/js/index.ts`,
  output: {
    path: `${PUBLIC_PATH}/dist`,
    filename: 'index.js',
    publicPath: PUBLIC_PATH,
  },
  resolve: {
    extensions: ['.js', '.css', '.ts'],
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['css-hot-loader'].concat(cssExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader?url=false', 'postcss-loader'],
        })),
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|eot|ttf)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              fallback: 'file-loader',
              name: '[hash].[ext]',
              limit: 8 * 1024,
              context: '',
            },
          },
        ],
      },
      {
        test: /\.ts$/,
        exclude: /(node_modules)/,
        enforce: 'pre',
        use: [
          {
            loader: 'ts-loader',
          },
          {
            loader: 'tslint-loader',
          },
        ],
      },
      {
        test: /\.ts$/,
        exclude: /(node_modules)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
          {
            loader: 'awesome-typescript-loader',
            options: {
              useCache: true,
              forceIsolatedModules: true,
              reportFiles: ['./src/**/*.{ts}'],
            },
          },
        ],
      },
    ],
  },
  plugins: [
    cssExtractTextPlugin,
  ],
  devServer: {
    port: 9000,
  },
};
