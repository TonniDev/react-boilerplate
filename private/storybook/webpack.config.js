const path = require('path');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');

// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add additional webpack configurations.
// For more information refer the docs: https://storybook.js.org/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.

module.exports = {
  output: {
    publicPath: 'http://localhost:6009/'
  },
  plugins: [
    new webpack.DefinePlugin({
      __ENV__: false
    }),
    new CopyWebpackPlugin([
      {
        from: 'src/assets',
        to: 'assets',
        ignore: ['fonts/**/*']
      },
      {
        from: 'src/assets',
        to: '/assets',
        ignore: ['images/**/*']
      }
    ]),
    new OpenBrowserPlugin({url: 'http://localhost:6009'})
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /(node_modules).*/
      },
      {
        test: /\.(woff(2)?|eot|ttf|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[path][name]-[hash].[ext]'
          }
        }],
        include: path.resolve(`${__dirname}/../../`),
        exclude: path.resolve(`${__dirname}/../../src/assets/images/`)
      },
      {
        test: /\.(png|svg|jpg)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]'
          }
        }],
        include: path.resolve(`${__dirname}/../../`),
        exclude: path.resolve(`${__dirname}/../../src/assets/fonts/`)
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      'styled-components': path.resolve(__dirname, '../../node_modules', 'styled-components'),
      Components: path.resolve(__dirname, '../../src/components'),
      Atoms: path.resolve(__dirname, '../../src/components/atoms'),
      Molecules: path.resolve(__dirname, '../../src/components/molecules'),
      Organisms: path.resolve(__dirname, '../../src/components/organisms'),
      Themes: path.resolve(__dirname, '../../src/config/themes')
    }
  },
  externals: {
    jsdom: 'window',
    cheerio: 'window',
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': 'window',
    'react/addons': true
  }
};
