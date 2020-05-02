import React from 'react';
import SkipNavigationButton from '.';

import { renderWithTheme } from '../../test/helpers';

describe('<SkipNavigationButton />', () => {
  it('should render without crashing', () => {
    renderWithTheme(<SkipNavigationButton />);
  });
});
