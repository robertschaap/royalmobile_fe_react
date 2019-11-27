import React from 'react';
import Benefits from '../../components/Benefits';

import { renderWithTheme } from '../helpers';

describe('<Benefits />', () => {
  it('should render without crashing', () => {
    renderWithTheme(<Benefits />);
  });
});
