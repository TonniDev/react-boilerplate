import {css} from 'styled-components';
import {numerico} from './mascarasHelper';

const rem = number => (number.toString().match(/^\d+$/) || number.toString().indexOf('px') !== -1 ? `${parseFloat(number.toString()) / 16}rem` : number);

const subtract1Px = number => `${parseFloat(number.toString().replace('px', '')) - 1}px`;

const setSizes = (sizes) => {
  switch (typeof sizes) {
    case 'number':
      return `${sizes}px`;
    case 'object':
      if (sizes instanceof Array) {
        return sizes.reduce((acc, current) => {
          if (typeof current === 'number') {
            return `${acc} ${current}px`;
          }
          return acc + current;
        }, '');
      }

      return '0 auto';
    case 'string':
      return sizes;
    default:
      throw Error(
        'Invalid parameter type. setSizes accepts string, number or an array of numbers/strings'
      );
  }
};

const __addModule = (__req, __mappedComp) => {
  const mappedComp = {};
  __req.keys().forEach((filename) => {
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

const conflictColor = (bgColor) => {
  const color = bgColor.charAt(0) === '#' ? bgColor.substring(1, 7) : bgColor;
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
  const L = 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2];
  return L > 0.179 ? '#000' : '#FFF';
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

const gradient = (direction, colors, colorModifier) => Object.keys(colors).reduce(
  (acc, current) => `${acc}, ${
    colorModifier ? colorModifier(colors[current]) : colors[current]
  } ${current}%`,
  `${direction}`
);

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

const soma = (items, prop) => {
  if (items == null) {
    return 0;
  }
  return items.reduce((a, b) => (b[prop] == null ? a : a + b[prop]), 0);
};

const maximoDeFaturas = (terminais, length) => {
  const max = length || 3;
  let nExibe = true;
  if (terminais.length <= max) {
    terminais.filter((e) => {
      if (e.faturas.length > max) {
        nExibe = false;
        return false;
      }
      return true;
    });
  } else {
    nExibe = false;
  }
  return nExibe;
};

const deParaVignette = (idFuncionalidade, terminal, categoria) => {
  const parametros = [idFuncionalidade];
  if (terminal) {
    const numeroTerminal = numerico(terminal);
    parametros.push(`numTerminal=${numeroTerminal}`);
  }

  if (categoria) parametros.push(`categoriaPlano=${categoria}`);

  return encodeURI(`${process.env.API_VIGNETTE_URL}${parametros.join('&')}`);
};

const getColor = (props) => {
  // let cor1 = props.color ? props.color : "#000";
  const cor = props.themeColor ? props.themeColor : '#000000';
  return cor;
};

const resolveColor = (color, theme) => (color.indexOf('#') !== -1 || color === 'currentColor'
  ? color
  : theme.colors[color]);

const applyStyle = ({style}) => style;

const applyBreakpoints = ({breakpoints, theme}) => breakpoints
  && theme
  && css`
    ${Object.keys(breakpoints).map(
    breakpoint => theme.breakpoints[breakpoint]
        && css`
          @media (min-width: ${theme.breakpoints[breakpoint]}px) {
            ${css(breakpoints[breakpoint])};
          }
        `
  )};
  `;

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
  __addModule,
  getColor,
  soma,
  maximoDeFaturas,
  deParaVignette,
  resolveColor,
  applyStyle,
  applyBreakpoints
};
