import React from 'react';
import HomePage from '../../components/HomePage';

import { renderWithProviders } from '../helpers';

describe('<HomePage />', () => {
  it('should render without crashing', () => {
    renderWithProviders(<HomePage>""</HomePage>);
  });
});
