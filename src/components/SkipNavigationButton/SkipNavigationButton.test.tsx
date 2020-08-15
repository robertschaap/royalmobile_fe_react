import React from 'react';

import { renderWithTheme } from '../../test/helpers';

import SkipNavigationButton from '.';

describe('<SkipNavigationButton />', () => {
  it('should render without crashing', () => {
    renderWithTheme(<SkipNavigationButton />);
  });
});
