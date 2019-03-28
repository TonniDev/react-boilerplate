import React from 'react';
import PropTypes from 'prop-types';
import styled, {withTheme} from 'styled-components';
import * as m from '../../../helpers/styles_mixins';
import * as icons from './iconfiles';

const StyledIcon = styled.i`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  box-sizing: content-box;

  flex-shrink: ${({shrink}) => shrink};

  position: ${({position}) => position};
  top: ${({top}) => (typeof top === 'number' ? `${top}px` : top)};
  right: ${({right}) => (typeof right === 'number' ? `${right}px` : right)};
  bottom: ${({bottom}) => (typeof bottom === 'number' ? `${bottom}px` : bottom)};
  left: ${({left}) => (typeof left === 'number' ? `${left}px` : left)};

  width: ${({width, size}) => (width !== 'auto' ? ` ${m.rem(width)}` : `${m.rem(size)}`)};
  height: ${({height, size}) => (height !== 'auto' ? ` ${m.rem(height)}` : `${m.rem(size)}`)};
  margin: ${({margin}) => m.setSizes(margin)};
  padding: ${({padding}) => m.setSizes(padding)};

  transform: ${({transform}) => transform};
  transition: ${({transition}) => transition};
  z-index: ${({zindex}) => zindex};
  pointer-events: ${({pointerevents}) => pointerevents};

  & svg {
    width: 100%;
    height: 100%;
    max-width: 100%;
    max-height: 100%;
  }

  ${m.applyBreakpoints}
`;

const getIcon = ({type, ...props}) => icons[type] && icons[type](props);

// Component Core
const Icons = withTheme(({
  fillColor, theme, type, ...props
}) => (
  <StyledIcon {...props}>
    {getIcon({type, fillColor: m.resolveColor(fillColor, theme)})}
  </StyledIcon>
));

// Component Props
Icons.propTypes = {
  type: PropTypes.string.isRequired,
  size: PropTypes.number,
  margin: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  fillColor: PropTypes.string,
  position: PropTypes.oneOf(['relative', 'absolute', 'fixed']),
  top: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  right: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  bottom: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  left: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  transform: PropTypes.string,
  zindex: PropTypes.number,
  pointerevents: PropTypes.string
};

Icons.defaultProps = {
  shrink: 'initial',
  size: 16,
  margin: [0],
  fillColor: 'primary',
  strokeColor: 'primary',
  width: 'auto',
  padding: 4,
  height: 'auto',
  transform: 'initial',
  position: 'relative',
  zindex: 0,
  pointerevents: 'initial',
  transition: 'all 0s ease-in-out'
};

export default Icons;
export {Icons};
