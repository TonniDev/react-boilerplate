import React, {Fragment} from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {configure, addDecorator, addParameters} from '@storybook/react';
import {withInfo} from '@storybook/addon-info';
import Adapter from 'enzyme-adapter-react-16';
import {configure as EnzymeConfigure} from 'enzyme';
import '@storybook/addon-console';
import PropTable from '@storybook/addon-info/dist/components/PropTable';
import {ThemeProvider} from "styled-components";
import store from '../../src/configureStore';
import './test';

import GlobalStyles from '../../src/config/styles/global-styles';
import {Default} from "Themes";

const PropTypesTable = ({propDefinitions, ...props}) => {
  propDefinitions.forEach((def) => {
    if (typeof def.propType === 'string') {
      def.propType = {name: def.propType};
    }
  });

  return <PropTable propDefinitions={propDefinitions} {...props} />;
};

// setAddon(infoAddon);

EnzymeConfigure({adapter: new Adapter()});

function loadStories() {
  const req = require.context('../../src/components', true, /.stories.js$/);
  req.keys()
    .forEach(filename => req(filename));
}


addDecorator(withInfo({
  header: true,
  inline: true,
  source: true
}));
addDecorator(story => (
  <Provider store={store({})}>
    <ThemeProvider theme={Default}>
      <BrowserRouter>
        <Fragment>
          <GlobalStyles />
          {story()}
        </Fragment>
      </BrowserRouter>
    </ThemeProvider>
  </Provider>
));

/*setDefaults({
  header: true, // Toggles display of header with component name and description
  inline: true, // Displays info inline vs click button to view
  source: true // Displays the source of story Component
});*/


configure(loadStories, module);
