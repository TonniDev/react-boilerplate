import {
  applyBreakpoints,
  calcSize,
  checkTheme,
  conflictColor,
  fontWeight,
  getResponsiveImage,
  gradient,
  positionArrow,
  rem,
  resolveColor,
  subtract1Px,
  setSizes
} from './styles_mixins';
import {numerico} from './mascarasHelper';

const __addModule = (__req, __mappedComp) => {
  const mappedComp = {};
  __req
    .keys()
    .forEach((filename) => {
      const objects = __req(filename);
      Object.getOwnPropertyNames(objects)
        .filter((name) => {
          if (name === '__esModule' || name === 'default') return false;
          return true;
        })
        .forEach((name) => {
          __mappedComp[name] = objects[name];
        });
    });
};

const applyPhoneNumberMask = string => string.toString().replace(/^(\d{2})(\d{5}|\d{4})(\d{4}).*/, '($1) $2-$3');

const bestBytesPresentation = (number) => {
  if (number < 1000) {
    return {value: number, unit: 'KB'};
  }
  const mb = number / 1024;
  if (mb <= 1000) {
    return {value: Number(Math.round(mb + 'e2') + 'e-2'), unit: 'MB'};
  }
  return {value: Number(Math.round((mb / 1024) + 'e2') + 'e-2'), unit: 'GB'};
};

const bytesConverter = (unitFrom, unitTo, number) => {
  const unitFromUpper = unitFrom.toUpperCase();
  const unitToUpper = unitTo.toUpperCase();
  
  if (unitFromUpper === 'KB') {
    if (unitToUpper === 'GB') {
      return Number(number/1024/1024).toFixed(2);
    }
    if (unitToUpper === 'MB') {
      return Number(number/1024).toFixed(2);
    }
  } else if (unitFromUpper === 'MB') {
    if (unitToUpper === 'KB') {
      return Number(number*1024).toFixed(2);
    }
    if (unitToUpper === 'GB') {
      return Number(number/1024).toFixed(2);
    }
  } else if (unitFromUpper === 'GB') {
    if (unitToUpper === 'KB') {
      return Number(number*1024*1024).toFixed(2);
    }
    if (unitToUpper === 'MB') {
      return Number(number*1024).toFixed(2);
    }
  }
  
  return number;
};

const capitalize = string => `${string.charAt(0).toUpperCase()}${string.toLowerCase().slice(1)}`;

const unitMap = {
  minutes: 'MIN',
  minute: 'MIN',
  min: 'MIN',
  sms: 'SMS'
};
const displayUnit = unit => unitMap[unit.toLowerCase()] || '';

const fireDataLayerEvent = event => window && window.dataLayer && window.dataLayer.push({event});

const getColor = (props) => {
  // let cor1 = props.color ? props.color : "#000";
  const cor = props.themeColor ? props.themeColor : '#000000';
  return cor;
};

const iconTypes = {
  controle: 'mobile',
  mobile: 'mobile',
  'mobile-pre': 'mobile',
  'mobile-pos': 'mobile',
  landline: 'landline',
  'landline-pre': 'landline',
  'landline-pos': 'landline',
  broadband: 'broadband',
  'broadband-pre': 'broadband',
  'broadband-pos': 'broadband',
  'mobile_internet-pre': 'broadband',
  'mobile_internet-pos': 'broadband',
  tv: 'tvhd',
  'tv-pre': 'tvhd',
  'tv-pos': 'tvhd',
  combo: 'combo',
  info: 'info'
};
const getTerminalIcon = (terminalType) => iconTypes[terminalType] || '';

const hashString = (str) => {
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
};

const retornarPrimeiroNome = (nome) => {
  const primeiroNome = nome.split(' ').shift().toLowerCase();
  return primeiroNome.substr(0,1).toUpperCase() + primeiroNome.substr(1);
};

const soma = (items, prop) => {
  if (items == null) {
    return 0;
  }
  return items.reduce((a, b) => (b[prop] == null ? a : a + b[prop]), 0);
};

export {
  __addModule,
  applyBreakpoints,
  applyPhoneNumberMask,
  bestBytesPresentation,
  bytesConverter,
  calcSize,
  capitalize,
  checkTheme,
  conflictColor,
  displayUnit,
  fireDataLayerEvent,
  fontWeight,
  getColor,
  getResponsiveImage,
  getTerminalIcon,
  gradient,
  hashString,
  numerico,
  positionArrow,
  rem,
  retornarPrimeiroNome,
  resolveColor,
  setSizes,
  soma,
  subtract1Px
};
