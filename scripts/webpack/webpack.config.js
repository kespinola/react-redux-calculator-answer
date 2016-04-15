import webpack from 'webpack';
import AutoPrefixCore from 'autoprefixer-core';
import Rebeccapurple from 'postcss-color-rebeccapurple';
import SimpleVariables from 'postcss-simple-vars';
import NextCSS from 'postcss-cssnext';
import { join } from 'path';

const { HOST, PORT } = process.env;

export default {

  context: join(__dirname, '/../../src'),

  entry: {
    bundle: [
      `webpack-dev-server/client?http://${HOST}:${PORT}`,
      'webpack/hot/dev-server',
      './index.js',
    ],
  },

  output: {
    path: '/build/',
    filename: '[name].js',
    publicPath: `http://${HOST}:${PORT}/build/`,
    devtoolModuleFilenameTemplate: '/[absolute-resource-path]',
  },

  module: {
    loaders: [
      {
        test: [/\.js$/, /\.jsx$/],
        loaders: ['babel'],
        exclude: /node_modules/,
      },
      {
        test: [/\.css$/],
        loaders: [
          'style',
          'css?modules&importLoaders=1',
          'postcss',
        ],
      },
      {
        test: /\.json$/,
        loader: 'json',
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'file?name=[name].[ext]',
      },
      {
        test: /\.(woff|svg|eot|ttf|woff2)$/,
        loader: 'file?name=[sha512:hash:base64:7].[ext]',
      },
    ],
  },

  postcss: [
    AutoPrefixCore,
    Rebeccapurple,
    SimpleVariables,
    NextCSS,
  ],

  resolve: {
    modules: [
      'node_modules',
    ],

    extensions: ['', '.js', '.jsx', '.json', '.css', '.sass', '.scss'],

  },

  node: {
    process: true,
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],

  debug: true,

  devtool: 'eval-source-map',

};
