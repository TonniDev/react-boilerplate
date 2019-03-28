import React from 'react';
import {storiesOf} from '@storybook/react';
import {withInfo} from '@storybook/addon-info';
import {specs} from 'storybook-addon-specifications';
import {Title} from './index';
import {tests as Test} from './index.test';

storiesOf('Atoms/Title', module)
  .add('Normal case', withInfo('Sample Text with P tag')(() => {
    const story = (
      <div>
        <Title type="h1"> Oi is Normal h1</Title>
        <Title type="h2"> Oi is Normal h2</Title>
        <Title type="h3"> Oi is Normal h3</Title>
        <Title type="h4"> Oi is Normal h4</Title>
        <Title type="h5"> Oi is Normal h5</Title>
        <Title type="h6"> Oi is Normal h6</Title>
      </div>
    );
    specs(() => Test(story));
    return story;
  }));
