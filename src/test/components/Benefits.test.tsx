import React from 'react';
import Benefits from '../../components/Benefits';

import { renderWithTheme } from '../helpers';

describe('<Benefits />', () => {
  it('renders without crashing', () => {
    renderWithTheme(<Benefits />);
  });
});
