const isDev = process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'develop';
const ENV = process.env.NODE_ENV || 'development';
const HOST = process.env.HOST || '';
const basename = process.env.PUBLIC_PATH || '';
const PORT = process.env.PORT || 8080;

const baseConfig = {
  all: {
    ENV,
    isDev,
    HOST,
    PORT,
    basename,
    isBrowser: typeof window !== 'undefined',
    isServer: typeof window === 'undefined',
    publicPath: 'assets', // path to assets
    fontsPath: 'assets/fonts',
    hash(str) {
      let hash = 0;
      let i;
      let chr;
      if (str.length === 0) return hash;
      for (i = 0; i < str.length; i++) {
        chr = str.charCodeAt(i);
        hash = ((hash << 5) - hash) + chr;
        hash |= 0; // Convert to 32bit integer
      }
      return hash;
    }
  },
  test: {},
  development: {
    API_BASE_URL_INTERNAL: `${basename}`
  },
  production: {
    HOST,
    PORT,
    API_BASE_URL_INTERNAL: `${basename}`
  }
};

export default Object.assign({}, baseConfig.all, baseConfig[baseConfig.all.env]);
