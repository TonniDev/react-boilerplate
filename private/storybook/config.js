import React, {Fragment} from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {configure, addDecorator, setAddon} from '@storybook/react';
import infoAddon, {setDefaults} from '@storybook/addon-info';
import Adapter from 'enzyme-adapter-react-16';
import {configure as EnzymeConfigure} from 'enzyme';
import '@storybook/addon-console';
import PropTable from '@storybook/addon-info/dist/components/PropTable';
import store from '../../src/configureStore';
import './test';

import GlobalStyles from '../../src/config/styles/global-styles';

const PropTypesTable = ({propDefinitions, ...props}) => {
  propDefinitions.forEach((def) => {
    if (typeof def.propType === 'string') {
      def.propType = {name: def.propType};
    }
  });

  return <PropTable propDefinitions={propDefinitions} {...props} />;
};

const req = require.context('../../src/components', true, /.stories.js$/);
setAddon(infoAddon);

EnzymeConfigure({adapter: new Adapter()});

function loadStories() {
  req.keys()
    .forEach(filename => req(filename));
}

addDecorator(story => (
  <Provider store={store({})}>
    <BrowserRouter>
      <Fragment>
        <GlobalStyles />
        {story()}
      </Fragment>
    </BrowserRouter>
  </Provider>
));

setDefaults({
  header: true, // Toggles display of header with component name and description
  inline: true, // Displays info inline vs click button to view
  source: true // Displays the source of story Component
});


configure(loadStories, module);
