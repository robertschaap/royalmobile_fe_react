import React from 'react';
import PageSection from '../PageSection';

import { renderWithTheme } from '../../test/helpers';

describe('<PageSection />', () => {
  it('should render without crashing', () => {
    renderWithTheme(<PageSection />);
  });
});
