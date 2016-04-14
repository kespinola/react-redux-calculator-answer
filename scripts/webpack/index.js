import config from './webpack.config.js';
import WebpackDevServer from 'webpack-dev-server';
import webpack from 'webpack';

const { HOST, PORT } = process.env;

const compiler = webpack(config);

console.info('Starting development server. Please wait...');

const server = new WebpackDevServer(compiler, {

  // The rest is terminal configurations
  quiet: false,
  noInfo: false,
  lazy: false,
  publicPath: `http://${HOST}:${PORT}/build`,
  headers: { 'Access-Control-Allow-Origin': '*' },
  stats: {
    colors: true,
  },
});

server.listen(PORT, HOST);
