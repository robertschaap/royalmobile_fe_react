import React from 'react';
import Benefits from '../Benefits';

import { renderWithTheme } from '../../test/helpers';

describe('<Benefits />', () => {
  it('should render without crashing', () => {
    renderWithTheme(<Benefits />);
  });
});
