// import IsMobile from './mobileCheker';
let IsMobile = {
  Android: () => false,
  iOS: () => false
};
if (typeof window !== 'undefined' && typeof window.navigator !== 'undefined') {
  IsMobile = require('./mobileCheker');
}

let ambient;
if (IsMobile.Android()) ambient = 'AppAndroid';
else if (IsMobile.iOS()) ambient = 'AppIOS';
else ambient = 'Website';

const document = {};
document.Datalayer = {
  pageInfo: {
    pageName: 'home-dashboard',
    url: undefined,
    step: {
      id: undefined,
      layout: undefined,
      name: undefined,
      message: undefined
    },
    ambient
  },
  userInfo: {
    userID: undefined,
    userName: undefined,
    email: undefined,
    birthDate: undefined,
    gender: undefined,
    age: undefined
  },
  productInfo: {
    products: [{
      source: undefined,
      product: undefined,
      shortName: undefined,
      ddd: undefined,
      number: undefined,
      dueDate: undefined,
      onlineAccount: undefined,
      plan: undefined
    }]
  }
};

export default document.Datalayer;
