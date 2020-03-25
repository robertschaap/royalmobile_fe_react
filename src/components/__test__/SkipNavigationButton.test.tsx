import React from 'react';
import SkipNavigationButton from '../SkipNavigationButton';

import { renderWithTheme } from '../../test/helpers';

describe('<SkipNavigationButton />', () => {
  it('should render without crashing', () => {
    renderWithTheme(<SkipNavigationButton />);
  });
});
