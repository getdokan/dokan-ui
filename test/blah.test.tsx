import React from 'react';
import * as ReactDOM from 'react-dom';
import { Default as Divider } from '../stories/Divider.stories';

describe('Divider', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Divider label="Or continue with" />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
