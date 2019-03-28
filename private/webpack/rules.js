const path = require('path');
// const eslintFormatter = require('react-dev-utils/eslintFormatter');
const autoprefixer = require('autoprefixer');

const assetsPath = path.resolve(`${__dirname}/../../src/assets`);
const fontsPath = path.resolve(`${__dirname}/../../src/assets/fonts`);
const fileName = `${process.env.ROOT_PATH}assets/[name]-[hash:5].[ext]`;

const ifDev = (rules) => {
  if (process.env.NODE_ENV === 'development') {
    rules.rules.unshift({
      test: /\.js$/,
      use: ['source-map-loader'],
      enforce: 'pre',
      exclude: /node_modules/
    });
  }
  return rules;
};

const rules = {
  rules: [
    {
      test: /\.(js|jsx)$/,
      exclude: /(node_modules).*/,
      use: [
        'babel-loader'
        /* {
          loader: require.resolve('eslint-loader'),
          options: {
            // formatter: eslintFormatter,
            // fix: true,
            eslintPath: require.resolve('eslint')
          }
        } */
      ]
    },
    {
      test: /\.(jpg|png|svg)/,
      include: assetsPath,
      exclude: /node_modules/,
      use: {
        loader: 'file-loader',
        options: {name: fileName}
      }
    },
    {
      test: /\.(png|jpg|gif|svg)$/,
      exclude: /node_modules/,
      use: 'url-loader?limit=10000&name=assets/images/[name].[hash:8].[ext]'
    },
    /* {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }, */
    {
      test: /\.(css|sass|scss)$/,
      use: [
        require.resolve('style-loader'),
        {
          loader: require.resolve('css-loader'),
          options: {
            importLoaders: 1
          }
        },
        {
          loader: require.resolve('postcss-loader'),
          options: {
            ident: 'postcss',
            plugins: () => [
              require('postcss-flexbugs-fixes'),
              autoprefixer({
                browsers: ['>1%', 'last 4 versions', 'Firefox ESR', 'not ie < 9'],
                flexbox: 'no-2009'
              })
            ]
          }
        }
      ]
    },
    {
      test: /\.(ico|pdf)/,
      include: assetsPath,
      exclude: /node_modules/,
      use: {
        loader: 'file-loader',
        options: {name: fileName}
      }
    },
    {
      test: /\.(eot|ttf|woff|woff2|otf|svg)(\?v=\d+\.\d+\.\d+)?$/,
      include: fontsPath,
      exclude: /node_modules/,
      use: 'url-loader?limit=0&name=assets/fonts/[name].[ext]'
    }
  ]
};

module.exports = ifDev(rules);
