import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {withInfo} from '@storybook/addon-info';
import {specs} from 'storybook-addon-specifications';
import {tests as Test} from './index.test';
import {Text} from './index';

// import './index.less';

storiesOf('Atoms/Text', module)
  .add('Text component', withInfo('Sample Text with P tag')(() => {
    const story = <Text className="atom__text" onClick={action('Text clicked')}>Sample Text</Text>;

    specs(() => Test(story));

    return story;
  }));
