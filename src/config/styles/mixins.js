// import * as vars from './variables';
// const breakpoint = vars.breakpoint;
import {css} from 'styled-components';

const rem = (number) => {
  if (number === 'inherit') {
    return number;
  }
  let tmp = (typeof (number) === 'string' && number.indexOf('px')) ? number.replace('px', '') : number;
  tmp = parseFloat(tmp);
  return `${tmp / 16}rem`;
};

const subtract1Px = (number) => {
  let tmp = (typeof (number) === 'string' && number.indexOf('px')) ? number.replace('px', '') : number;
  tmp = parseFloat(tmp);

  return `${tmp - 1}px`;
};

const setSizes = (sizes) => {
  let n = '';
  if (typeof (sizes) === 'number') {
    n += `${sizes}px`;
  } else {
    sizes.forEach((k) => {
      n += ` ${k}px`;
    });
  }
  return n;
};

const conflictColor = (bgColor) => {
  const color = (bgColor.charAt(0) === '#') ? bgColor.substring(1, 7) : bgColor;
  const r = parseInt(color.substring(0, 2), 16); // hexToR
  const g = parseInt(color.substring(2, 4), 16); // hexToG
  const b = parseInt(color.substring(4, 6), 16); // hexToB
  const uicolors = [r / 255, g / 255, b / 255];
  const c = uicolors.map((col) => {
    if (col <= 0.03928) {
      return col / 12.92;
    }
    return ((col + 0.055) / 1.055) ** 2.4;
  });
  const L = (0.2126 * c[0]) + (0.7152 * c[1]) + (0.0722 * c[2]);
  return (L > 0.179) ? '#000' : '#FFF';
};

const calcSize = (size) => {
  switch (size) {
    case -2:
      return rem(12);
    case -1:
      return rem(14);
    case 2:
      return rem(18);
    case 3:
      return rem(24);
    case 4:
      return rem(30);
    case 5:
      return rem(40);
    case 6:
      return rem(54);
    default:
    case 1:
      return rem(16);
  }
};

const gradient = (direction, list) => {
  let hex = `${direction}, `;
  list.forEach((k, i) => {
    hex += k;
    if (i !== list.length - 1) {
      hex += ', ';
    }
  });
  return hex;
};

const checkTheme = (props) => {
  const p = props.themeColor ? 0 : props.bg;
  return p;
};

const positionArrow = (sTarget, sPop) => sTarget < sPop;

const fontWeight = (Weight) => {
  switch (Weight) {
    case 'Regular':
      return '400';
    case 'Medium':
      return '600';
    case 'Bold':
      return '700';
    default:
    case 'Light':
      return '300';
  }
};
const getResponsiveImage = (url, size) => {
  const path = url.split('.');
  return `${path[0] + size}.${path[1]}`;
};

const applyBreakpoints = ({breakpoints, theme}) => breakpoints
  && css`${Object.keys(breakpoints)
    .map(breakpoint => css`
      @media (min-width: ${theme.breakpoints[breakpoint]}px) {
        ${css(breakpoints[breakpoint])}
      }`)}`;

export {
  rem,
  subtract1Px,
  setSizes,
  gradient,
  checkTheme,
  positionArrow,
  calcSize,
  fontWeight,
  getResponsiveImage,
  conflictColor,
  applyBreakpoints
};
