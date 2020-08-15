import React from 'react';

import { renderWithTheme } from '../../../test/helpers';

import Benefits from '.';

describe('<Benefits />', () => {
  it('should render without crashing', () => {
    renderWithTheme(<Benefits />);
  });
});
