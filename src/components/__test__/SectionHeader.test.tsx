import React from 'react';
import SectionHeader from '../SectionHeader';

import { renderWithTheme } from '../../test/helpers';

describe('<SectionHeader />', () => {
  it('should render without crashing', () => {
    renderWithTheme(<SectionHeader />);
  });
});
