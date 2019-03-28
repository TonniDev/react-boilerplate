import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {ThemeProvider} from 'styled-components';
import {withRouter} from 'react-router';
import {Helmet} from 'react-helmet';
import {instanceOf} from 'prop-types';
import { Cookies, withCookies } from "react-cookie";

import * as Actions from './actions/firstActions';
import Routes from './routes';
import GlobalStyle from './config/styles/global-styles';
import {Default} from './config/themes';
import './helpers/dataLayer';

class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={Default}>
        <Fragment>
          <Helmet>
            <meta charSet="utf-8" />
          </Helmet>
          <GlobalStyle />
          <Routes />
        </Fragment>
      </ThemeProvider>
    );
  }
}

App.propTypes = {
  cookies: instanceOf(Cookies).isRequired
};

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default withRouter(withCookies(connect(null, mapDispatchToProps)(App)));
