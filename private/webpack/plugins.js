const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer');
// const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const historyApiFallback = require('connect-history-api-fallback');
const env = require('../env.config');

const copyPlugin = () => {
  if (process.env.NODE_ENV === 'development') {
    return [
      {
        from: `${process.env.ROOT_PATH}src/index.html`,
        to: `${process.env.ROOT_PATH}`
      },
      {
        from: `${process.env.ROOT_PATH}src/assets/`,
        to: `${process.env.ROOT_PATH}assets/`,
        ignore: ['fonts/**/*']
      }
    ];
  }
  if (process.env.NODE_ENV === 'production') {
    return [
      {
        from: `${process.env.ROOT_PATH}src/index.html`,
        to: `${process.env.ROOT_PATH}`
      },
      {
        from: `${process.env.ROOT_PATH}src/assets/`,
        to: `${process.env.ROOT_PATH}assets/`
      }
    ];
  }
  return [
    {
      from: `${process.env.ROOT_PATH}src/index.html`,
      to: `${process.env.ROOT_PATH}`
    },
    {
      from: `${process.env.ROOT_PATH}src/assets/`,
      to: `${process.env.ROOT_PATH}assets/`,
      ignore: ['fonts/**/*']
    },
    {
      from: `${process.env.ROOT_PATH}src/assets/`,
      to: `${process.env.ROOT_PATH}/assets/`,
      ignore: ['images/**/*']
    }
  ];
};

const ifDev = (arr) => {
  let plugins = arr;
  if (process.env.NODE_ENV === 'production') {
    const IgnorePlugin = new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/);
    plugins = plugins.concat(IgnorePlugin);
  }
  if (process.env.NODE_ENV === 'development') {
    const config = {
      logLevel: 'debug',
      logPrefix: 'Homes Frontend',
      host: 'localhost',
      port: 8239,
      cors: true,
      server: {
        baseDir: ['dist'],
        middleware: [
          function (req, res, next) {
            res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT');
            res.setHeader('Access-Control-Allow-Origin', '*');
            next();
          },
          historyApiFallback()
        ]
      }
    };
    const BrowserSync = new BrowserSyncPlugin(config);
    const BundleAnalyser = new BundleAnalyzerPlugin({analyzerPort: 8240});
    plugins = plugins.concat(BrowserSync, BundleAnalyser);
  }
  return plugins;
};

const WEBPACK_NONCE = 'N2M0MDhkN2EtMmRkYi00MTExLWFhM2YtNDhkNTc4NGJhMjA3';

const initialPlugins = [
  new webpack.ProgressPlugin(),
  new HtmlWebpackPlugin({
    hash: true,
    minify: {
      html5: true,
      collapseWhitespace: true,
      collapseInlineTagWhitespace: true,
      removeComments: true,
      removeRedundantAttributes: true,
      minifyJS: true
    },
    filename: 'index.html',
    template: './src/index.html'
  }),
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      ROOT_PATH: JSON.stringify(process.env.ROOT_PATH),
      HOST: JSON.stringify(process.env.HOST),
      PORT: JSON.stringify(process.env.PORT),
      OUTPUT: JSON.stringify(process.env.OUTPUT),
      API_BASE_URL_EXTERNAL: JSON.stringify(process.env.API_BASE_URL_EXTERNAL),
      API_SERVER_URL: JSON.stringify(env.apiServerUrl),
      API_EXTERNAL_URL: JSON.stringify(env.apiExternalUrl)
    },
    __ENV__: false,
    'global.__webpack_nonce__': JSON.stringify(WEBPACK_NONCE)
  }),
  new CleanWebpackPlugin({
    verbose: true
  }),
  // new ExtractTextWebpackPlugin({filename: 'styles.css'}),
  new CopyWebpackPlugin(copyPlugin()),
  new webpack.optimize.AggressiveMergingPlugin({
    minSizeReduce: 1.5,
    moveToParents: true
  })
];

module.exports = ifDev(initialPlugins);
