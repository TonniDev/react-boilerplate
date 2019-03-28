const path = require('path');

// require('dotenv').config();

const rules = require('./private/webpack/rules');
const plugins = require('./private/webpack/plugins');

const watch = process.env.NODE_ENV === 'development';

const publicPath = process.env.NODE_ENV === 'development' ? '/' : '/';

module.exports = {
  context: __dirname,
  entry: './src/index.js',
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath,
    filename: 'bundle.js'
  },
  module: rules,
  watchOptions: {
    poll: true,
    ignored: /node_modules/
  },
  watch,
  plugins,
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      'styled-components': path.resolve(__dirname, './node_modules', 'styled-components'),
      Components: path.resolve(__dirname, './src/components'),
      Atoms: path.resolve(__dirname, './src/components/atoms'),
      Molecules: path.resolve(__dirname, './src/components/molecules'),
      Organisms: path.resolve(__dirname, './src/components/organisms'),
      Themes: path.resolve(__dirname, './src/config/themes')
    }
  }
};
