import React from 'react';
import HomePage from '../../components/HomePage';

import { renderWithTheme } from '../helpers';

describe('<HomePage />', () => {
  it('renders without crashing', () => {
    renderWithTheme(<HomePage>""</HomePage>);
  });
});
