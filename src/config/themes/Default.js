const Default = {
  container: '1366px',
  body: {
    bg: '#FFFFFF',
    color: '#900AE9',
    margin: '0',
    padding: '0',
    font: {
      family: 'Simplon',
      weight: 'Regular'
    }
  },
  breakpoints: {
    tablet: 768,
    desktop: 1024
  },
  titles: {
    font: 'SimplonHeadline',
    color: '#000',
    size: {
      h1: '4.2rem',
      h2: '2.4rem',
      h3: '1.8rem',
      h4: '1.6rem',
      h5: '1.3rem',
      h6: '1.0rem'
    }
  },
  buttons: {
    font: {
      family: 'Simplon',
      weight: 'Medium'
    }
  },
  inner: {
    opacity: 1
  },
  colors: {
    primary: '#d82482',
    secondary: '#900ae9',
    success: '#00aa0b',
    error: '#f8562c',
    warning: '#ff944d',
    danger: '#f8562c',
    info: '#009df7',
    light: '#f7f7f7',
    dark: '#222',
    link: '#fff',
    gray: '#909090',
    white: '#fff',
    lightgray: '#cfcfcf'
  },
  gradients: {
    primary:
      {
        from: '#d0b71d',
        to: '#d82482'
      },
    secondary: {
      from: '#ffff00',
      to: '#00ceff'
    },
    success: {
      from: '#00baf7',
      to: '#00d213'
    },
    error: {
      from: '#fe6b03',
      to: '#e33465'
    },
    warning: {
      from: '#ffd700',
      to: '#f8562c'
    }
  }
};
export default Default;
export {Default};
