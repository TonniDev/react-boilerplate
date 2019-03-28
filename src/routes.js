import React from 'react';
import {Redirect} from 'react-router';
import {Switch, Route} from 'react-router-dom';
import {
  Home,
  NotFound,
  Terminal
} from './containers/pages';

const Routes = props => {
  console.log('@props', props);
  return (
  <Switch>
    <Route path="/" exact render={Home} />
    <Route path="/ops" component={NotFound} />
    
    {/*Outras rotas aqui*/}
    
    <Route path="*">
      <Redirect to={{
        pathname: '/ops',
        state: {referrer: window && window.location.href, message: '404'}
      }}
      />
    </Route>
  </Switch>
)};

export default Routes;
