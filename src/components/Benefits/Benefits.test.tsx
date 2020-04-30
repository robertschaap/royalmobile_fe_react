import React from 'react';
import Benefits from '.';

import { renderWithTheme } from '../../test/helpers';

describe('<Benefits />', () => {
  it('should render without crashing', () => {
    renderWithTheme(<Benefits />);
  });
});
