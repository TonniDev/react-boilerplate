import {createGlobalStyle} from 'styled-components';
import styledNormalize from 'styled-normalize';
// import {config} from '../index';

import simplonRegularEOT from '../../assets/fonts/simplonbp-regular-webfont.eot';
import simplonRegularWOFF from '../../assets/fonts/simplonbp-regular-webfont.woff';
import simplonRegularTTF from '../../assets/fonts/simplonbp-regular-webfont.ttf';
import simplonRegularSVG from '../../assets/fonts/simplonbp-regular-webfont.svg';

import simplonBoldEOT from '../../assets/fonts/simplonbp-bold-webfont.eot';
import simplonBoldWOFF from '../../assets/fonts/simplonbp-bold-webfont.woff';
import simplonBoldTTF from '../../assets/fonts/simplonbp-bold-webfont.ttf';
import simplonBoldSVG from '../../assets/fonts/simplonbp-bold-webfont.svg';

import simplonLightEOT from '../../assets/fonts/simplonbp-light-webfont.eot';
import simplonLightWOFF from '../../assets/fonts/simplonbp-light-webfont.woff';
import simplonLightTTF from '../../assets/fonts/simplonbp-light-webfont.ttf';
import simplonLightSVG from '../../assets/fonts/simplonbp-light-webfont.svg';

import simplonMediumEOT from '../../assets/fonts/simplonbp-medium-webfont.eot';
import simplonMediumWOFF from '../../assets/fonts/simplonbp-medium-webfont.woff';
import simplonMediumTTF from '../../assets/fonts/simplonbp-medium-webfont.ttf';
import simplonMediumSVG from '../../assets/fonts/simplonbp-medium-webfont.svg';

import simplonHeadlineEOT from '../../assets/fonts/simplonoi-headline-webfont.eot';
import simplonHeadlineWOFF from '../../assets/fonts/simplonoi-headline-webfont.woff';
import simplonHeadlineTTF from '../../assets/fonts/simplonoi-headline-webfont.ttf';
import simplonHeadlineSVG from '../../assets/fonts/simplonoi-headline-webfont.svg';

// const publicPath = config.get('publicPath');

export default createGlobalStyle`
  ${styledNormalize};
  @font-face {
    font-family: 'SimplonHeadline';
    src:
    url(${simplonHeadlineEOT});
    src:
    url(${`${simplonHeadlineEOT}?#iefix`}) format('embedded-opentype'),
    url(${simplonHeadlineWOFF}) format('woff'),
    url(${simplonHeadlineTTF}) format('truetype'),
    url(${simplonHeadlineSVG}) format('svg');
    font-weight: 400;
    font-style: normal;
  }
    @font-face {
    font-family: 'Simplon';
    src:
    url(${simplonLightEOT});
    src:
    url(${`${simplonLightEOT}?#iefix`}) format('embedded-opentype'),
    url(${simplonLightWOFF}) format('woff'),
    url(${simplonLightTTF}) format('truetype'),
    url(${simplonLightSVG}) format('svg');
    font-weight: 300;
    font-style: normal;
  }
  @font-face {
    font-family: 'Simplon';
    src:
    url(${simplonRegularEOT});
    src:
    url(${`${simplonRegularEOT}?#iefix`}) format('embedded-opentype'),
    url(${simplonRegularWOFF}) format('woff'),
    url(${simplonRegularTTF}) format('truetype'),
    url(${simplonRegularSVG}) format('svg');
    font-weight: 400;
    font-style: normal;
  }
  
  @font-face {
    font-family: 'Simplon';
    src:
    url(${simplonBoldEOT});
    src:
    url(${`${simplonBoldEOT}?#iefix`}) format('embedded-opentype'),
    url(${simplonBoldWOFF}) format('woff'),
    url(${simplonBoldTTF}) format('truetype'),
    url(${simplonBoldSVG}) format('svg');
    font-weight: 700;
    font-style: normal;
  }
  
  @font-face {
    font-family: 'Simplon';
    src:
    url(${simplonMediumEOT});
    src:
    url(${`${simplonMediumEOT}?#iefix`}) format('embedded-opentype'),
    url(${simplonMediumWOFF}) format('woff'),
    url(${simplonMediumTTF}) format('truetype'),
    url(${simplonMediumSVG}) format('svg');
    font-weight: 600;
    font-style: normal;
  }
  * {
    box-sizing: border-box;
  }
  html {
    font-size: 100%;
    -webkit-text-size-adjust: 100%;
    font-variant-ligatures: none;
    -webkit-font-variant-ligatures: none;
    text-rendering: optimizeLegibility;
    -moz-osx-font-smoothing: grayscale;
    font-smoothing: antialiased;
    -webkit-font-smoothing: antialiased;
    text-shadow: rgba(0, 0, 0, .01) 0 0 1px;
  }
  #application{
    opacity: 1;
  }
  :disabled {
    cursor: no-drop;
  }
  pre {
    margin: 20px auto;
  }
`;
