import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
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
        test: [/\.sass$/, /\.scss$/],
        loader: ExtractTextPlugin.extract(
          'style',
          'css?browsers=last 2 versions!sass'
        ),
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css'),
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

  resolve: {
    modulesDirectories: [
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
