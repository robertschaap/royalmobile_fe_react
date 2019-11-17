import React from 'react';
import Header from '../../components/Header';

import { renderWithTheme } from '../helpers';

describe('<Header />', () => {
  it('renders without crashing', () => {
    renderWithTheme(<Header />);
  });
});
