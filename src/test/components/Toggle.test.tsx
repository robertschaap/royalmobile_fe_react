import React from 'react';
import Toggle from '../../components/Toggle';

import { renderWithTheme } from '../helpers';

describe('<Toggle />', () => {
  it('should render without crashing', () => {
    renderWithTheme(<Toggle />);
  });
});
