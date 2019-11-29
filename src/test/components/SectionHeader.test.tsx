import React from 'react';
import SectionHeader from '../../components/SectionHeader';

import { renderWithTheme } from '../helpers';

describe('<SectionHeader />', () => {
  it('should render without crashing', () => {
    renderWithTheme(<SectionHeader />);
  });
});
