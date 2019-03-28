import React from 'react';
import PropTypes from 'prop-types';
import styled, {css} from 'styled-components';
import {prop, ifProp, switchProp} from 'styled-tools';
import * as mixins from '../../../config';
import {Default as theme} from '../../../config/themes';

const TitleType = (props) => {
  switch (props.type) {
    case 'h1':
      return (
        <h1 {...props}>
          {props.children}
        </h1>
      );
    case 'h3':
      return (
        <h3 {...props}>
          {props.children}
        </h3>
      );
    case 'h4':
      return (
        <h4 {...props}>
          {props.children}
        </h4>
      );
    case 'h5':
      return (
        <h5 {...props}>
          {props.children}
        </h5>
      );
    case 'h6':
      return (
        <h6 {...props}>
          {props.children}
        </h6>
      );
    case 'h2':
    default:
      return (
        <h2 {...props}>
          {props.children}
        </h2>
      );
  }
};

const TitleStyle = styled(TitleType)`
font-family: ${({fontFamily}) => fontFamily};
width: 100%;
margin: ${props => props.margin && mixins.setSizes(props.margin)};
padding: ${props => props.padding && mixins.setSizes(props.padding)};
text-align: ${ifProp('align', prop('align'))};
font-weight: ${({fontWeight}) => mixins.fontWeight(fontWeight)};
line-height: ${props => props.lineheight && mixins.rem(props.lineheight)};

${props => props.gradient && `
    font-weight: ${props.font.weight && `${mixins.fontWeight(props.font.weight)}`};
    font-size: ${props.font.size && `${mixins.rem(props.font.size)}`};
    background: -webkit-linear-gradient(${mixins.gradient(props.gradient.direction, props.gradient.colors)});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background: -moz-linear-gradient(${mixins.gradient(props.gradient.direction, props.gradient.colors)});
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;`
}

${switchProp('themecolor', {
    primary: css`color: ${prop('theme.colors.primary')};`,
    secondary: css`color: ${prop('theme.colors.secondary')};`,
    success: css`color: ${prop('theme.colors.success')};`,
    error: css`color: ${prop('theme.colors.error')};`,
    warning: css`color: ${prop('theme.colors.warning')};`,
    info: css`color: ${prop('theme.colors.info')};`,
    light: css`color: ${prop('theme.colors.light')};`,
    dark: css`color: ${prop('theme.colors.dark')};`,
    link: css`color: ${prop('theme.colors.link')};`,
    white: css`color: ${prop('theme.colors.white')};`,
    black: css`color: ${prop('theme.colors.black')};`
  })
}

${props => props.fontcolor && `color: ${props.fontcolor}`};

${switchProp('type', {
    h1: css`font-size: ${({fontSize}) => (fontSize ? mixins.rem(fontSize) : theme.titles.size.h1)};`,
    h2: css`font-size: ${({fontSize}) => (fontSize ? mixins.rem(fontSize) : theme.titles.size.h2)};`,
    h3: css`font-size: ${({fontSize}) => (fontSize ? mixins.rem(fontSize) : theme.titles.size.h3)};`,
    h4: css`font-size: ${({fontSize}) => (fontSize ? mixins.rem(fontSize) : theme.titles.size.h4)};`,
    h5: css`font-size: ${({fontSize}) => (fontSize ? mixins.rem(fontSize) : theme.titles.size.h5)};`,
    h6: css`font-size: ${({fontSize}) => (fontSize ? mixins.rem(fontSize) : theme.titles.size.h6)};`
  })
}`;

const Title = props => (
  <TitleStyle {...props}>
    {props.children}
  </TitleStyle>
);

Title.propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  align: PropTypes.oneOf(['left', 'center', 'right', 'justify']),
  margin: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
  padding: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
  themecolor: PropTypes.oneOf(['primary', 'secondary', 'success', 'error', 'warning', 'info', 'light', 'dark', 'link', 'white', 'black']),
  gradient: PropTypes.shape({
    direction: PropTypes.string,
    colors: PropTypes.array
  }),
  fontFamily: PropTypes.oneOf(['Simplon', 'SimplonHeadline']),
  fontFamily: PropTypes.oneOf(['Light', 'Regular', 'Medium', "Bold"]),
  fontcolor: PropTypes.string,
  lineheight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  fontSize: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ])
};

Title.defaultProps = {
  fontFamily: theme.titles.font,
  fontWeight: 'Regular',
  type: 'h2',
  align: 'left',
  fontcolor: theme.titles.color,
  themecolor: 'dark',
  margin: 0,
  padding: 0,
  lineheight: 'normal'
};

export {Title};
export default Title;
